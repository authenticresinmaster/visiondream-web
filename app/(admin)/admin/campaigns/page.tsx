import { desc } from "drizzle-orm";
import { requireRole } from "@/lib/auth/roles";
import { getDb } from "@/lib/db";
import { mktCampaigns } from "@/lib/db/marketingSchema";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { CampaignForm } from "@/components/admin/CampaignForm";

export const dynamic = "force-dynamic";

const STATUS_LABEL: Record<string, string> = {
  draft: "초안",
  scheduled: "예약됨",
  sending: "발송중",
  sent: "발송완료",
};

export default async function CampaignsPage({
  searchParams,
}: {
  searchParams: Promise<{ segment?: string }>;
}) {
  const user = await requireRole(["admin"], "/admin/campaigns");
  const { segment } = await searchParams;
  const db = getDb();

  const list = await db.select().from(mktCampaigns).orderBy(desc(mktCampaigns.createdAt)).limit(20);

  return (
    <DashboardShell user={user} title="마케팅 캠페인">
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-[#1A2332]">새 캠페인</h2>
          <p className="mb-4 text-xs text-[#6B7A8D]">
            세그먼트(퍼널 단계)를 골라 메일을 예약하면 앱 스케줄러가 발송합니다. 링크를 넣으면 디스코드에도 공유됩니다.
          </p>
          <CampaignForm initialSegment={segment ?? "all"} />
        </section>

        <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
          <h2 className="mb-4 font-bold text-[#1A2332]">최근 캠페인</h2>
          {list.length === 0 ? (
            <p className="text-sm text-[#6B7A8D]">아직 캠페인이 없습니다.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead className="text-[#6B7A8D]">
                <tr>
                  <th className="py-2">제목</th>
                  <th className="py-2">세그먼트</th>
                  <th className="py-2">상태</th>
                </tr>
              </thead>
              <tbody>
                {list.map((c) => (
                  <tr key={c.id} className="border-t border-[#105D9E]/5">
                    <td className="py-2 font-medium">{c.title}</td>
                    <td className="py-2 text-[#6B7A8D]">{(c.segment as { type?: string })?.type ?? "all"}</td>
                    <td className="py-2">{STATUS_LABEL[c.status] ?? c.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </section>
      </div>
    </DashboardShell>
  );
}
