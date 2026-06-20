/**
 * 퍼널 단계별 KPI 목표. 현재값 vs 목표를 비교해 달성/미달을 판단한다.
 * 앱(vision-manager-app)의 동일 목표와 맞춰 알림 기준으로 쓴다.
 */
import type { FunnelOverview } from "./journey";

export type Kpi = {
  key: string;
  label: string;
  value: number; // 현재 % (소수1)
  target: number; // 목표 %
  lowerBetter: boolean;
  detail: string; // 분자/분모
};

function pct(n: number, d: number): number {
  if (!d) return 0;
  return Math.round((n / d) * 1000) / 10;
}

export function computeKpis(o: FunnelOverview): Kpi[] {
  return [
    { key: "lead_signup", label: "리드 → 가입", value: pct(o.signupsFromLead, o.leads), target: 40, lowerBetter: false, detail: `${o.signupsFromLead}/${o.leads}` },
    { key: "signup_activation", label: "가입 → 활성화", value: pct(o.activated, o.signups), target: 50, lowerBetter: false, detail: `${o.activated}/${o.signups}` },
    { key: "activation_revenue", label: "활성화 → 구독", value: pct(o.subscribers, o.activated), target: 20, lowerBetter: false, detail: `${o.subscribers}/${o.activated}` },
    { key: "active_rate", label: "현재 활성률(30일)", value: pct(o.active30d, o.signups), target: 40, lowerBetter: false, detail: `${o.active30d}/${o.signups}` },
    { key: "unsub_rate", label: "수신거부율", value: pct(o.unsub, o.leads), target: 2, lowerBetter: true, detail: `${o.unsub}/${o.leads}` },
  ];
}

export function kpiMet(k: Kpi): boolean {
  return k.lowerBetter ? k.value <= k.target : k.value >= k.target;
}

/** 분모가 0이면(데이터 부족) 평가 보류 */
export function kpiEvaluable(k: Kpi): boolean {
  const den = Number(k.detail.split("/")[1] ?? 0);
  return den > 0;
}
