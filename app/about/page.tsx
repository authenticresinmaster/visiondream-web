import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "이야기 — 서우 비전드림",
  description:
    "비전드림은 '비전을 심으면 반드시 열매가 열린다'는 믿음에서 시작했습니다. 성공법칙 성공(S)=믿음(B)×생각(T)×행동(A)와 비전드림이 추구하는 가치를 소개합니다.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        badge="OUR STORY"
        title="비전을 심으면, 반드시 열매가 열립니다"
        sub="막연한 소망을 매일의 실천으로 바꾸기 위해, 비전드림은 시작되었습니다."
      />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-2xl space-y-10">
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">왜 만들었나</h2>
            <p className="mt-4 leading-[1.9] text-navy/70">
              누구나 멋진 목표를 세웁니다. 하지만 대부분은 작심삼일로 끝납니다.
              문제는 의지가 약해서가 아니라, <strong className="text-brand">비전에서
              오늘의 행동까지 이어지는 다리</strong>가 없기 때문입니다. 비전드림은
              그 다리를 놓기 위해 만들어졌습니다. 비전을 꿈으로, 꿈을 목표로,
              목표를 오늘의 습관과 할 일로 — 끊김 없이 연결합니다.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f5f8fb] p-7">
            <h2 className="text-xl font-black text-navy md:text-2xl">우리가 믿는 성공법칙</h2>
            <p className="mt-3 text-lg font-extrabold text-brand">성공(S) = 믿음(B) × 생각(T) × 행동(A)</p>
            <p className="mt-3 leading-[1.9] text-navy/70">
              성공은 더하기가 아니라 곱하기입니다. 강한 믿음과 좋은 계획이 있어도
              행동하지 않으면 결과는 0입니다. 세 가지가 함께 곱해질 때 비로소
              열매가 열립니다. 비전드림의 모든 기능은 이 곱셈이 끊기지 않게 돕기
              위해 설계되었습니다.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">우리가 추구하는 것</h2>
            <ul className="mt-4 space-y-3">
              {[
                ["🌱 매일의 한 걸음", "거창한 결심보다 오늘의 작은 실천이 비전을 키웁니다."],
                ["🔗 끊기지 않는 연결", "비전·꿈·목표·습관이 하나의 흐름으로 이어집니다."],
                ["🤝 함께 자라는 성장", "혼자가 아니라 멘토·동료·공동체와 함께 성장합니다."],
                ["🌳 보이는 변화", "실천할수록 자라는 성공의 나무로 변화를 눈으로 확인합니다."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3 rounded-xl border border-black/5 bg-[#fafbfc] p-4">
                  <span className="text-lg">{t.split(" ")[0]}</span>
                  <div>
                    <h3 className="font-extrabold text-navy">{t.split(" ").slice(1).join(" ")}</h3>
                    <p className="mt-1 text-sm text-navy/60">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-8 text-center text-white">
            <p className="text-lg font-bold text-gold">당신의 비전, 오늘 심어보세요 🌱</p>
            <a
              href="https://app.visiondream.kr"
              className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
            >
              무료로 시작하기 →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
