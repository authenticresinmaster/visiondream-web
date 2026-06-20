import Link from "next/link";
import { requireRole } from "@/lib/auth/roles";
import { getContactJourney } from "@/lib/journey";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { ContactSearch } from "@/components/admin/ContactSearch";

export const dynamic = "force-dynamic";

function fmt(d: string | null): string {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleString("ko-KR", { dateStyle: "medium", timeStyle: "short" });
  } catch {
    return d;
  }
}

export default async function ContactJourneyPage({
  params,
}: {
  params: Promise<{ email: string }>;
}) {
  const user = await requireRole(["admin"], "/admin/journey");
  const { email: raw } = await params;
  const email = decodeURIComponent(raw);
  const j = await getContactJourney(email);

  return (
    <DashboardShell user={user} title="고객 여정 타임라인">
      <div className="mb-6 max-w-md">
        <ContactSearch initial={email} />
      </div>

      {!j.found ? (
        <div className="rounded-2xl border border-[#105D9E]/10 bg-white p-8 text-center text-sm text-[#6B7A8D]">
          <p className="text-2xl">🔍</p>
          <p className="mt-2">{j.email} 으로 등록된 리드/사용자를 찾지 못했습니다.</p>
        </div>
      ) : (
        <>
          {/* 헤더: 누구 / 단계 / 다음 액션 */}
          <div className="mb-6 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-lg font-bold text-[#1A2332]">{j.contact?.name ?? j.user?.role ?? "고객"}</h2>
              <span className="text-sm text-[#6B7A8D]">{j.email}</span>
              <span className="rounded-full bg-[#105D9E]/10 px-3 py-1 text-xs font-medium text-[#105D9E]">{j.stage}</span>
              {j.contact && (
                <span className={`rounded-full px-2 py-0.5 text-xs ${j.contact.status === "active" ? "bg-[#568A35]/10 text-[#568A35]" : "bg-[#D14343]/10 text-[#D14343]"}`}>
                  {j.contact.status === "active" ? "구독중" : j.contact.status}
                </span>
              )}
            </div>
            <p className="mt-3 rounded-xl bg-[#F0F7FF] p-3 text-sm text-[#1A2332]">💡 다음 액션: {j.nextAction}</p>
          </div>

          {/* 요약 카드 */}
          <StatGrid>
            <StatCard label="리드 등록" value={j.contact ? fmt(j.contact.createdAt).split(" ")[0] : "—"} emoji="📥" hint={j.contact?.source ?? undefined} />
            <StatCard label="가입" value={j.user ? "가입함" : "미가입"} emoji="🙋" hint={j.user?.loginMethod ?? undefined} />
            <StatCard label="구독" value={j.subscription?.status === "active" ? (j.subscription.plan ?? "구독") : "무료"} emoji="💳" />
            <StatCard label="최근 접속" value={j.user ? `${j.user.daysInactive}일 전` : "—"} emoji="🔄" />
          </StatGrid>

          <div className="mt-4">
            <StatCard
              label="이메일 반응"
              value={`열람 ${j.engagement.opens} · 클릭 ${j.engagement.clicks}`}
              emoji="✉️"
              hint={`발송 ${j.messages.length}건`}
            />
          </div>

          {j.growth && (
            <StatGrid>
              <StatCard label="스트릭" value={`${j.growth.streak}일`} emoji="🔥" />
              <StatCard label="레벨" value={j.growth.level} emoji="⭐" />
              <StatCard label="달성 목표" value={j.growth.goalsCompleted} emoji="🎯" />
              <StatCard label="열매" value={j.growth.fruitCount} emoji="🍎" hint={j.growth.treeStage ?? undefined} />
            </StatGrid>
          )}

          {/* 타임라인 */}
          <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
            <h3 className="mb-4 font-bold text-[#1A2332]">여정 타임라인</h3>
            {j.timeline.length === 0 ? (
              <p className="text-sm text-[#6B7A8D]">기록이 없습니다.</p>
            ) : (
              <ol className="relative border-l border-[#105D9E]/15 pl-5">
                {j.timeline.map((t, i) => (
                  <li key={i} className="mb-5 last:mb-0">
                    <span className="absolute -left-[9px] flex h-4 w-4 items-center justify-center rounded-full bg-white text-[10px]">
                      {t.icon}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <span className="text-sm font-medium text-[#1A2332]">{t.label}</span>
                      {t.detail && <span className="text-xs text-[#6B7A8D]">· {t.detail}</span>}
                    </div>
                    <span className="text-xs text-[#6B7A8D]">{fmt(t.date)}</span>
                  </li>
                ))}
              </ol>
            )}
          </section>

          <div className="mt-4">
            <Link href="/admin/journey" className="text-sm text-[#105D9E] hover:underline">
              ← 퍼널 현황으로
            </Link>
          </div>
        </>
      )}
    </DashboardShell>
  );
}
