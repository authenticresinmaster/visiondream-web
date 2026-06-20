import { and, desc, eq, inArray } from "drizzle-orm";
import Link from "next/link";
import { requireRole } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import type { UserSyncedData } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

type Mentee = {
  userId: number;
  name: string | null;
  email: string | null;
  redeemedAt: Date | null;
  data: UserSyncedData | null;
};

export default async function CoachPage() {
  const user = await requireRole(["coach", "admin"], "/coach");
  const db = getDb();

  // 1. 내 추천(referral) 코드
  const referrals = await db
    .select()
    .from(schema.coupons)
    .where(and(eq(schema.coupons.ownerUserId, user.id), eq(schema.coupons.kind, "referral")));
  const totalUses = referrals.reduce((sum, c) => sum + c.usedCount, 0);
  const activeCodes = referrals.filter((c) => c.isActive).length;
  const couponIds = referrals.map((c) => c.id);

  // 2. 멘티(추천코드 사용자) + 성장 데이터(동의 시에만 존재)
  let mentees: Mentee[] = [];
  if (couponIds.length > 0) {
    const redemptions = await db
      .select({
        userId: schema.couponRedemptions.userId,
        redeemedAt: schema.couponRedemptions.redeemedAt,
        name: schema.users.name,
        email: schema.users.email,
      })
      .from(schema.couponRedemptions)
      .innerJoin(schema.users, eq(schema.couponRedemptions.userId, schema.users.id))
      .where(inArray(schema.couponRedemptions.couponId, couponIds))
      .orderBy(desc(schema.couponRedemptions.redeemedAt));

    const menteeIds = [...new Set(redemptions.map((r) => r.userId))];
    const synced =
      menteeIds.length > 0
        ? await db.select().from(schema.userSyncedData).where(inArray(schema.userSyncedData.userId, menteeIds))
        : [];
    const syncedMap = new Map(synced.map((s) => [s.userId, s]));

    // 한 멘티가 여러 코드를 썼을 수 있으니 최초 1건만
    const seen = new Set<number>();
    mentees = redemptions
      .filter((r) => (seen.has(r.userId) ? false : (seen.add(r.userId), true)))
      .map((r) => ({ ...r, data: syncedMap.get(r.userId) ?? null }));
  }

  const sharedCount = mentees.filter((m) => m.data).length;

  return (
    <DashboardShell user={user} title="코치 대시보드">
      <StatGrid>
        <StatCard label="내 멘티" value={mentees.length} emoji="🤝" />
        <StatCard label="데이터 공유" value={sharedCount} emoji="📊" hint="동의한 멘티" />
        <StatCard label="추천코드" value={referrals.length} emoji="🎟️" />
        <StatCard label="총 사용" value={totalUses} emoji="📈" />
      </StatGrid>

      {/* 멘티 목록 */}
      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-[#1A2332]">내 멘티</h2>
          <span className="text-xs text-[#6B7A8D]">{activeCodes}개 코드 활성</span>
        </div>
        {mentees.length === 0 ? (
          <p className="mt-2 text-sm text-[#6B7A8D]">
            아직 내 추천코드로 가입한 멘티가 없습니다. 추천코드를 공유해 멘티를 초대하세요.
          </p>
        ) : (
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {mentees.map((m) => {
              const d = m.data;
              const goalRate =
                d && d.goalsCount ? Math.round(((d.goalsCompletedCount ?? 0) / d.goalsCount) * 100) : null;
              return (
                <Link
                  key={m.userId}
                  href={`/coach/${m.userId}`}
                  className="rounded-xl border border-black/5 bg-[#fafbfc] p-4 transition hover:border-[#105D9E]/30 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-[#1A2332]">{m.name ?? "이름 미상"}</span>
                    {d ? (
                      <span className="rounded-full bg-[#568A35]/10 px-2 py-0.5 text-xs font-medium text-[#568A35]">
                        공유중
                      </span>
                    ) : (
                      <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs text-[#6B7A8D]">미공유</span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-[#6B7A8D]">{m.email ?? "—"}</p>
                  {d ? (
                    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#1A2332]">
                      <span>🌳 Lv.{d.level ?? 1}</span>
                      <span>🔥 {d.streak ?? 0}일</span>
                      <span>🍎 {d.fruitCount ?? 0}</span>
                      {goalRate !== null && <span>🎯 목표 {goalRate}%</span>}
                      <span>✅ 습관 {d.habitsCount ?? 0}</span>
                    </div>
                  ) : (
                    <p className="mt-3 text-xs text-[#6B7A8D]">
                      멘티가 데이터 공유에 동의하면 성장 현황이 표시됩니다.
                    </p>
                  )}
                </Link>
              );
            })}
          </div>
        )}
      </section>

      {/* 추천코드 실적 */}
      <section className="mt-6 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-[#1A2332]">내 추천코드</h2>
        {referrals.length === 0 ? (
          <p className="mt-2 text-sm text-[#6B7A8D]">
            아직 발급된 추천코드가 없습니다. 관리자에게 추천코드 발급을 요청하세요.
          </p>
        ) : (
          <table className="mt-3 w-full text-left text-sm">
            <thead className="text-[#6B7A8D]">
              <tr>
                <th className="py-2">코드</th>
                <th className="py-2">사용</th>
                <th className="py-2">보상(개월)</th>
                <th className="py-2">상태</th>
              </tr>
            </thead>
            <tbody>
              {referrals.map((c) => (
                <tr key={c.id} className="border-t border-[#105D9E]/5">
                  <td className="py-2 font-mono">{c.code}</td>
                  <td className="py-2">
                    {c.usedCount}
                    {c.maxUses > 0 ? ` / ${c.maxUses}` : ""}
                  </td>
                  <td className="py-2">
                    가입 {c.rewardMonths} · 추천인 {c.referrerRewardMonths}
                  </td>
                  <td className="py-2">{c.isActive ? "활성" : "비활성"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </DashboardShell>
  );
}
