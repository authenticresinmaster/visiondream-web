import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/pricing",
  title: "料金プラン",
  description: "無料で始められます。プレミアムでAI機能と無制限の夢・目標を、チームプランで組織・機関の管理を。",
});

type Plan = {
  name: string; price: string; per: string; highlight: boolean;
  feats: string[]; cta: string; ctaStyle: "solid" | "border"; href?: string;
};

const PLANS: Plan[] = [
  {
    name: "無料", price: "₩0", per: "", highlight: false,
    feats: ["ビジョンボード・夢・目標", "プランナー・習慣トラッカー", "成功の木", "夢 3 ・ 目標 5"],
    cta: "無料で始める", ctaStyle: "border",
  },
  {
    name: "プレミアム", price: "₩9,900", per: "/月 (年 ₩99,000)", highlight: true,
    feats: ["無料機能すべて", "AIコーチ・実践プラン・おすすめ", "🦁 恐れ解体ツール ・ 🛰️ 夢の逆設計", "高度な統計", "夢 50 ・ 目標 100"],
    cta: "プレミアムを始める", ctaStyle: "solid",
  },
  {
    name: "チーム・機関", price: "₩29,900", per: "/月 (年 ₩299,000)", highlight: false,
    feats: ["プレミアムすべて", "チーム・機関の管理", "組織成長レポート(匿名)", "メンター管理", "夢・目標 無制限"],
    cta: "導入のお問い合わせ", ctaStyle: "border", href: "/ja/for-teams",
  },
];

export default function PricingPage() {
  return (
    <PageShell lang="ja" crumb={{ name: "料金プラン", path: "/ja/pricing" }}>
      <PageHero badge="PRICING" title="無料で始めて、必要なときにアップグレード" sub="紹介コードで登録すると、プレミアムの無料特典も受けられます。" />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {PLANS.map((p) => (
            <div key={p.name} className={`relative rounded-3xl border p-7 ${p.highlight ? "border-brand shadow-lg" : "border-black/10"}`}>
              {p.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber px-3 py-1 text-xs font-extrabold text-navy">一番人気</span>}
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
          価格・特典は変更される場合があります。お支払いはアプリ内の案内に従います。
        </p>
      </section>
    </PageShell>
  );
}
