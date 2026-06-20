import { and, eq, inArray } from "drizzle-orm";
import Link from "next/link";
import { notFound } from "next/navigation";
import { requireRole } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";

export const dynamic = "force-dynamic";

function parseJson<T>(s: string | null): T[] {
  if (!s) return [];
  try {
    const v = JSON.parse(s);
    return Array.isArray(v) ? (v as T[]) : [];
  } catch {
    return [];
  }
}

export default async function MenteeDetailPage({
  params,
}: {
  params: Promise<{ menteeId: string }>;
}) {
  const coach = await requireRole(["coach", "admin"], "/coach");
  const { menteeId } = await params;
  const id = Number(menteeId);
  if (!Number.isFinite(id)) notFound();
  const db = getDb();

  // 권한: admin은 전체, 코치는 본인 추천코드로 가입한 멘티만
  if (coach.role !== "admin") {
    const myCoupons = await db
      .select({ id: schema.coupons.id })
      .from(schema.coupons)
      .where(and(eq(schema.coupons.ownerUserId, coach.id), eq(schema.coupons.kind, "referral")));
    const myCouponIds = myCoupons.map((c) => c.id);
    const link =
      myCouponIds.length > 0
        ? await db
            .select({ id: schema.couponRedemptions.id })
            .from(schema.couponRedemptions)
            .where(
              and(
                eq(schema.couponRedemptions.userId, id),
                inArray(schema.couponRedemptions.couponId, myCouponIds),
              ),
            )
            .limit(1)
        : [];
    if (link.length === 0) notFound();
  }

  const [mentee] = await db.select().from(schema.users).where(eq(schema.users.id, id)).limit(1);
  if (!mentee) notFound();
  const [data] = await db
    .select()
    .from(schema.userSyncedData)
    .where(eq(schema.userSyncedData.userId, id))
    .limit(1);

  // 미동의(데이터 없음)
  if (!data) {
    return (
      <DashboardShell user={coach} title={`멘티 · ${mentee.name ?? "이름 미상"}`}>
        <Link href="/coach" className="text-sm font-bold text-[#105D9E] hover:underline">
          ← 코치 대시보드
        </Link>
        <div className="mt-6 rounded-2xl border border-black/5 bg-[#fafbfc] p-8 text-center">
          <div className="text-4xl">🔒</div>
          <h2 className="mt-3 font-bold text-[#1A2332]">아직 데이터를 공유하지 않았어요</h2>
          <p className="mt-2 text-sm text-[#6B7A8D]">
            멘티가 앱에서 데이터 공유에 동의하면 비전·목표·습관 현황을 볼 수 있습니다.
          </p>
        </div>
      </DashboardShell>
    );
  }

  const dreams = parseJson<{ title: string; category?: string; status?: string }>(data.dreamsJson);
  const goals = parseJson<{ title: string; priority?: string; status?: string }>(data.goalsJson);
  const plans = parseJson<{ title: string; type?: string; completed?: boolean }>(data.plansJson);
  const habits = parseJson<{ title: string; frequency?: string; isActive?: boolean }>(data.habitsJson);
  const goalRate = data.goalsCount ? Math.round(((data.goalsCompletedCount ?? 0) / data.goalsCount) * 100) : 0;
  const planRate = data.plansCount ? Math.round(((data.plansCompletedCount ?? 0) / data.plansCount) * 100) : 0;

  return (
    <DashboardShell user={coach} title={`멘티 · ${mentee.name ?? "이름 미상"}`}>
      <Link href="/coach" className="text-sm font-bold text-[#105D9E] hover:underline">
        ← 코치 대시보드
      </Link>

      <div className="mt-4">
        <StatGrid>
          <StatCard label="레벨" value={`Lv.${data.level ?? 1}`} emoji="🌳" />
          <StatCard label="연속 기록" value={`${data.streak ?? 0}일`} emoji="🔥" />
          <StatCard label="열매" value={data.fruitCount ?? 0} emoji="🍎" />
          <StatCard label="목표 달성률" value={`${goalRate}%`} emoji="🎯" />
        </StatGrid>
      </div>

      {(data.visionStatement || data.visionMission || data.visionCoreValues) && (
        <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-[#1A2332]">비전</h2>
          {data.visionStatement && <p className="mt-2 text-sm text-[#1A2332]">🎯 {data.visionStatement}</p>}
          {data.visionMission && <p className="mt-1 text-sm text-[#6B7A8D]">미션: {data.visionMission}</p>}
          {data.visionCoreValues && (
            <p className="mt-1 text-sm text-[#6B7A8D]">핵심가치: {data.visionCoreValues}</p>
          )}
        </section>
      )}

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[#1A2332]">목표</h2>
            <span className="text-xs text-[#6B7A8D]">
              {data.goalsCompletedCount ?? 0}/{data.goalsCount ?? 0} 달성
            </span>
          </div>
          {goals.length === 0 ? (
            <p className="mt-2 text-sm text-[#6B7A8D]">공유된 목표가 없습니다.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {goals.slice(0, 8).map((g, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span>{g.status === "completed" ? "✅" : "⏳"}</span>
                  <span className="text-[#1A2332]">{g.title}</span>
                  {g.priority && <span className="text-xs text-[#6B7A8D]">({g.priority})</span>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[#1A2332]">습관</h2>
            <span className="text-xs text-[#6B7A8D]">{data.habitsCount ?? 0}개 활성</span>
          </div>
          {habits.length === 0 ? (
            <p className="mt-2 text-sm text-[#6B7A8D]">공유된 습관이 없습니다.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {habits.slice(0, 8).map((h, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span>{h.isActive ? "🟢" : "⚪"}</span>
                  <span className="text-[#1A2332]">{h.title}</span>
                  {h.frequency && <span className="text-xs text-[#6B7A8D]">{h.frequency}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <h2 className="font-bold text-[#1A2332]">꿈 ({data.dreamsCount ?? 0})</h2>
          {dreams.length === 0 ? (
            <p className="mt-2 text-sm text-[#6B7A8D]">공유된 꿈이 없습니다.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {dreams.slice(0, 8).map((d, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span>{d.status === "completed" ? "🏆" : "✨"}</span>
                  <span className="text-[#1A2332]">{d.title}</span>
                  {d.category && <span className="text-xs text-[#6B7A8D]">{d.category}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h2 className="font-bold text-[#1A2332]">계획</h2>
            <span className="text-xs text-[#6B7A8D]">완료율 {planRate}%</span>
          </div>
          {plans.length === 0 ? (
            <p className="mt-2 text-sm text-[#6B7A8D]">공유된 계획이 없습니다.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {plans.slice(0, 8).map((p, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span>{p.completed ? "✅" : "⬜"}</span>
                  <span className="text-[#1A2332]">{p.title}</span>
                  {p.type && <span className="text-xs text-[#6B7A8D]">{p.type}</span>}
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>

      <p className="mt-6 text-center text-xs text-[#6B7A8D]">
        마지막 동기화: {data.syncedAt ? new Date(data.syncedAt).toLocaleString("ko-KR") : "—"} · 멘티 동의 하에
        공유된 데이터입니다.
      </p>
    </DashboardShell>
  );
}
