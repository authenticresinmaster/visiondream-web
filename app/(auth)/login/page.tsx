import type { Metadata } from "next";
import Link from "next/link";
import { appLoginUrl } from "@/lib/auth/constants";

export const metadata: Metadata = {
  title: "로그인",
  description: "서우 비전드림 로그인",
  robots: { index: false, follow: true },
};

export const dynamic = "force-dynamic";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirect?: string }>;
}) {
  const { redirect } = await searchParams;

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F0F7FF] px-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm border border-[#105D9E]/10">
        <div className="text-center mb-8">
          <div className="text-3xl mb-2">🌱</div>
          <h1 className="text-xl font-bold text-[#1A2332]">서우 비전드림</h1>
          <p className="mt-1 text-sm text-[#6B7A8D]">비전을 심으면, 반드시 열매가 열립니다</p>
        </div>

        <div className="space-y-3">
          <a
            href={appLoginUrl("kakao", redirect)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#FEE500] px-4 py-3 font-medium text-[#191600] transition-opacity hover:opacity-90"
          >
            카카오로 시작하기
          </a>
          <a
            href={appLoginUrl("google", redirect)}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#DADCE0] bg-white px-4 py-3 font-medium text-[#1A2332] transition-colors hover:bg-gray-50"
          >
            Google로 시작하기
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-[#6B7A8D]">
          로그인하면 앱과 동일한 계정으로 연결됩니다.
        </p>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-[#105D9E] hover:underline">
            ← 홈으로
          </Link>
        </div>
      </div>
    </main>
  );
}
