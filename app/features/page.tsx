import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "기능",
  description: "비전보드·플래너·습관 트래커·AI 코치·두려움 해체기·꿈 역설계까지, 비전을 행동으로 연결하는 모든 기능.",
};

const GROUPS = [
  {
    title: "🎯 비전을 행동으로",
    items: [
      ["🗂️ 비전보드", "인생 비전과 꿈을 시각화하고 한 화면에서 관리합니다."],
      ["📅 플래너", "연·월·주·일 계획을 우선순위(A·B·C)로 정리하고 알림을 받습니다."],
      ["✅ 습관 트래커", "꿈·목표와 연계된 매일의 실천을 기록하고 연속 기록을 쌓습니다."],
    ],
  },
  {
    title: "🤖 AI가 함께",
    items: [
      ["🤖 AI 코치", "비전·목표를 함께 다듬는 맞춤 코칭 질문과 피드백."],
      ["🦁 두려움 해체기", "무서워서 못 하던 일을 감당 가능한 작은 한 걸음으로 분해하고, 내 꿈·목표에 연결합니다."],
      ["🛰️ 꿈 역설계", "원하는 미래(5년 후)를 입력하면 비전→꿈→목표→오늘 할 일까지 거꾸로 설계합니다."],
    ],
  },
  {
    title: "🌳 지속하게 만드는 힘",
    items: [
      ["🌳 성공의 나무", "실천할수록 열매가 열리고 나무가 자라는 게이미피케이션."],
      ["🏆 리더보드·챌린지", "함께하는 동기부여로 작심삼일을 넘습니다."],
      ["💾 백업·동기화", "데이터를 안전하게 보관하고 어디서든 이어서."],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageShell>
      <PageHero
        badge="FEATURES"
        title="하나의 앱, 완전한 연결"
        sub="비전 → 꿈 → 목표 → 계획 → 습관이 끊김 없이 이어집니다."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <h2 className="text-xl font-black text-navy md:text-2xl">{g.title}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-3">
                {g.items.map(([t, d]) => (
                  <div key={t} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
                    <h3 className="text-base font-extrabold text-navy">{t}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <div className="text-center">
            <a href="https://app.visiondream.kr" className="inline-block rounded-xl bg-brand px-8 py-3.5 font-extrabold text-white transition hover:brightness-110">
              지금 무료로 시작 →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
