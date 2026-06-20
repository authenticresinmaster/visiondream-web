import { requireRole } from "@/lib/auth/roles";
import { getFunnelOverview } from "@/lib/journey";
import { computeKpis, kpiMet, kpiEvaluable } from "@/lib/kpi";
import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const dynamic = "force-dynamic";

export default async function KpiPage() {
  const user = await requireRole(["admin"], "/admin/kpi");
  const overview = await getFunnelOverview();
  const kpis = computeKpis(overview);

  return (
    <DashboardShell user={user} title="퍼널 KPI 목표">
      <p className="mb-6 text-sm text-[#6B7A8D]">
        단계별 전환 목표 대비 현황. 목표 미달 시 관리자에게 자동 알림(이메일·디스코드)이 발송됩니다.
      </p>

      <div className="space-y-3">
        {kpis.map((k) => {
          const evaluable = kpiEvaluable(k);
          const met = kpiMet(k);
          const ratio = Math.min((k.value / Math.max(k.target, 1)) * 100, 100);
          return (
            <div key={k.key} className="rounded-2xl border border-[#105D9E]/10 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#1A2332]">{k.label}</span>
                {!evaluable ? (
                  <span className="rounded-full bg-[#6B7A8D]/10 px-2 py-0.5 text-xs text-[#6B7A8D]">데이터 부족</span>
                ) : (
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${met ? "bg-[#568A35]/10 text-[#568A35]" : "bg-[#D14343]/10 text-[#D14343]"}`}>
                    {met ? "달성" : "미달"}
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-2xl font-bold text-[#105D9E]">{k.value}%</span>
                <span className="text-sm text-[#6B7A8D]">/ 목표 {k.lowerBetter ? "≤" : "≥"} {k.target}%</span>
                <span className="ml-auto text-xs text-[#6B7A8D]">{k.detail}</span>
              </div>
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#F0F7FF]">
                <div
                  className={`h-full rounded-full ${evaluable && met ? "bg-[#568A35]" : "bg-[#105D9E]"}`}
                  style={{ width: `${Math.max(ratio, 2)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-4 text-xs text-[#6B7A8D]">
        ※ 목표값은 코드(lib/kpi.ts)와 앱 알림 기준이 동일합니다. 분모가 0인 항목은 평가 보류됩니다.
      </p>
    </DashboardShell>
  );
}
