import { count, eq } from "drizzle-orm";
import { requireRole } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { getFunnelTotals } from "@/lib/funnel";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { TrendChart } from "@/components/dashboard/TrendChart";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireRole(["admin"], "/admin");
  const db = getDb();

  const [
    [{ value: userCount }],
    [{ value: activeSubs }],
    [{ value: teamCount }],
    [{ value: coachCount }],
  ] = await Promise.all([
    db.select({ value: count() }).from(schema.users),
    db
      .select({ value: count() })
      .from(schema.userSubscriptions)
      .where(eq(schema.userSubscriptions.status, "active")),
    db.select({ value: count() }).from(schema.teams),
    db.select({ value: count() }).from(schema.users).where(eq(schema.users.role, "coach")),
  ]);

  const funnel = await getFunnelTotals();

  // 월별 가입 추이 (최근 6개월)
  const allUsers = await db.select({ createdAt: schema.users.createdAt }).from(schema.users);
  const now = new Date();
  const months = Array.from({ length: 6 }, (_, i) => {
    const d = new Date(now.getFullYear(), now.getMonth() - (5 - i), 1);
    return { key: `${d.getFullYear()}-${d.getMonth()}`, label: `${d.getMonth() + 1}월`, count: 0 };
  });
  const monthIdx = new Map(months.map((m, i) => [m.key, i]));
  for (const u of allUsers) {
    const d = new Date(u.createdAt);
    const i = monthIdx.get(`${d.getFullYear()}-${d.getMonth()}`);
    if (i !== undefined) months[i].count += 1;
  }
  const signupTrend = months.map((m) => ({ name: m.label, 가입: m.count }));

  const recentUsers = await db
    .select({
      name: schema.users.name,
      email: schema.users.email,
      role: schema.users.role,
      loginMethod: schema.users.loginMethod,
      lastSignedIn: schema.users.lastSignedIn,
    })
    .from(schema.users)
    .orderBy(schema.users.lastSignedIn)
    .limit(10);

  return (
    <DashboardShell user={user} title="관리자 대시보드">
      <StatGrid>
        <StatCard label="전체 회원" value={userCount} emoji="👤" />
        <StatCard label="활성 구독" value={activeSubs} emoji="💳" />
        <StatCard label="팀/조직" value={teamCount} emoji="🏢" />
        <StatCard label="코치" value={coachCount} emoji="🤝" />
      </StatGrid>

      <h2 className="mt-8 mb-3 text-sm font-semibold text-[#6B7A8D]">전자책 퍼널</h2>
      <StatGrid>
        <StatCard label="전자책 신청자" value={funnel.ebookCount} emoji="📚" hint="ebook.subscribers" />
        <StatCard label="랜딩 신청자" value={funnel.landingCount} emoji="📝" hint="landing.subscribers" />
        <StatCard
          label="회원 전환"
          value={userCount}
          emoji="🔗"
          hint="이메일로 자동 연결"
        />
      </StatGrid>

      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-[#1A2332]">월별 가입 추이</h2>
        <TrendChart data={signupTrend} lines={[{ key: "가입", label: "신규 가입", color: "#105D9E" }]} />
      </section>

      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-[#1A2332]">최근 활동 회원</h2>
        <table className="mt-3 w-full text-left text-sm">
          <thead className="text-[#6B7A8D]">
            <tr>
              <th className="py-2">이름</th>
              <th className="py-2">이메일</th>
              <th className="py-2">역할</th>
              <th className="py-2">로그인</th>
            </tr>
          </thead>
          <tbody>
            {recentUsers.map((u, i) => (
              <tr key={i} className="border-t border-[#105D9E]/5">
                <td className="py-2 font-medium">{u.name ?? "—"}</td>
                <td className="py-2">{u.email ?? "—"}</td>
                <td className="py-2">{u.role}</td>
                <td className="py-2">{u.loginMethod ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </DashboardShell>
  );
}
