import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/for-teams",
  title: "団体・チーム導入",
  description:
    "学校・団体・企業・教会のためのビジョンドリーム チームプラン。組織単位のビジョン管理、匿名の成長レポート、メンター管理、管理者→メンター→メンティーの権限運用。",
});

const VALUE = [
  ["🏢 組織単位での導入", "チーム・クラス・部署・小グループ単位でメンバーを招待し、一カ所で管理します。"],
  ["📊 成長レポート(匿名)", "メンバーの実践・達成率を匿名・集計の統計で確認し、運用を改善します。"],
  ["🧭 メンター管理", "メンターがメンティーのビジョン・目標・習慣を(同意ベースで)見てコーチングします。"],
  ["✅ 承認型の運用", "管理者 → メンター → メンティーの権限と承認フローで安定して運用できます。"],
  ["🎯 共同チャレンジ", "組織共通の目標・チャレンジで一緒に動機づけし、文化をつくります。"],
  ["🔐 安全なデータ", "メンバーのデータは同意の範囲内でのみ共有され、安全に保管されます。"],
];

const USECASES = [
  ["🎓 学校・教育機関", "生徒の進路ビジョン・学習目標・生活習慣を統合的に指導し、成長レポートで保護者と連携します。"],
  ["🏢 企業・組織", "メンバーの成長目標と核となる習慣をOKRのようにつなげ、自律的な成長文化をつくります。"],
  ["⛪ 教会・コミュニティ", "コミュニティのビジョンと個人の決断をつなぎ、小グループ単位で一緒に実践します。"],
  ["🧑‍🏫 青少年指導・カウンセリング", "青少年の自己肯定感・進路・習慣をビジョン中心にコーチングし、変化を追跡します。"],
];

export default function ForTeamsPage() {
  return (
    <PageShell lang="ja" crumb={{ name: "団体・チーム", path: "/ja/for-teams" }}>
      <PageHero
        badge="FOR TEAMS & ORGANIZATIONS"
        title="組織のビジョンを、メンバーの毎日へ"
        sub="学校・団体・企業・コミュニティのためのビジョンドリーム チームプラン。一緒にビジョンを植え、一緒に育ちます。"
      />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">組織運営に必要なすべて</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
                <h3 className="text-base font-extrabold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f8fb] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">こんな組織に最適です</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {USECASES.map(([t, d]) => (
              <div key={t} className="rounded-2xl border border-black/5 bg-white p-6">
                <h3 className="text-base font-extrabold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-10 text-center text-white">
          <h2 className="text-2xl font-black">組織への導入をご検討ですか?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            規模・目標をお知らせいただければ、最適な導入プランとお見積もりをご案内します。試験運用(パイロット)も可能です。
          </p>
          <a
            href="mailto:authenticresinmaster@gmail.com?subject=ビジョンドリーム 団体/チーム導入のお問い合わせ"
            className="mt-6 inline-block rounded-xl bg-amber px-8 py-3.5 font-extrabold text-navy"
          >
            導入を問い合わせる
          </a>
          <p className="mt-4 text-xs text-white/50">authenticresinmaster@gmail.com</p>
        </div>
      </section>
    </PageShell>
  );
}
