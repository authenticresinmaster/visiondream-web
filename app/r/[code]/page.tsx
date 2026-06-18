import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

const APP_URL = "https://app.visiondream.kr";

export const metadata: Metadata = {
  title: "추천 초대 — 비전드림",
  description: "추천코드로 비전드림에 가입하면 프리미엄 1개월을 무료로 받을 수 있어요.",
  robots: { index: false, follow: true },
};

export default async function ReferralPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const safeCode = (code || "").toUpperCase().slice(0, 24);
  const appLink = `${APP_URL}?ref=${encodeURIComponent(safeCode)}`;

  return (
    <PageShell>
      <section className="bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-20 text-center text-white">
        <div className="mx-auto max-w-xl animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-amber px-4 py-1.5 text-sm font-extrabold text-navy">
            🎁 추천 초대
          </div>
          <h1 className="text-2xl font-black leading-tight md:text-4xl">
            초대를 받으셨어요!
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            아래 추천코드로 가입하면 <b className="text-gold">프리미엄 1개월</b>을
            무료로 받을 수 있어요. 추천해주신 분께도 혜택이 돌아갑니다.
          </p>

          <div className="mx-auto mt-8 w-full max-w-xs rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
              내 추천코드
            </p>
            <p className="mt-2 select-all text-3xl font-black tracking-[0.2em] text-gold">
              {safeCode || "VISIONDREAM"}
            </p>
          </div>

          <a
            href={appLink}
            className="mt-8 inline-block rounded-xl bg-amber px-8 py-4 text-lg font-extrabold text-navy transition hover:brightness-105"
          >
            앱 시작하고 혜택 받기 →
          </a>
          <p className="mt-4 text-xs text-white/50">
            앱 설치 후 회원가입 시 위 추천코드를 입력하세요.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">
            비전드림이 처음이신가요?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-relaxed text-navy/60">
            성공(S) = 믿음(B) × 생각(T) × 행동(A). 비전을 꿈·목표·습관으로
            연결해 매일 한 걸음씩 실천하게 돕는 비전관리 앱입니다.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              ["🗂️ 비전보드", "인생 비전과 꿈을 시각화하고 한 화면에서 관리"],
              ["🤖 AI 코치", "비전·목표를 함께 다듬는 맞춤 코칭"],
              ["🌳 성공의 나무", "실천할수록 자라는 게이미피케이션"],
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6 text-center"
              >
                <h3 className="text-base font-extrabold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
