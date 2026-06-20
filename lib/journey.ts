/**
 * 고객 여정/라이프사이클 현황 (마케팅·퍼널 전문가 프레임워크 적용).
 * - AARRR(해적지표): Acquisition→Activation→Retention→Revenue→Referral
 * - 라이프사이클 단계: 방문자→리드→가입→활성화→구독→추천(+이탈위험)
 * 여러 스키마(landing/marketing/public)를 이메일·userId로 조인해 집계한다.
 */
import "server-only";
import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";

export type FunnelOverview = {
  visitors30d: number; // Acquisition (익명 방문 세션)
  leads: number; // 이메일 리드(marketing.contacts)
  leadsActive: number;
  leads30d: number;
  signups: number; // 가입(public.users)
  signupsFromLead: number; // 리드→가입 매칭(이메일)
  activated: number; // 활성화(목표/스트릭 보유)
  active30d: number; // Retention(최근 30일 로그인)
  subscribers: number; // Revenue(활성 구독)
  referrals: number; // Referral(추천 사용)
  unsub: number; // 수신거부
};

export async function getFunnelOverview(): Promise<FunnelOverview> {
  const db = getDb();
  const result = await db.execute(sql`
    select
      coalesce((select count(distinct "sessionId") from landing.page_events where "createdAt" > now() - interval '30 days'),0)::int as visitors30d,
      (select count(*) from marketing.contacts)::int as leads,
      (select count(*) from marketing.contacts where status='active')::int as leads_active,
      (select count(*) from marketing.contacts where created_at > now() - interval '30 days')::int as leads30d,
      (select count(*) from public.users)::int as signups,
      (select count(*) from public.users u where exists (select 1 from marketing.contacts c where lower(c.email)=lower(u.email)))::int as signups_from_lead,
      (select count(distinct uid) from (
        select "userId" as uid from public.user_synced_data where "goalsCount" > 0 or streak > 0
        union
        select user_id as uid from public.activity_events where user_id is not null and type in ('vision_set','goal_create','goal_complete','habit_check','bta_check')
      ) act)::int as activated,
      (select count(*) from public.users where "lastSignedIn" > now() - interval '30 days')::int as active30d,
      (select count(*) from public.user_subscriptions where status='active')::int as subscribers,
      (select count(*) from public.coupon_redemptions)::int as referrals,
      (select count(*) from marketing.contacts where status='unsubscribed')::int as unsub
  `);
  const rows = result as unknown as Record<string, number | string>[];
  const r = rows[0] ?? {};
  const n = (k: string) => Number(r[k] ?? 0);
  return {
    visitors30d: n("visitors30d"),
    leads: n("leads"),
    leadsActive: n("leads_active"),
    leads30d: n("leads30d"),
    signups: n("signups"),
    signupsFromLead: n("signups_from_lead"),
    activated: n("activated"),
    active30d: n("active30d"),
    subscribers: n("subscribers"),
    referrals: n("referrals"),
    unsub: n("unsub"),
  };
}

export function rate(numerator: number, denominator: number): number {
  if (!denominator) return 0;
  return Math.round((numerator / denominator) * 1000) / 10; // 소수1자리 %
}

/** 라이프사이클 단계 정의 + 전문가 워크플로우 기반 권장 액션(벤치마킹). */
export type StageDef = {
  key: string;
  label: string;
  value: (o: FunnelOverview) => number;
  /** 직전 단계 대비 전환율 계산용 */
  prev?: (o: FunnelOverview) => number;
  action: string; // 마케팅 권장 액션
};

// ─── 개별 고객 여정 타임라인 ──────────────────────────────────────────────────────
export type TimelineItem = { date: string; icon: string; label: string; detail?: string };

export type ContactJourney = {
  found: boolean;
  email: string;
  contact: {
    name: string | null;
    source: string | null;
    status: string;
    consent: boolean;
    tags: string[];
    createdAt: string;
  } | null;
  user: {
    id: number;
    role: string;
    loginMethod: string | null;
    createdAt: string;
    lastSignedIn: string;
    daysInactive: number;
  } | null;
  growth: {
    streak: number;
    level: number;
    fruitCount: number;
    goalsCompleted: number;
    treeStage: string | null;
    hasVision: boolean;
  } | null;
  subscription: { plan: string | null; status: string; endDate: string | null } | null;
  messages: { kind: string; status: string; date: string }[];
  engagement: { opens: number; clicks: number };
  stage: string;
  nextAction: string;
  timeline: TimelineItem[];
};

