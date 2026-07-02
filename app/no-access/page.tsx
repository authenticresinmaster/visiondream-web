import type { Metadata } from "next";
import Link from "next/link";
import { getCurrentUser } from "@/lib/auth/session";
import { roleHome } from "@/lib/auth/roles";
import type { UserRole } from "@/lib/db/schema";

export const metadata: Metadata = {
  title: "접근 권한 없음",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

const ROLE_LABEL: Record<UserRole, string> = {
  admin: "관리자",
  team_admin: "조직관리자",
  coach: "코치",
  team_member: "팀원",
  user: "회원",
};

function isRole(v: string): v is UserRole {
  return v === "admin" || v === "team_admin" || v === "coach" || v === "team_member" || v === "user";
}

export default async function NoAccessPage({
  searchParams,
}: {
  searchParams: Promise<{ need?: string; from?: string }>;
}) {
  const { need } = await searchParams;
  const user = await getCurrentUser();

  const neededRoles = (need ?? "")
    .split(",")
    .map((r) => r.trim())
    .filter(isRole);
  const neededLabel = neededRoles.length
    ? [...new Set(neededRoles.map((r) => ROLE_LABEL[r]))].join(" 또는 ")
    : null;

  const myHome = user ? roleHome(user.role) : "/login";
  const myLabel = user ? ROLE_LABEL[user.role] : null;

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F0F7FF] px-4">
      <div className="w-full max-w-md rounded-2xl border border-[#105D9E]/10 bg-white p-8 text-center shadow-sm">
        <div className="text-4xl" aria-hidden>
          🔒
        </div>
        <h1 className="mt-3 text-xl font-bold text-[#1A2332]">
          {neededLabel
            ? `현재 계정은 ${neededLabel} 권한이 아닙니다`
            : "이 페이지에 접근할 권한이 없습니다"}
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-[#6B7A8D]">
          {user ? (
            <>
              지금 <span className="font-medium text-[#1A2332]">{myLabel}</span> 계정
              {user.email ? ` (${user.email})` : ""}으로 로그인되어 있습니다.
              {neededLabel && ` 이 화면은 ${neededLabel} 전용입니다.`}
              <br />
              권한이 필요하면 관리자에게 요청하세요.
            </>
          ) : (
            "로그인이 필요한 화면입니다. 앱과 동일한 계정으로 로그인해 주세요."
          )}
        </p>

        <div className="mt-6 flex flex-col gap-2">
          <Link
            href={myHome}
            className="rounded-xl bg-[#105D9E] px-4 py-2.5 text-sm font-medium text-white transition hover:brightness-110"
          >
            {user ? "내 대시보드로 이동" : "로그인하기"}
          </Link>
          <Link
            href="/"
            className="rounded-xl border border-[#105D9E]/20 px-4 py-2.5 text-sm font-medium text-[#105D9E] transition hover:bg-[#F0F7FF]"
          >
            홈으로
          </Link>
          {user && (
            <a href="/logout" className="mt-1 text-xs text-[#6B7A8D] hover:text-[#105D9E]">
              다른 계정으로 로그인 (로그아웃)
            </a>
          )}
        </div>
      </div>
    </main>
  );
}
