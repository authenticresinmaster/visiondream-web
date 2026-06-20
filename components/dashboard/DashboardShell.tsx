import Link from "next/link";
import type { User, UserRole } from "@/lib/db/schema";

const ROLE_LABEL: Record<UserRole, string> = {
  admin: "관리자",
  team_admin: "조직관리자",
  coach: "코치",
  team_member: "팀원",
  user: "회원",
};

const NAV: Record<UserRole, { href: string; label: string }[]> = {
  admin: [
    { href: "/admin", label: "대시보드" },
    { href: "/admin/journey", label: "고객여정" },
    { href: "/admin/scoring", label: "스코어" },
    { href: "/admin/retention", label: "리텐션" },
    { href: "/admin/kpi", label: "KPI" },
    { href: "/admin/testimonials", label: "사례" },
    { href: "/admin/inquiries", label: "문의" },
    { href: "/admin/campaigns", label: "캠페인" },
    { href: "/org", label: "조직" },
    { href: "/coach", label: "코치" },
    { href: "/my", label: "내 비전" },
  ],
  team_admin: [
    { href: "/org", label: "조직 대시보드" },
    { href: "/my", label: "내 비전" },
  ],
  coach: [
    { href: "/coach", label: "코치 대시보드" },
    { href: "/my", label: "내 비전" },
  ],
  team_member: [{ href: "/my", label: "내 비전" }],
  user: [{ href: "/my", label: "내 비전" }],
};

export function DashboardShell({
  user,
  title,
  children,
}: {
  user: User;
  title: string;
  children: React.ReactNode;
}) {
  const nav = NAV[user.role] ?? NAV.user;
  return (
    <div className="min-h-screen bg-[#F0F7FF]">
      <header className="border-b border-[#105D9E]/10 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-bold text-[#1A2332]">
              🌱 비전드림
            </Link>
            <span className="rounded-full bg-[#105D9E]/10 px-2 py-0.5 text-xs font-medium text-[#105D9E]">
              {ROLE_LABEL[user.role]}
            </span>
          </div>
          <nav className="flex items-center gap-4 text-sm">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-[#6B7A8D] hover:text-[#105D9E]">
                {n.label}
              </Link>
            ))}
            <a href="/logout" className="text-[#6B7A8D] hover:text-[#105D9E]">
              로그아웃
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#1A2332]">{title}</h1>
          <p className="mt-1 text-sm text-[#6B7A8D]">
            {user.name ?? "회원"}님, 환영합니다.
          </p>
        </div>
        {children}
      </main>
    </div>
  );
}