function rows(result: unknown): Array<Record<string, unknown>> {
  return result as unknown as Array<Record<string, unknown>>;
}

export async function getContactJourney(emailInput: string): Promise<ContactJourney> {
  const db = getDb();
  const email = emailInput.trim().toLowerCase();
  const empty: ContactJourney = {
    found: false,
    email,
    contact: null,
    user: null,
    growth: null,
    subscription: null,
    messages: [],
    engagement: { opens: 0, clicks: 0 },
    stage: "미발견",
    nextAction: "이 이메일로 등록된 리드/사용자가 없습니다.",
    timeline: [],
  };
  if (!email) return empty;

  try {
    const [cRows, uRows] = await Promise.all([
      db.execute(sql`select id, name, source, status, consent, tags, created_at from marketing.contacts where lower(email)=${email} limit 1`),
      db.execute(sql`select id, role, "loginMethod", "createdAt", "lastSignedIn", floor(extract(epoch from (now()-"lastSignedIn"))/86400)::int as days_inactive from public.users where lower("email")=${email} limit 1`),
    ]);
    const c = rows(cRows)[0];
    const u = rows(uRows)[0];
    if (!c && !u) return empty;

    const contactId = c ? Number(c.id) : null;
    const userId = u ? Number(u.id) : null;

    const [gRows, sRows, mRows] = await Promise.all([
      userId
        ? db.execute(sql`select streak, level, "fruitCount", "goalsCompletedCount", "treeStage", "visionStatement", "syncedAt" from public.user_synced_data where "userId"=${userId} order by "syncedAt" desc limit 1`)
        : Promise.resolve([]),
      userId
        ? db.execute(sql`select s.status, s."endDate", s."startDate", p."nameKo" as plan from public.user_subscriptions s left join public.subscription_plans p on p.id=s."planId" where s."userId"=${userId} order by s."createdAt" desc limit 1`)
        : Promise.resolve([]),
      contactId
        ? db.execute(sql`select sequence_key, campaign_id, status, created_at from marketing.email_messages where contact_id=${contactId} order by created_at desc limit 50`)
        : Promise.resolve([]),
    ]);
    const g = rows(gRows)[0];
    const s = rows(sRows)[0];
    const msgs = rows(mRows);

    const contact = c
      ? {
          name: (c.name as string | null) ?? null,
          source: (c.source as string | null) ?? null,
          status: String(c.status),
          consent: Boolean(c.consent),
          tags: (c.tags as string[] | null) ?? [],
          createdAt: String(c.created_at),
        }
      : null;
    const user = u
      ? {
          id: Number(u.id),
          role: String(u.role),
          loginMethod: (u.loginMethod as string | null) ?? null,
          createdAt: String(u.createdAt),
          lastSignedIn: String(u.lastSignedIn),
          daysInactive: Number(u.days_inactive ?? 0),
        }
      : null;
    const goalsCompleted = g ? Number(g.goalsCompletedCount ?? 0) : 0;
    const streak = g ? Number(g.streak ?? 0) : 0;
    const hasVision = Boolean(g && g.visionStatement);
    const growth = g
      ? {
          streak,
          level: Number(g.level ?? 1),
          fruitCount: Number(g.fruitCount ?? 0),
          goalsCompleted,
          treeStage: (g.treeStage as string | null) ?? null,
          hasVision,
        }
      : null;
    const subActive = s && String(s.status) === "active";
    const subscription = s
      ? { plan: (s.plan as string | null) ?? null, status: String(s.status), endDate: s.endDate ? String(s.endDate) : null }
      : null;
    const STATUS_KO: Record<string, string> = {
      queued: "발송대기",
      sent: "발송",
      delivered: "전달",
      opened: "열람",
      clicked: "클릭",
      bounced: "반송",
      complained: "스팸신고",
      failed: "실패",
    };
    const opens = msgs.filter((m) => ["opened", "clicked"].includes(String(m.status))).length;
    const clicks = msgs.filter((m) => String(m.status) === "clicked").length;
    const messages = msgs.map((m) => ({
      kind:
        m.sequence_key === "welcome"
          ? "환영 시퀀스"
          : m.sequence_key === "care"
            ? "동행(케어)"
            : m.campaign_id
              ? "캠페인"
              : "메일",
      status: STATUS_KO[String(m.status)] ?? String(m.status),
      date: String(m.created_at),
    }));

    // 단계 분류 + 권장 액션
    const activated = streak > 0 || goalsCompleted > 0 || hasVision;
    let stage: string, nextAction: string;
    if (subActive) {
      stage = "구독자";
      nextAction = "추천코드·고객사례로 옹호자(추천)로 전환. 동행 케어 유지.";
    } else if (user && activated) {
      stage = "활성화 · 미구독";
      nextAction = "가치 도달 시점에 프리미엄 업그레이드 캠페인. (activated_no_sub 세그먼트)";
    } else if (user) {
      stage = "가입 · 미활성화";
      nextAction = "온보딩으로 첫 비전·목표 설정 유도. 활성화가 핵심.";
    } else if (contact) {
      stage = "리드 · 미가입";
      nextAction = "환영 시퀀스 진행 + 앱 가입 유도. (leads_no_signup 세그먼트)";
    } else {
      stage = "방문자";
      nextAction = "이메일 캡처.";
    }
    if (user && user.daysInactive >= 7 && !subActive) {
      nextAction = `${user.daysInactive}일 미접속 — 동행(윈백) 케어가 자동 발송됩니다. ${nextAction}`;
    }

    // 타임라인(시간 역순)
    const timeline: TimelineItem[] = [];
    if (contact) timeline.push({ date: contact.createdAt, icon: "📥", label: "리드 등록", detail: contact.source ?? undefined });
    if (user) timeline.push({ date: user.createdAt, icon: "🙋", label: "회원 가입", detail: user.loginMethod ?? undefined });
    if (s && s.startDate) timeline.push({ date: String(s.startDate), icon: "💳", label: "구독 시작", detail: subscription?.plan ?? undefined });
    if (user) timeline.push({ date: user.lastSignedIn, icon: "🔄", label: "최근 접속" });
    for (const m of messages) timeline.push({ date: m.date, icon: m.kind === "동행(케어)" ? "💛" : "✉️", label: m.kind, detail: m.status });
    timeline.sort((a, b) => (a.date < b.date ? 1 : -1));

    return { found: true, email, contact, user, growth, subscription, messages, engagement: { opens, clicks }, stage, nextAction, timeline };
  } catch (err) {
    console.warn("[journey] getContactJourney failed:", err);
    return empty;
  }
}

