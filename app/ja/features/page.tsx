import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/features",
  title: "機能",
  description: "ビジョンボード・プランナー・習慣トラッカー・AIコーチ・恐れ解体ツール・夢の逆算設計まで、ビジョンを行動につなげるすべての機能。",
});

const GROUPS = [
  {
    title: "🎯 ビジョンを行動へ",
    items: [
      ["🗂️ ビジョンボード", "人生のビジョンと夢を可視化し、一つの画面で管理します。"],
      ["📅 プランナー", "年・月・週・日の計画を優先順位（A・B・C）で整理し、リマインダーを受け取ります。"],
      ["✅ 習慣トラッカー", "夢・目標と連携した毎日の実践を記録し、連続記録を積み上げます。"],
    ],
  },
  {
    title: "🤖 AIがともに",
    items: [
      ["🤖 AIコーチ", "ビジョン・目標を一緒に磨き上げる、あなたに合わせたコーチング質問とフィードバック。"],
      ["🦁 恐れ解体ツール", "怖くてできなかったことを、こなせる小さな一歩に分解し、自分の夢・目標につなげます。"],
      ["🛰️ 夢の逆算設計", "望む未来（5年後）を入力すると、ビジョン→夢→目標→今日やることまで逆算して設計します。"],
    ],
  },
  {
    title: "🌳 続けさせる力",
    items: [
      ["🌳 成功の樹", "実践するほど実がなり、樹が育つゲーミフィケーション。"],
      ["🏆 リーダーボード・チャレンジ", "ともに取り組むモチベーションで三日坊主を乗り越えます。"],
      ["💾 バックアップ・同期", "データを安全に保管し、どこからでも続きを。"],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageShell lang="ja" crumb={{ name: "機能", path: "/ja/features" }}>
      <PageHero
        badge="FEATURES"
        title="一つのアプリ、完全なつながり"
        sub="ビジョン → 夢 → 目標 → 計画 → 習慣が途切れなくつながります。"
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
              今すぐ無料で始める →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
