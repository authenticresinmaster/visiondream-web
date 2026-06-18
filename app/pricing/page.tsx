import type { Metadata } from "next";
import { PageShell, PageHero } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "요금제",
  description: "무료로 시작하세요. 프리미엄으로 AI 기능과 무제한 꿈·목표를, 팀 플랜으로 조직·기관 관리를.",
};

type Plan = {
  name: string; price: string; per: string; highlight: boolean;
  feats: string[]; cta: string; ctaStyle: "solid" | "border"; href?: string;
};

const PLANS: Plan[] = [
  {
    name: "무료", price: "₩0", per: "", highlight: false,
    feats: ["비전보드·꿈·목표", "플래너·습관 트래커", "성공의 나무", "꿈 3 · 목표 5"],
    cta: "무료로 시작", ctaStyle: "border",
  },
  {
    name: "프리미엄", price: "₩9,900", per: "/월 (연 ₩99,000)", highlight: true,
    feats: ["무료 기능 전체", "AI 코치·실천안·추천", "🦁 두려움 해체기 · 🛰️ 꿈 역설계", "고급 통계", "꿈 50 · 목표 100"],
    cta: "프리미엄 시작", ctaStyle: "solid",
  },
  {
    name: "팀 · 기관", price: "₩29,900", per: "/월 (연 ₩299,000)", highlight: false,
    feats: ["프리미엄 전체", "팀·기관 관리", "조직 성장 리포트(익명)", "멘토 관리", "꿈·목표 무제한"],
    cta: "도입 문의", ctaStyle: "border", href: "/for-teams",
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero badge="PRICING" title="무료로 시작, 필요할 때 업그레이드" sub="추천코드로 가입하면 프리미엄 무료 혜택도 받을 수 있어요." />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-7 ${p.highlight ? "border-brand shadow-lg" : "border-black/10"}`}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-3 py-1 text-xs font-extrabold text-navy">가장 인기</span>}
              <h3 className="text-lg font-extrabold text-navy">{p.name}</h3>
              <div className="mt-3">
                <span className="text-3xl font-black text-navy">{p.price}</span>
                <span className="text-sm text-navy/50">{p.per}</span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {p.feats.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-navy/70">
                    <span className="text-leaf">✓</span><span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={p.href ?? "https://app.visiondream.kr"}
                className={`mt-7 block rounded-xl py-3 text-center font-extrabold transition ${p.ctaStyle === "solid" ? "bg-brand text-white hover:brightness-110" : "border border-navy/15 text-navy hover:bg-navy/5"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-navy/40">
          가격·혜택은 변경될 수 있습니다. 결제는 앱 내 안내를 따릅니다.
        </p>
      </section>
    </PageShell>
  );
}
