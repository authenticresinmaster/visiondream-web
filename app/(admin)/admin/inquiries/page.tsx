import { requireRole } from "@/lib/auth/roles";
import { listInquiries } from "@/lib/inquiries";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { StatCard, StatGrid } from "@/components/dashboard/StatCard";
import { InquiryManager } from "@/components/admin/InquiryManager";

export const dynamic = "force-dynamic";

export default async function AdminInquiriesPage() {
  const user = await requireRole(["admin"], "/admin/inquiries");
  const items = await listInquiries();
  const counts = {
    new: items.filter((i) => i.status === "new").length,
    contacted: items.filter((i) => i.status === "contacted").length,
    closed: items.filter((i) => i.status === "closed").length,
  };

  return (
    <DashboardShell user={user} title="도입 문의">
      <StatGrid>
        <StatCard label="신규" value={counts.new} emoji="🆕" />
        <StatCard label="연락함" value={counts.contacted} emoji="📞" />
        <StatCard label="종료" value={counts.closed} emoji="✅" />
        <StatCard label="전체" value={items.length} emoji="📨" />
      </StatGrid>
      <section className="mt-8 rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <InquiryManager items={items} />
      </section>
    </DashboardShell>
  );
}
