import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "자주 묻는 질문",
  description:
    "비전드림 요금·기능·데이터·팀 플랜·지원 플랫폼에 대해 자주 묻는 질문과 답변을 모았습니다.",
};

const FAQ: { q: string; a: string }[] = [
  {
    q: "무료로 사용할 수 있나요?",
    a: "네. 비전보드·꿈·목표·플래너·습관 트래커·성공의 나무 등 핵심 기능을 무료로 사용할 수 있습니다. AI 코치·두려움 해체기·꿈 역설계·고급 통계 같은 일부 기능은 무료 체험 후 프리미엄에서 무제한으로 제공됩니다.",
  },
  {
    q: "프리미엄은 얼마인가요?",
    a: "프리미엄은 월 ₩9,900(연 ₩99,000)입니다. AI 기능 전체, 두려움 해체기·꿈 역설계, 고급 통계, 꿈 50·목표 100 확장이 포함됩니다. 추천코드로 가입하면 프리미엄 무료 혜택도 받을 수 있습니다.",
  },
  {
    q: "어떤 기기에서 사용할 수 있나요?",
    a: "Android·iOS 앱과 웹에서 모두 사용할 수 있으며, 계정으로 데이터가 동기화됩니다. 한국어·English·日本語를 지원합니다.",
  },
  {
    q: "성공(S) = 믿음(B) × 생각(T) × 행동(A)가 무엇인가요?",
    a: "서우의 성공법칙으로, 성공(S)은 믿음(B)·생각(T)·행동(A)의 곱이라는 뜻입니다. 더하기가 아니라 곱하기이기 때문에 하나라도 0이면 전체가 0이 됩니다. 비전드림은 이 세 가지가 함께 작동하도록 비전→꿈→목표→습관을 연결합니다.",
  },
  {
    q: "두려움 해체기와 꿈 역설계는 어떤 기능인가요?",
    a: "두려움 해체기는 무서워서 미루던 일을 감당 가능한 작은 한 걸음으로 분해해 내 꿈·목표에 연결합니다. 꿈 역설계는 원하는 미래(예: 5년 후)를 입력하면 비전→꿈→목표→오늘 할 일까지 거꾸로 설계해 줍니다. AI가 생성한 내용을 직접 수정해 계획·습관으로 반영할 수 있습니다.",
  },
  {
    q: "내 데이터는 안전한가요?",
    a: "데이터는 안전하게 보관되며, 백업·복원 기능으로 직접 내보내고 가져올 수 있습니다. 팀·기관에서 사용할 때도 구성원의 데이터는 동의한 범위 안에서만 공유됩니다.",
  },
  {
    q: "팀이나 기관에서 단체로 쓸 수 있나요?",
    a: "네. 팀·기관 플랜으로 학교·기업·교회·소그룹 단위 도입이 가능합니다. 익명 성장 리포트, 멘토 관리, 관리자→멘토→멘티 권한 운영을 지원합니다. 자세한 내용은 '기관·팀' 페이지를 참고하거나 문의해 주세요.",
  },
  {
    q: "강사·컨설턴트인데 어떻게 활용할 수 있나요?",
    a: "강사 전용 추천코드로 멘티가 가입하면 양측 모두 프리미엄 혜택을 받습니다. 멘티의 비전·목표·습관 달성을 동의 기반으로 보며 코칭하고, 동기부여 콘텐츠를 전달할 수 있습니다. '강사' 페이지에서 문의해 주세요.",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        badge="FAQ"
        title="자주 묻는 질문"
        sub="요금·기능·데이터·팀 운영까지, 궁금한 점을 모았습니다."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl space-y-4">
          {FAQ.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-black/5 bg-[#fafbfc] p-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-extrabold text-navy">
                <span>{f.q}</span>
                <span className="shrink-0 text-brand transition group-open:rotate-45">＋</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-navy/70">{f.a}</p>
            </details>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-8 text-center text-white">
          <h2 className="text-xl font-black">더 궁금한 점이 있으신가요?</h2>
          <p className="mt-3 text-sm text-white/70">언제든 문의해 주시면 안내드리겠습니다.</p>
          <a
            href="mailto:authenticresinmaster@gmail.com?subject=비전드림 문의"
            className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
          >
            문의하기
          </a>
        </div>
      </section>
    </PageShell>
  );
}
