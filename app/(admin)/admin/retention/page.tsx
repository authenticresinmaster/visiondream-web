import { requireRole } from "@/lib/auth/roles";
import { getSignupCohorts, getWeeklyActive } from "@/lib/cohorts";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { TableWrap } from "@/components/dashboard/ui";

export const dynamic = "force-dynamic";

function heat(p: number): string {
  if (p >= 60) return "bg-[#568A35]/15 text-[#3f6626]";
  if (p >= 30) return "bg-[#E0A800]/15 text-[#8a6a08]";
  if (p > 0) return "bg-[#D14343]/10 text-[#a33]";
  return "text-[#6B7A8D]";
}

function Cell({ p }: { p: number }) {
  return <span className={`inline-block min-w-12 rounded-md px-2 py-1 text-center text-sm ${heat(p)}`}>{p}%</span>;
}

export default async function RetentionPage() {
  const user = await requireRole(["admin"], "/admin/retention");
  const [cohorts, wau] = await Promise.all([getSignupCohorts(), getWeeklyActive()]);

  const totalSize = cohorts.reduce((s, c) => s + c.size, 0);

  return (
    <DashboardShell user={user} title="코호트 리텐션">
      <p className="mb-6 text-sm text-[#6B7A8D]">
        가입 월별로 묶어 잔존·활성·구독 전환을 봅니다. 제품이 사람을 얼마나 붙잡는지(stickiness)를 보는 핵심 지표입니다.
      </p>

      <section className="mb-6 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-[#1A2332]">주간 활성 사용자 (WAU)</h2>
        {wau.length === 0 ? (
          <p className="text-sm text-[#6B7A8D]">
            활동 로그가 아직 없습니다. 사용자가 앱에 접속하면 일일 활성이 자동 적재되어 채워집니다.
          </p>
        ) : (
          <TrendChart data={wau} lines={[{ key: "활성", label: "활성 사용자", color: "#105D9E" }]} />
        )}
      </section>

      <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        {cohorts.length === 0 ? (
          <p className="text-sm text-[#6B7A8D]">가입 데이터가 없습니다.</p>
        ) : (
          <TableWrap>
            <table className="w-full min-w-[42rem] text-left text-sm">
              <thead className="text-[#6B7A8D]">
                <tr>
                  <th className="py-2">가입 코호트</th>
                  <th className="py-2">가입 수</th>
                  <th className="py-2">W1+ 잔존</th>
                  <th className="py-2">W4+ 잔존</th>
                  <th className="py-2">현재 활성</th>
                  <th className="py-2">구독 전환</th>
                </tr>
              </thead>
              <tbody>
                {cohorts.map((c) => (
                  <tr key={c.cohort} className="border-t border-[#105D9E]/5">
                    <td className="py-2 font-medium text-[#1A2332]">{c.cohort}</td>
                    <td className="py-2">{c.size}</td>
                    <td className="py-2"><Cell p={c.retainedW1Pct} /></td>
                    <td className="py-2"><Cell p={c.retainedW4Pct} /></td>
                    <td className="py-2"><Cell p={c.activeNowPct} /></td>
                    <td className="py-2"><Cell p={c.subscribedPct} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableWrap>
        )}
        <p className="mt-4 text-xs text-[#6B7A8D]">
          ※ 누적 가입 {totalSize}명. 잔존은 마지막 접속(lastSignedIn) 기준 프록시 — W1+는 가입 7일 이후에도 접속,
          W4+는 28일 이후. 정밀 주차별 매트릭스는 활동 이벤트 로그 적재 후 고도화 예정.
        </p>
      </section>
    </DashboardShell>
  );
}
