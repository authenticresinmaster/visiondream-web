import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/pricing",
  title: "Pricing",
  description: "Start for free. Premium unlocks AI features and unlimited Dreams & Goals; the Team Plan adds organization and institution management.",
});

type Plan = {
  name: string; price: string; per: string; highlight: boolean;
  feats: string[]; cta: string; ctaStyle: "solid" | "border"; href?: string;
};

const PLANS: Plan[] = [
  {
    name: "Free", price: "₩0", per: "", highlight: false,
    feats: ["Vision Board · Dreams · Goals", "Planner · Habit Tracker", "Tree of Success", "3 Dreams · 5 Goals"],
    cta: "Start Free", ctaStyle: "border",
  },
  {
    name: "Premium", price: "₩9,900", per: "/month (₩99,000/year)", highlight: true,
    feats: ["All Free features", "AI Coach · Action Plans · Recommendations", "🦁 Fear Dismantler · 🛰️ Dream Reverse-Engineering", "Advanced analytics", "50 Dreams · 100 Goals"],
    cta: "Start Premium", ctaStyle: "solid",
  },
  {
    name: "Team · Institution", price: "₩29,900", per: "/month (₩299,000/year)", highlight: false,
    feats: ["All Premium features", "Team · Institution management", "Organization growth report (anonymized)", "Mentor management", "Unlimited Dreams & Goals"],
    cta: "Contact Sales", ctaStyle: "border", href: "/en/for-teams",
  },
];

export default function PricingPage() {
  return (
    <PageShell lang="en" crumb={{ name: "Pricing", path: "/en/pricing" }}>
      <PageHero badge="PRICING" title="Start free, upgrade when you need to" sub="Sign up with a referral code and you can even get Premium for free." />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-7 ${p.highlight ? "border-brand shadow-lg" : "border-black/10"}`}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-3 py-1 text-xs font-extrabold text-navy">Most Popular</span>}
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
          Prices and benefits are subject to change. Payments follow the in-app guidance.
        </p>
      </section>
    </PageShell>
  );
}
