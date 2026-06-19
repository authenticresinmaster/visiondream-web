import { and, eq } from "drizzle-orm";
import { requireRole } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";

export const dynamic = "force-dynamic";

export default async function CoachPage() {
  const user = await requireRole(["coach", "admin"], "/coach");
  const db = getDb();

  // 내 추천(referral) 코드 실적
  const referrals = await db
    .select()
    .from(schema.coupons)
    .where(and(eq(schema.coupons.ownerUserId, user.id), eq(schema.coupons.kind, "referral")));

  const totalUses = referrals.reduce((sum, c) => sum + c.usedCount, 0);
  const activeCodes = referrals.filter((c) => c.isActive).length;

  return (
    <DashboardShell user={user} title="코치 대시보드">
      <StatGrid>
        <StatCard label="추천코드" value={referrals.length} emoji="🎟️" />
        <StatCard label="활성 코드" value={activeCodes} emoji="✅" />
        <StatCard label="총 사용 횟수" value={totalUses} emoji="📈" />
        <StatCard label="멘티(예정)" value="—" emoji="🤝" hint="멘티 연결 기능 준비중" />
      </StatGrid>

      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
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