export const STAGES: StageDef[] = [
  {
    key: "acquisition",
    label: "방문 (Acquisition)",
    value: (o) => o.visitors30d,
    action: "리드마그넷(전자책)·SEO/광고 유입. 이메일 캡처 폼 노출 강화.",
  },
  {
    key: "lead",
    label: "리드 (이메일 확보)",
    value: (o) => o.leads,
    prev: (o) => o.visitors30d,
    action: "환영 시퀀스 자동 발송. 가치 콘텐츠로 신뢰 형성.",
  },
  {
    key: "signup",
    label: "가입 (Sign-up)",
    value: (o) => o.signups,
    prev: (o) => o.leads,
    action: "앱 다운로드 CTA. 리드→가입 미전환자에 리타겟 메일.",
  },
  {
    key: "activation",
    label: "활성화 (Aha-moment)",
    value: (o) => o.activated,
    prev: (o) => o.signups,
    action: "온보딩으로 첫 비전·목표 설정 유도. 활성화가 리텐션의 선행지표.",
  },
  {
    key: "revenue",
    label: "구독 (Revenue)",
    value: (o) => o.subscribers,
    prev: (o) => o.activated,
    action: "가치 도달 시점에 프리미엄 업그레이드 캠페인. 한정 혜택.",
  },
  {
    key: "referral",
    label: "추천 (Referral)",
    value: (o) => o.referrals,
    prev: (o) => o.subscribers,
    action: "추천코드 양면보상·고객사례·커뮤니티로 바이럴 루프.",
  },
];
