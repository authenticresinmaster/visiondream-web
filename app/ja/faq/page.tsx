import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/faq",
  title: "よくある質問",
  description:
    "ビジョンドリームの料金・機能・データ・チームプラン・対応プラットフォームに関するよくある質問と回答をまとめました。",
});

const FAQ: { q: string; a: string }[] = [
  {
    q: "無料で使えますか？",
    a: "はい。ビジョンボード・夢・目標・プランナー・習慣トラッカー・成功の木などの中核機能を無料で使えます。AIコーチ・恐れ解体ツール・夢の逆算設計・高度な統計といった一部の機能は、無料体験のあとプレミアムで無制限に利用できます。",
  },
  {
    q: "プレミアムはいくらですか？",
    a: "プレミアムは月額₩9,900（年額₩99,000）です。AI機能のすべて、恐れ解体ツール・夢の逆算設計、高度な統計、夢50・目標100への拡張が含まれます。紹介コードで登録すると、プレミアム無料の特典も受けられます。",
  },
  {
    q: "どの端末で使えますか？",
    a: "Android・iOSアプリとウェブのすべてで使え、アカウントでデータが同期されます。한국어・English・日本語に対応しています。",
  },
  {
    q: "成功(S) = 信念(B) × 思考(T) × 行動(A)とは何ですか？",
    a: "ソウの成功法則で、成功(S)は信念(B)・思考(T)・行動(A)の積であるという意味です。足し算ではなく掛け算なので、どれか一つでも0になると全体が0になります。ビジョンドリームは、この3つが一緒に働くようにビジョン→夢→目標→習慣をつなげます。",
  },
  {
    q: "恐れ解体ツールと夢の逆算設計はどんな機能ですか？",
    a: "恐れ解体ツールは、怖くて先延ばしにしていたことを、こなせる小さな一歩へと分解し、自分の夢・目標に結びつけます。夢の逆算設計は、望む未来（例：5年後）を入力すると、ビジョン→夢→目標→今日のやることまで逆向きに設計します。AIが生成した内容を自分で修正して、計画・習慣に反映できます。",
  },
  {
    q: "私のデータは安全ですか？",
    a: "データは安全に保管され、バックアップ・復元機能で自分で書き出し・取り込みができます。チーム・団体で使う場合も、メンバーのデータは同意した範囲の中でのみ共有されます。",
  },
  {
    q: "チームや団体で団体利用できますか？",
    a: "はい。チーム・団体プランで、学校・企業・教会・小グループ単位での導入が可能です。匿名の成長レポート、メンター管理、管理者→メンター→メンティーの権限運用に対応しています。詳しくは「団体・チーム」ページをご覧いただくか、お問い合わせください。",
  },
  {
    q: "講師・コンサルタントですが、どう活用できますか？",
    a: "講師専用の紹介コードでメンティーが登録すると、双方ともプレミアム特典を受けられます。メンティーのビジョン・目標・習慣の達成を同意ベースで見ながらコーチングし、モチベーションコンテンツを届けられます。「講師」ページからお問い合わせください。",
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
    <PageShell lang="ja" crumb={{ name: "FAQ", path: "/ja/faq" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        badge="FAQ"
        title="よくある質問"
        sub="料金・機能・データ・チーム運用まで、気になる点をまとめました。"
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
          <h2 className="text-xl font-black">さらに気になる点はありますか？</h2>
          <p className="mt-3 text-sm text-white/70">いつでもお問い合わせいただければご案内いたします。</p>
          <a
            href="mailto:authenticresinmaster@gmail.com?subject=ビジョンドリーム お問い合わせ"
            className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
          >
            お問い合わせ
          </a>
        </div>
      </section>
    </PageShell>
  );
}
