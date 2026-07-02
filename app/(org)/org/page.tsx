import { eq, inArray } from "drizzle-orm";
import { requireRole } from "@/lib/auth/roles";
import { getDb, schema } from "@/lib/db";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { TrendChart } from "@/components/dashboard/TrendChart";
import { Badge, EmptyState, TableWrap, TodayPanel, type TodayItem } from "@/components/dashboard/ui";

export const dynamic = "force-dynamic";

function avg(nums: number[]): number {
  if (nums.length === 0) return 0;
  return Math.round(nums.reduce((a, b) => a + b, 0) / nums.length);
}

/** ISO 8601 주차(year, week) 계산 — 팀 리포트의 year/week 기준과 맞춘다. */
function isoWeek(date: Date): { year: number; week: number } {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const week = Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7);
  return { year: d.getUTCFullYear(), week };
}

export default async function OrgPage() {
  const user = await requireRole(["team_admin", "admin"], "/org");
  const db = getDb();

  // 내가 소유한 팀
  const myTeams = await db.select().from(schema.teams).where(eq(schema.teams.ownerId, user.id));
  const teamIds = myTeams.map((t) => t.id);

  const members = teamIds.length
    ? await db.select().from(schema.teamMembers).where(inArray(schema.teamMembers.teamId, teamIds))
    : [];
  const activeMembers = members.filter((m) => m.status === "active").length;

  const reports = teamIds.length
    ? await db.select().from(schema.teamReports).where(inArray(schema.teamReports.teamId, teamIds))
    : [];
  const avgBta = avg(reports.map((r) => r.btaCompletionRate));
  const avgHabit = avg(reports.map((r) => r.habitCompletionRate));
  const avgPlan = avg(reports.map((r) => r.planCompletionRate));

  // 주간 추이 (year/week 기준 집계, 최근 10주)
  const byWeek = new Map<
    string,
    { year: number; week: number; bta: number[]; habit: number[]; plan: number[] }
  >();
  for (const r of reports) {
    const key = `${r.year}-${String(r.week).padStart(2, "0")}`;
    const e = byWeek.get(key) ?? { year: r.year, week: r.week, bta: [], habit: [], plan: [] };
    e.bta.push(r.btaCompletionRate);
    e.habit.push(r.habitCompletionRate);
    e.plan.push(r.planCompletionRate);
    byWeek.set(key, e);
  }
  const trend = [...byWeek.values()]
    .sort((a, b) => a.year - b.year || a.week - b.week)
    .slice(-10)
    .map((e) => ({
      name: `${e.week}주`,
      BTA: avg(e.bta),
      습관: avg(e.habit),
      계획: avg(e.plan),
    }));

  // 오늘 할 일: 이번 주 리포트 현황
  const { year: curYear, week: curWeek } = isoWeek(new Date());
  const thisWeekReports = reports.filter((r) => r.year === curYear && r.week === curWeek);
  const thisWeekBta = avg(thisWeekReports.map((r) => r.btaCompletionRate));
  const pendingMembers = members.filter((m) => m.status !== "active").length;

  const today: TodayItem[] = [];
  if (myTeams.length === 0) {
    today.push({ emoji: "🏢", text: "앱에서 팀을 만들고 멤버를 초대하세요." });
  } else if (thisWeekReports.length > 0) {
    today.push({
      emoji: "📊",
      text: `이번 주(${curWeek}주차) 리포트 ${thisWeekReports.length}건 도착 · 평균 BTA ${thisWeekBta}%`,
      tone: "good",
    });
  } else {
    today.push({
      emoji: "⏳",
      text: `이번 주(${curWeek}주차) 리포트가 아직 없습니다. 팀원 활동이 집계되면 채워집니다.`,
      tone: "muted",
    });
  }
  if (pendingMembers > 0)
    today.push({ emoji: "✉️", text: `초대 수락을 기다리는 멤버 ${pendingMembers}명이 있습니다.`, tone: "warn" });

  return (
    <DashboardShell user={user} title="조직 대시보드">
      <TodayPanel title="이번 주 리포트" items={today} />
      <StatGrid>
        <StatCard label="팀" value={myTeams.length} emoji="🏢" />
        <StatCard label="활성 멤버" value={activeMembers} hint={`전체 ${members.length}명`} emoji="👥" />
        <StatCard label="평균 BTA 달성률" value={`${avgBta}%`} emoji="🔥" />
        <StatCard label="평균 습관 달성률" value={`${avgHabit}%`} emoji="✅" />
      </StatGrid>

      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-[#1A2332]">주간 달성률 추이</h2>
        <TrendChart
          data={trend}
          yUnit="%"
          lines={[
            { key: "BTA", label: "BTA", color: "#105D9E" },
            { key: "습관", label: "습관", color: "#568A35" },
            { key: "계획", label: "계획", color: "#439AE3" },
          ]}
        />
      </section>

      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-[#1A2332]">내 팀</h2>
        {myTeams.length === 0 ? (
          <div className="mt-4">
            <EmptyState
              emoji="🏢"
              title="아직 생성한 팀이 없습니다"
              desc="앱에서 팀을 만들고 멤버를 초대하면 여기에서 주간 달성률과 리포트를 확인할 수 있습니다."
            />
          </div>
        ) : (
          <TableWrap>
            <table className="mt-3 w-full min-w-[32rem] text-left text-sm">
              <thead className="text-[#6B7A8D]">
                <tr>
                  <th className="py-2">팀</th>
                  <th className="py-2">초대코드</th>
                  <th className="py-2">멤버</th>
                  <th className="py-2">상태</th>
                </tr>
              </thead>
              <tbody>
                {myTeams.map((t) => {
                  const count = members.filter((m) => m.teamId === t.id && m.status === "active").length;
                  return (
                    <tr key={t.id} className="border-t border-[#105D9E]/5">
                      <td className="py-2 font-medium">{t.name}</td>
                      <td className="py-2 font-mono">{t.inviteCode}</td>
                      <td className="py-2">
                        {count} / {t.maxMembers}
                      </td>
                      <td className="py-2">
                        {t.isActive ? <Badge tone="good">활성</Badge> : <Badge tone="muted">비활성</Badge>}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </TableWrap>
        )}
        <p className="mt-4 text-xs text-[#6B7A8D]">
          집계는 팀원 동의 기반 주간 리포트(평균 계획 {avgPlan}%)를 사용합니다.
        </p>
      </section>
    </DashboardShell>
  );
}
