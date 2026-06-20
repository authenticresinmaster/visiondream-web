import { requireRole } from "@/lib/auth/roles";
import { getTestimonials } from "@/lib/testimonials";
import { DashboardShell } from "@/components/dashboard/DashboardShell";
import { TestimonialModerator } from "@/components/admin/TestimonialModerator";

export const dynamic = "force-dynamic";

export default async function AdminTestimonialsPage() {
  const user = await requireRole(["admin"], "/admin/testimonials");
  const items = await getTestimonials();
  const pending = items.filter((t) => t.status === "pending");

  return (
    <DashboardShell user={user} title="고객 사례 승인">
      <p className="mb-6 text-sm text-[#6B7A8D]">
        앱에서 제출된 성공 사례를 검토·승인합니다. 승인하면 공개 페이지(/stories)와 이메일에 노출할 수 있습니다.
        대기 {pending.length}건.
      </p>
      <section className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
        <TestimonialModerator items={items} />
      </section>
    </DashboardShell>
  );
}
