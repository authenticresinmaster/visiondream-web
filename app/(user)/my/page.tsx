import { and, desc, eq } from "drizzle-orm";
import { requireAuth } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { APP_BASE_URL } from "@/lib/auth/constants";
import { getFunnelByEmail } from "@/lib/funnel";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { TodayPanel, type TodayItem } from "@/components/dashboard/ui";

export const dynamic = "force-dynamic";

export default async function MyPage() {
  const user = await requireAuth("/my");
  const db = getDb();
  const funnel = await getFunnelByEmail(user.email);

  const [sub] = await db
    .select({
      status: schema.userSubscriptions.status,
      endDate: schema.userSubscriptions.endDate,
      planName: schema.subscriptionPlans.nameKo,
    })
    .from(schema.userSubscriptions)
    .leftJoin(
      schema.subscriptionPlans,
      eq(schema.userSubscriptions.planId, schema.subscriptionPlans.id),
    )
    .where(
      and(eq(schema.userSubscriptions.userId, user.id), eq(schema.userSubscriptions.status, "active")),
    )
    .orderBy(desc(schema.userSubscriptions.createdAt))
    .limit(1);

  const planLabel = sub?.planName ?? "무료";
  const endLabel = sub?.endDate ? new Date(sub.endDate).toLocaleDateString("ko-KR") : "—";

  const today: TodayItem[] = [
    { emoji: "🌳", text: "앱에서 오늘의 성공 나무와 습관을 체크하세요.", href: APP_BASE_URL },
  ];
  if (funnel.ebookReadUrl)
    today.push({ emoji: "📚", text: "신청한 전자책을 이어서 읽어보세요.", href: funnel.ebookReadUrl });
  if (!sub) today.push({ emoji: "✨", text: "프리미엄으로 무제한 목표·AI 코칭을 열어보세요.", href: "/pricing", tone: "warn" });

  return (
    <DashboardShell user={user} title="내 비전 대시보드">
      <TodayPanel title="오늘의 실천" items={today} />
      <StatGrid>
        <StatCard label="현재 요금제" value={planLabel} emoji="💳" />
        <StatCard label="구독 상태" value={sub ? "이용중" : "무료"} emoji="✅" />
        <StatCard label="만료일" value={endLabel} emoji="📅" />
        <StatCard label="로그인" value={user.loginMethod ?? "—"} emoji="🔑" />
      </StatGrid>

      <section className="mt-8 grid gap-4 md:grid-cols-2">
        <a
          href={APP_BASE_URL}
          className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="text-2xl">📱</div>
          <h2 className="mt-2 font-bold text-[#1A2332]">앱에서 비전 관리하기</h2>
          <p className="mt-1 text-sm text-[#6B7A8D]">
            성공의 나무·플래너·습관·AI 코치를 앱에서 이어가세요.
          </p>
        </a>
        <a
          href={funnel.ebookReadUrl ?? "https://book.visiondream.kr"}
          className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            {funnel.isSubscriber && (
              <span className="rounded-full bg-[#568A35]/10 px-2 py-0.5 text-xs font-medium text-[#568A35]">
                전자책 신청자
              </span>
            )}
          </div>
          <h2 className="mt-2 font-bold text-[#1A2332]">
            {funnel.ebookReadUrl ? "전자책 이어보기" : "전자책 받기"}
          </h2>
          <p className="mt-1 text-sm text-[#6B7A8D]">
            {funnel.ebookReadUrl
              ? "신청하신 전자책을 내 계정에서 바로 이어 읽으세요."
              : "S=B×T×A 성공법칙 전자책을 무료로 받아보세요."}
          </p>
        </a>
      </section>

      {!sub && (
        <div className="mt-8 rounded-2xl bg-[#105D9E] p-6 text-white">
          <h2 className="font-bold">프리미엄으로 더 멀리</h2>
          <p className="mt-1 text-sm text-white/80">
            무제한 꿈·목표, AI 코칭, 고급 통계를 잠금 해제하세요.
          </p>
          <a
            href="/pricing"
            className="mt-3 inline-block rounded-xl bg-white px-4 py-2 text-sm font-medium text-[#105D9E]"
          >
            요금제 보기
          </a>
        </div>
      )}
    </DashboardShell>
  );
}
