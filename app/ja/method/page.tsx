import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/method",
  title: "成功法則 — 成功(S) = 信念(B) × 思考(T) × 行動(A)",
  description: "ソウの成功法則: 成功(S)は信念(B) × 思考(T) × 行動(A)の積である。ビジョン管理プロセスで未来を今日の行動につなげる方法。",
});

const BTA = [
  { k: "B", w: "信念 (Belief)", c: "#105d9e", d: "「自分はできる」という確信。ビジョンが揺るがないように支える根です。" },
  { k: "T", w: "思考 (Thinking)", c: "#439ae3", d: "ビジョンを夢・目標へと具体化する設計。漠然としたものを明確さに変えます。" },
  { k: "A", w: "行動 (Action)", c: "#568a35", d: "今日の小さな実践。信念と思考を結果に変える最後の掛け算です。" },
];

export default function MethodPage() {
  return (
    <PageShell lang="ja" crumb={{ name: "成功法則", path: "/ja/method" }}>
      <PageHero
        badge="成功(S) = 信念(B) × 思考(T) × 行動(A)"
        title="成功は足し算ではなく、掛け算です"
        sub="どれか一つでも0なら全体が0。信念・思考・行動が一緒に掛け合わさったとき、成功になります。"
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl bg-[#f5f8fb] p-6 text-center">
            <p className="text-lg font-black text-navy md:text-xl">
              <span className="text-amber">成功(S)</span> = 信念(B) <span className="text-navy/40">×</span> 思考(T) <span className="text-navy/40">×</span> 行動(A)
            </p>
            <p className="mt-2 text-sm text-navy/60">成功(S)は信念(B)・思考(T)・行動(A)の三つの積です</p>
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
            <h2 className="text-xl font-black text-navy md:text-2xl">ビジョン管理プロセス 4ステップ</h2>
            <ol className="mt-6 space-y-4">
              {[
                ["ビジョン宣言", "なりたい究極の自分を一文で宣言します。"],
                ["夢の具体化", "事業・健康・財政・人間関係・学習など、領域ごとの人生目標に分けます。"],
                ["目標設定", "測定可能な3か月の目標(SMART)にします。"],
                ["習慣・計画の実践", "今日やることと繰り返す習慣で、毎日一歩を踏み出します。"],
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
            <p className="text-lg font-bold text-gold">ビジョンを植えれば、必ず実が成ります 🌱</p>
            <a href="https://app.visiondream.kr" className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">アプリで実践を始める →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
