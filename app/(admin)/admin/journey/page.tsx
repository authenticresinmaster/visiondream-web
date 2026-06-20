import Link from "next/link";
import { requireRole } from "@/lib/auth/roles";
import { getFunnelOverview, rate, STAGES } from "@/lib/journey";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { ContactSearch } from "@/components/admin/ContactSearch";

const QUICK_ACTIONS = [
  { seg: "leads_no_signup", label: "리드·미가입 → 가입 유도 메일", emoji: "📨" },
  { seg: "activated_no_sub", label: "활성화·미구독 → 업그레이드 메일", emoji: "⬆️" },
  { seg: "at_risk", label: "이탈위험 → 윈백 메일", emoji: "🔁" },
];

export const dynamic = "force-dynamic";

export default async function JourneyPage() {
  const user = await requireRole(["admin"], "/admin/journey");
  const o = await getFunnelOverview();

  const stages = STAGES.map((s) => {
    const value = s.value(o);
    const prev = s.prev?.(o);
    return { ...s, value, conv: prev !== undefined ? rate(value, prev) : null };
  });
  const maxVal = Math.max(...stages.map((s) => s.value), 1);

  return (
    <DashboardShell user={user} title="고객 여정 · 퍼널 현황">
      <p className="mb-4 text-sm text-[#6B7A8D]">
        AARRR(해적지표) 기반 라이프사이클 현황. 각 단계 전환율과 전문가 권장 액션을 함께 봅니다.
      </p>
      <div className="mb-6 max-w-md">
        <ContactSearch />
      </div>

      <StatGrid>
        <StatCard label="방문(30일)" value={o.visitors30d} emoji="👀" hint="Acquisition" />
        <StatCard label="이메일 리드" value={o.leads} emoji="📥" hint={`최근30일 +${o.leads30d}`} />
        <StatCard label="가입" value={o.signups} emoji="🙋" hint={`리드전환 ${o.signupsFromLead}`} />
        <StatCard label="활성 구독" value={o.subscribers} emoji="💳" hint="Revenue" />
      </StatGrid>

      <StatGrid>
        <StatCard label="활성화" value={o.activated} emoji="⚡" hint="목표/스트릭 보유" />
        <StatCard label="최근 활동(30일)" value={o.active30d} emoji="🔄" hint="Retention" />
        <StatCard label="추천 사용" value={o.referrals} emoji="🤝" hint="Referral" />
        <StatCard label="수신거부" value={o.unsub} emoji="🚫" hint="리스트 건강도" />
      </StatGrid>

      {/* 퍼널 단계 + 전환율 + 권장 액션 */}
      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-[#1A2332]">퍼널 단계별 전환 & 권장 액션</h2>
        <div className="space-y-3">
          {stages.map((s) => (
            <div key={s.key} className="rounded-xl border border-[#105D9E]/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-[#1A2332]">{s.label}</span>
                  {s.conv !== null && (
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                        s.conv >= 30
                          ? "bg-[#568A35]/10 text-[#568A35]"
                          : s.conv >= 10
                            ? "bg-[#E0A800]/10 text-[#A9810A]"
                            : "bg-[#D14343]/10 text-[#D14343]"
                      }`}
                    >
                      전환 {s.conv}%
                    </span>
                  )}
                </div>
                <span className="text-lg font-bold text-[#105D9E]">{s.value.toLocaleString()}</span>
              </div>
              {/* 비주얼 바 */}
              <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#F0F7FF]">
                <div
                  className="h-full rounded-full bg-[#105D9E]"
                  style={{ width: `${Math.max((s.value / maxVal) * 100, 2)}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-[#6B7A8D]">💡 {s.action}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 분석 → 행동: 세그먼트별 캠페인 바로가기 */}
      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-[#1A2332]">마케팅 액션 (세그먼트 → 캠페인)</h2>
        <div className="grid gap-3 sm:grid-cols-3">
          {QUICK_ACTIONS.map((a) => (
            <Link
              key={a.seg}
              href={`/admin/campaigns?segment=${a.seg}`}
              className="rounded-xl border border-[#105D9E]/15 p-4 transition-colors hover:bg-[#F0F7FF]"
            >
              <div className="text-xl">{a.emoji}</div>
              <p className="mt-1 text-sm font-medium text-[#1A2332]">{a.label}</p>
              <span className="text-xs text-[#105D9E]">캠페인 만들기 →</span>
            </Link>
          ))}
        </div>
      </section>

      <p className="mt-4 text-xs text-[#6B7A8D]">
        ※ 방문은 랜딩 page_events 기준(최근 30일), 활성화는 목표·스트릭 보유 사용자, 리텐션은 최근 30일 로그인.
      </p>
    </DashboardShell>
  );
}
