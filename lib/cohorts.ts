/**
 * 가입 코호트 리텐션 — "우리 제품이 사람을 붙잡는가".
 * 데이터 한계: 활동 이벤트 로그가 아닌 lastSignedIn(마지막 접속) 단일값 기반이라
 * 정밀 주차별 매트릭스 대신 "잔존 프록시"를 쓴다:
 *   - W1+ 잔존 = lastSignedIn 이 가입 후 7일 이상 뒤 (첫날 이후 돌아옴)
 *   - W4+ 잔존 = 28일 이상 뒤
 *   - 현재활성 = 최근 30일 접속
 *   - 구독전환 = 활성 구독 보유
 */
import "server-only";
import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";

export type Cohort = {
  cohort: string;
  size: number;
  retainedW1Pct: number;
  retainedW4Pct: number;
  activeNowPct: number;
  subscribedPct: number;
};

function pct(n: number, d: number): number {
  if (!d) return 0;
  return Math.round((n / d) * 100);
}

/** 주간 활성 사용자(WAU) — 활동 로그(activity_events) 기반, 최근 N주. */
export async function getWeeklyActive(weeks = 8): Promise<{ name: string; 활성: number }[]> {
  const db = getDb();
  try {
    const result = await db.execute(sql`
      select to_char(date_trunc('week', occurred_at),'MM/DD') as wk,
             count(distinct user_id)::int as active
      from public.activity_events
      where occurred_at > now() - (${weeks} || ' weeks')::interval
      group by date_trunc('week', occurred_at)
      order by date_trunc('week', occurred_at)
    `);
    const rows = result as unknown as Array<{ wk: string; active: number }>;
    return rows.map((r) => ({ name: String(r.wk), 활성: Number(r.active ?? 0) }));
  } catch (err) {
    console.warn("[cohorts] getWeeklyActive failed:", err);
    return [];
  }
}

export async function getSignupCohorts(months = 12): Promise<Cohort[]> {
  const db = getDb();
  try {
    const result = await db.execute(sql`
      select to_char(date_trunc('month', u."createdAt"),'YYYY-MM') as cohort,
        count(*)::int as size,
        count(*) filter (where extract(epoch from (u."lastSignedIn"-u."createdAt"))>=7*86400)::int as retained_w1,
        count(*) filter (where extract(epoch from (u."lastSignedIn"-u."createdAt"))>=28*86400)::int as retained_w4,
        count(*) filter (where u."lastSignedIn" > now() - interval '30 days')::int as active_now,
        count(*) filter (where exists(select 1 from public.user_subscriptions s where s."userId"=u.id and s.status='active'))::int as subscribed
      from public.users u
      group by 1 order by 1 desc limit ${months}
    `);
    const rows = result as unknown as Array<Record<string, number | string>>;
    return rows.map((r) => {
      const size = Number(r.size ?? 0);
      return {
        cohort: String(r.cohort),
        size,
        retainedW1Pct: pct(Number(r.retained_w1 ?? 0), size),
        retainedW4Pct: pct(Number(r.retained_w4 ?? 0), size),
        activeNowPct: pct(Number(r.active_now ?? 0), size),
        subscribedPct: pct(Number(r.subscribed ?? 0), size),
      };
    });
  } catch (err) {
    console.warn("[cohorts] getSignupCohorts failed:", err);
    return [];
  }
}
