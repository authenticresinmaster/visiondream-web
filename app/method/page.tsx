import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "성공법칙 — 성공(S) = 믿음(B) × 생각(T) × 행동(A)",
  description: "서우의 성공법칙: 성공(S)은 믿음(B) × 생각(T) × 행동(A)의 곱이다. 비전관리 프로세스로 미래를 오늘의 행동으로 연결하는 방법.",
};

const BTA = [
  { k: "B", w: "믿음 (Belief)", c: "#105d9e", d: "'나는 된다'는 확신. 비전이 흔들리지 않게 잡아주는 뿌리입니다." },
  { k: "T", w: "생각 (Thinking)", c: "#439ae3", d: "비전을 꿈·목표로 구체화하는 설계. 막연함을 명확함으로 바꿉니다." },
  { k: "A", w: "행동 (Action)", c: "#568a35", d: "오늘의 작은 실천. 믿음과 생각을 결과로 만드는 마지막 곱셈입니다." },
];

export default function MethodPage() {
  return (
    <PageShell>
      <PageHero
        badge="성공(S) = 믿음(B) × 생각(T) × 행동(A)"
        title="성공은 더하기가 아니라 곱하기입니다"
        sub="하나라도 0이면 전체가 0. 믿음·생각·행동이 함께 곱해질 때 성공이 됩니다."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl bg-[#f5f8fb] p-6 text-center">
            <p className="text-lg font-black text-navy md:text-xl">
              <span className="text-amber">성공(S)</span> = 믿음(B) <span className="text-navy/40">×</span> 생각(T) <span className="text-navy/40">×</span> 행동(A)
            </p>
            <p className="mt-2 text-sm text-navy/60">성공(S)은 믿음(B)·생각(T)·행동(A) 세 가지의 곱입니다</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {BTA.map((x) => (
              <div key={x.k} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-2xl font-black text-white" style={{ backgroundColor: x.c }}>{x.k}</div>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{x.w}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{x.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h2 className="text-xl font-black text-navy md:text-2xl">비전관리 프로세스 4단계</h2>
            <ol className="mt-6 space-y-4">
              {[
                ["비전 선언", "되고 싶은 궁극의 나를 한 문장으로 선언합니다."],
                ["꿈 구체화", "사업·건강·재정·관계·학습 등 영역별 인생 목표로 나눕니다."],
                ["목표 설정", "측정 가능한 3개월 목표(SMART)로 만듭니다."],
                ["습관·계획 실천", "오늘 할 일과 반복 습관으로 매일 한 걸음 내딛습니다."],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 rounded-2xl bg-[#f5f8fb] p-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-black text-white">{i + 1}</span>
                  <div>
                    <h3 className="font-extrabold text-navy">{t}</h3>
                    <p className="mt-1 text-sm text-navy/60">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-8 text-center text-white">
            <p className="text-lg font-bold text-gold">비전을 심으면, 반드시 열매가 열립니다 🌱</p>
            <a href="https://app.visiondream.kr" className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">앱으로 실천 시작 →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
