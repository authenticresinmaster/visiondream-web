/**
 * RFM · 리드/참여 스코어링.
 * Recency(최근 접속) · Frequency(스트릭·목표·레벨) · Monetary(구독) 기반으로
 * 각 사람을 점수화하고 라이프사이클 세그먼트로 분류 → 동행 케어 우선순위 + 마케팅 활용.
 */
import "server-only";
import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";

export type Segment =
  | "champion"
  | "growing"
  | "new"
  | "at_risk"
  | "dormant"
  | "active"
  | "lead";

export const SEGMENT_LABEL: Record<Segment, string> = {
  champion: "챔피언(구독자)",
  growing: "성장중",
  new: "신규",
  active: "활성",
  at_risk: "이탈위험",
  dormant: "휴면",
  lead: "리드(미가입)",
};

export type ScoredPerson = {
  email: string;
  name: string | null;
  isUser: boolean;
  hasSub: boolean;
  daysInactive: number | null;
  daysSinceSignup: number | null;
  streak: number;
  goals: number;
  level: number;
  opens: number; // 이메일 열람 수
  clicks: number; // 이메일 클릭 수
  score: number; // 0-100 참여도
  segment: Segment;
};

type Raw = {
  email: string;
  name: string | null;
  user_id: number | null;
  signup_at: string | null;
  lead_at: string | null;
  days_inactive: number | null;
  streak: number;
  goals: number;
  level: number;
  has_sub: boolean;
  opens: number;
  clicks: number;
};

function classify(p: Omit<ScoredPerson, "score" | "segment">): Segment {
  if (!p.isUser) return "lead";
  if (p.hasSub) return "champion";
  const d = p.daysInactive ?? 999;
  if (d > 30) return "dormant";
  if (d > 14) return "at_risk";
  if (p.streak >= 7 || p.goals > 0) return "growing";
  if (p.daysSinceSignup !== null && p.daysSinceSignup <= 14) return "new";
  return "active";
}

function scoreOf(p: Omit<ScoredPerson, "score" | "segment">): number {
  // Recency 35% · Frequency(앱활동) 30% · Email engagement 15% · Monetary 20%
  const recency = p.isUser ? Math.max(0, 100 - (p.daysInactive ?? 30) * 3.3) : 50;
  const frequency = Math.min(100, p.streak * 5 + p.goals * 10 + p.level * 3);
  const engagement = Math.min(100, p.opens * 15 + p.clicks * 30);
  const monetary = p.hasSub ? 100 : 0;
  return Math.round(recency * 0.35 + frequency * 0.3 + engagement * 0.15 + monetary * 0.2);
}

export async function getScoredAudience(limit = 500): Promise<ScoredPerson[]> {
  const db = getDb();
  let raw: Raw[] = [];
  try {
    const result = await db.execute(sql`
      select lower(u."email") as email, coalesce(u.name, c.name) as name,
        u.id as user_id, u."createdAt" as signup_at, c.created_at as lead_at,
        floor(extract(epoch from (now()-u."lastSignedIn"))/86400)::int as days_inactive,
        coalesce(sd.streak,0) as streak, coalesce(sd."goalsCompletedCount",0) as goals, coalesce(sd.level,1) as level,
        exists(select 1 from public.user_subscriptions s where s."userId"=u.id and s.status='active') as has_sub,
        (select count(*) from marketing.email_messages m where m.contact_id=c.id and m.status in ('opened','clicked')) as opens,
        (select count(*) from marketing.email_messages m where m.contact_id=c.id and m.status='clicked') as clicks
      from public.users u
      left join marketing.contacts c on lower(c.email)=lower(u."email")
      left join lateral (select * from public.user_synced_data sd where sd."userId"=u.id order by sd."syncedAt" desc limit 1) sd on true
      union all
      select lower(c.email), c.name, null::int, null, c.created_at,
        null::int, 0, 0, 1, false,
        (select count(*) from marketing.email_messages m where m.contact_id=c.id and m.status in ('opened','clicked')),
        (select count(*) from marketing.email_messages m where m.contact_id=c.id and m.status='clicked')
      from marketing.contacts c
      where c.status='active' and not exists (select 1 from public.users u where lower(u."email")=lower(c.email))
      limit ${limit}
    `);
    raw = result as unknown as Raw[];
  } catch (err) {
    console.warn("[scoring] getScoredAudience failed:", err);
    return [];
  }

  const now = Date.now();
  return raw
    .filter((r) => r.email) // 이메일 없는 사용자는 제외(조회·발송 불가)
    .map((r) => {
    const daysSinceSignup = r.signup_at
      ? Math.floor((now - new Date(r.signup_at).getTime()) / 86400000)
      : null;
    const base = {
      email: String(r.email),
      name: r.name ?? null,
      isUser: r.user_id !== null,
      hasSub: Boolean(r.has_sub),
      daysInactive: r.days_inactive === null ? null : Number(r.days_inactive),
      daysSinceSignup,
      streak: Number(r.streak ?? 0),
      goals: Number(r.goals ?? 0),
      level: Number(r.level ?? 1),
      opens: Number(r.opens ?? 0),
      clicks: Number(r.clicks ?? 0),
    };
    return { ...base, score: scoreOf(base), segment: classify(base) };
  });
}

export function summarize(people: ScoredPerson[]): Record<Segment, number> {
  const out: Record<Segment, number> = {
    champion: 0,
    growing: 0,
    new: 0,
    active: 0,
    at_risk: 0,
    dormant: 0,
    lead: 0,
  };
  for (const p of people) out[p.segment] += 1;
  return out;
}
