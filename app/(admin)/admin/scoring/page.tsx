import Link from "next/link";
import { requireRole } from "@/lib/auth/roles";
import { getScoredAudience, summarize, SEGMENT_LABEL, type ScoredPerson } from "@/lib/scoring";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { EmptyState, TableWrap } from "@/components/dashboard/ui";

export const dynamic = "force-dynamic";

function Row({ p }: { p: ScoredPerson }) {
  return (
    <tr className="border-t border-[#105D9E]/5">
      <td className="py-2">
        <Link href={`/admin/journey/${encodeURIComponent(p.email)}`} className="font-medium text-[#105D9E] hover:underline">
          {p.name ?? p.email}
        </Link>
        <div className="text-xs text-[#6B7A8D]">{p.email}</div>
      </td>
      <td className="py-2">{SEGMENT_LABEL[p.segment]}</td>
      <td className="py-2 font-bold text-[#105D9E]">{p.score}</td>
      <td className="py-2">{p.streak}일</td>
      <td className="py-2">
        {p.opens}/{p.clicks}
      </td>
      <td className="py-2">{p.daysInactive === null ? "—" : `${p.daysInactive}일 전`}</td>
    </tr>
  );
}

function Head() {
  return (
    <thead className="text-[#6B7A8D]">
      <tr>
        <th className="py-2">고객</th>
        <th className="py-2">세그먼트</th>
        <th className="py-2">점수</th>
        <th className="py-2">스트릭</th>
        <th className="py-2">열람/클릭</th>
        <th className="py-2">최근접속</th>
      </tr>
    </thead>
  );
}

export default async function ScoringPage() {
  const user = await requireRole(["admin"], "/admin/scoring");
  const people = await getScoredAudience();
  const sum = summarize(people);

  const top = [...people].sort((a, b) => b.score - a.score).slice(0, 10);
  const needCare = people
    .filter((p) => p.segment === "at_risk" || p.segment === "dormant")
    .sort((a, b) => (b.daysInactive ?? 0) - (a.daysInactive ?? 0))
    .slice(0, 15);

  return (
    <DashboardShell user={user} title="참여도 스코어 · RFM 세그먼트">
      <p className="mb-6 text-sm text-[#6B7A8D]">
        Recency(최근접속)·Frequency(스트릭·목표)·Monetary(구독) 기반 참여도(0–100)와 라이프사이클 세그먼트.
        동행 케어 우선순위와 캠페인 타깃팅에 활용합니다.
      </p>

      <StatGrid>
        <StatCard label="챔피언(구독)" value={sum.champion} emoji="🏆" />
        <StatCard label="성장중" value={sum.growing} emoji="🌱" />
        <StatCard label="신규" value={sum.new} emoji="✨" />
        <StatCard label="활성" value={sum.active} emoji="🙂" />
      </StatGrid>
      <StatGrid>
        <StatCard label="이탈위험" value={sum.at_risk} emoji="⚠️" hint="윈백 케어 대상" />
        <StatCard label="휴면" value={sum.dormant} emoji="😴" hint="30일+ 미접속" />
        <StatCard label="리드(미가입)" value={sum.lead} emoji="📥" />
        <StatCard label="전체 대상" value={people.length} emoji="👥" />
      </StatGrid>

      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <h2 className="mb-4 font-bold text-[#1A2332]">🔥 참여 상위 (앰배서더 후보)</h2>
        {top.length === 0 ? (
          <EmptyState emoji="📊" title="스코어 데이터가 아직 없습니다" desc="리드·회원 활동이 쌓이면 참여도 상위 고객이 표시됩니다." />
        ) : (
          <TableWrap>
            <table className="w-full min-w-[40rem] text-left text-sm">
              <Head />
              <tbody>{top.map((p) => <Row key={p.email} p={p} />)}</tbody>
            </table>
          </TableWrap>
        )}
      </section>

      <section className="mt-6 rounded-2xl border border-[#D14343]/15 bg-white p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-[#1A2332]">💛 케어 필요 (이탈위험·휴면)</h2>
          <Link href="/admin/campaigns?segment=at_risk" className="text-sm text-[#105D9E] hover:underline">
            윈백 캠페인 →
          </Link>
        </div>
        {needCare.length === 0 ? (
          <p className="text-sm text-[#6B7A8D]">케어가 필요한 고객이 없습니다. 👍</p>
        ) : (
          <TableWrap>
            <table className="w-full min-w-[40rem] text-left text-sm">
              <Head />
              <tbody>{needCare.map((p) => <Row key={p.email} p={p} />)}</tbody>
            </table>
          </TableWrap>
        )}
        <p className="mt-4 text-xs text-[#6B7A8D]">
          ※ 이탈위험·휴면 고객에겐 동행(Care) 엔진이 자동으로 따뜻한 재참여 메일을 보냅니다.
        </p>
      </section>
    </DashboardShell>
  );
}
