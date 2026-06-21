import Link from "next/link";
import { redirect } from "next/navigation";
import { and, desc, eq, inArray } from "drizzle-orm";
import { requireRole } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";

export const dynamic = "force-dynamic";

function parseTitles(json: string | null): string[] {
  if (!json) return [];
  try {
    const arr = JSON.parse(json);
    if (!Array.isArray(arr)) return [];
    return arr
      .map((x) => (typeof x === "string" ? x : x?.title))
      .filter((t): t is string => typeof t === "string" && t.length > 0)
      .slice(0, 20);
  } catch {
    return [];
  }
}

export default async function MenteeDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const coach = await requireRole(["coach", "admin"], "/coach");
  const { id } = await params;
  const menteeId = Number(id);
  if (!menteeId) redirect("/coach");
  const db = getDb();

  // 본인 멘티만 열람 (관리자 제외): 코치의 추천코드를 사용한 사용자인지 검증
  if (coach.role !== "admin") {
    const coupons = await db
      .select({ id: schema.coupons.id })
      .from(schema.coupons)
      .where(and(eq(schema.coupons.ownerUserId, coach.id), eq(schema.coupons.kind, "referral")));
    const couponIds = coupons.map((c) => c.id);
    if (couponIds.length === 0) redirect("/coach");
    const [red] = await db
      .select({ id: schema.couponRedemptions.id })
      .from(schema.couponRedemptions)
      .where(and(eq(schema.couponRedemptions.userId, menteeId), inArray(schema.couponRedemptions.couponId, couponIds)))
      .limit(1);
    if (!red) redirect("/coach");
  }

  const [u] = await db.select().from(schema.users).where(eq(schema.users.id, menteeId)).limit(1);
  if (!u) redirect("/coach");

  const [d] = await db
    .select()
    .from(schema.userSyncedData)
    .where(eq(schema.userSyncedData.userId, menteeId))
    .orderBy(desc(schema.userSyncedData.syncedAt))
    .limit(1);

  const goals = parseTitles(d?.goalsJson ?? null);
  const dreams = parseTitles(d?.dreamsJson ?? null);
  const goalRate = d && d.goalsCount ? Math.round(((d.goalsCompletedCount ?? 0) / d.goalsCount) * 100) : null;

  return (
    <DashboardShell user={coach} title="멘티 성장 현황">
      <Link href="/coach" className="text-sm text-[#105D9E] hover:underline">
        ← 코치 대시보드
      </Link>

      <div className="mt-4 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-lg font-bold text-[#1A2332]">{u.name ?? "이름 미상"}</h2>
          <span className="text-sm text-[#6B7A8D]">{u.email ?? "—"}</span>
          {d ? (
            <span className="rounded-full bg-[#568A35]/10 px-2 py-0.5 text-xs font-medium text-[#568A35]">데이터 공유중</span>
          ) : (
            <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs text-[#6B7A8D]">미공유</span>
          )}
        </div>
      </div>

      {!d ? (
        <div className="mt-6 rounded-2xl border border-[#105D9E]/10 bg-white p-8 text-center text-sm text-[#6B7A8D]">
          멘티가 데이터 공유에 동의하면 성장 현황이 표시됩니다.
        </div>
      ) : (
        <>
          <div className="mt-6">
            <StatGrid>
              <StatCard label="레벨" value={d.level ?? 1} emoji="⭐" />
              <StatCard label="스트릭" value={`${d.streak ?? 0}일`} emoji="🔥" />
              <StatCard label="열매" value={d.fruitCount ?? 0} emoji="🍎" hint={d.treeStage ?? undefined} />
              <StatCard
                label="목표 달성"
                value={goalRate !== null ? `${goalRate}%` : "—"}
                emoji="🎯"
                hint={`${d.goalsCompletedCount ?? 0}/${d.goalsCount ?? 0}`}
              />
            </StatGrid>
          </div>

          {d.visionStatement && (
            <section className="mt-6 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
              <h3 className="font-bold text-[#1A2332]">비전 (키워드)</h3>
              <p className="mt-2 text-sm text-[#1A2332]">{d.visionStatement}</p>
            </section>
          )}

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-[#1A2332]">꿈 ({d.dreamsCount ?? 0})</h3>
              {dreams.length ? (
                <ul className="space-y-1 text-sm text-[#1A2332]">{dreams.map((t, i) => <li key={i}>• {t}</li>)}</ul>
              ) : (
                <p className="text-sm text-[#6B7A8D]">표시할 항목 없음</p>
              )}
            </section>
            <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
              <h3 className="mb-2 font-bold text-[#1A2332]">목표 ({d.goalsCount ?? 0})</h3>
              {goals.length ? (
                <ul className="space-y-1 text-sm text-[#1A2332]">{goals.map((t, i) => <li key={i}>• {t}</li>)}</ul>
              ) : (
                <p className="text-sm text-[#6B7A8D]">표시할 항목 없음</p>
              )}
            </section>
          </div>

          <p className="mt-4 text-xs text-[#6B7A8D]">
            ※ 멘티 동의 기반 공유 데이터입니다. 평가·강요가 아닌 동행·격려에 사용해주세요.
          </p>
        </>
      )}
    </DashboardShell>
  );
}
