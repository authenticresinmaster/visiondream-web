import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/about",
  title: "ストーリー",
  description:
    "ビジョンドリームは「ビジョンを植えれば、必ず実がなる」という信念から始まりました。成功法則 成功(S)=信念(B)×思考(T)×行動(A) と、ビジョンドリームが追求する価値をご紹介します。",
});

export default function AboutPage() {
  return (
    <PageShell lang="ja" crumb={{ name: "ストーリー", path: "/ja/about" }}>
      <PageHero
        badge="OUR STORY"
        title="ビジョンを植えれば、必ず実がなる"
        sub="漠然とした願いを毎日の実践へと変えるために、ビジョンドリームは生まれました。"
      />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-2xl space-y-10">
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">なぜ作ったのか</h2>
            <p className="mt-4 leading-[1.9] text-navy/70">
              誰もが素晴らしい目標を立てます。しかし、その多くは三日坊主で終わって
              しまいます。問題は意志が弱いからではなく、<strong className="text-brand">
              ビジョンから今日の行動までをつなぐ橋</strong>がないからです。ビジョン
              ドリームは、その橋を架けるために作られました。ビジョンを夢へ、夢を目標へ、
              目標を今日の習慣とやるべきことへ — 途切れることなくつなぎます。
            </p>
          </div>

          <div className="rounded-2xl bg-[#f5f8fb] p-7">
            <h2 className="text-xl font-black text-navy md:text-2xl">私たちが信じる成功法則</h2>
            <p className="mt-3 text-lg font-extrabold text-brand">成功(S) = 信念(B) × 思考(T) × 行動(A)</p>
            <p className="mt-3 leading-[1.9] text-navy/70">
              成功は足し算ではなく掛け算です。強い信念と優れた計画があっても、
              行動しなければ結果はゼロです。三つが共に掛け合わさったとき、初めて
              実がなります。ビジョンドリームのすべての機能は、この掛け算が途切れ
              ないよう支えるために設計されています。
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">私たちが追求するもの</h2>
            <ul className="mt-4 space-y-3">
              {[
                ["🌱 毎日の一歩", "大げさな決意よりも、今日の小さな実践がビジョンを育てます。"],
                ["🔗 途切れないつながり", "ビジョン・夢・目標・習慣が一つの流れでつながります。"],
                ["🤝 共に育つ成長", "一人ではなく、メンター・仲間・コミュニティと共に成長します。"],
                ["🌳 見える変化", "実践するほど育つ成功の木で、変化を目で確かめます。"],
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
            <p className="text-lg font-bold text-gold">あなたのビジョン、今日植えてみましょう 🌱</p>
            <a
              href="https://app.visiondream.kr"
              className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
            >
              無料で始める →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
