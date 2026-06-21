import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/for-coaches",
  title: "講師・コンサルタント・団体",
  description: "講師・コンサルタント・教師・青少年指導士・団体のためのビジョンドリーム。メンティーの成長管理、紹介報酬、組織の成長レポート。",
});

const COACH = [
  ["🎓 メンティーの成長管理", "メンティーのビジョン・目標・習慣の達成を（同意ベースで）一目で確認し、コーチングできます。"],
  ["🎁 紹介報酬", "講師専用の紹介コードでメンティーが登録すると、双方にプレミアム特典。"],
  ["📚 コンテンツ配信", "モチベーションコンテンツやショート動画をメンティーに届けます。"],
];
const TEAM = [
  ["🏢 組織単位の導入", "チーム・クラス・団体単位でメンバーを招待し、管理します。"],
  ["📊 成長レポート（匿名）", "メンバーの実践・達成の統計を匿名・集計で確認します。"],
  ["✅ 承認型の運用", "管理者→メンター→メンティーの権限と承認フローで安定して運用します。"],
];

export default function ForCoachesPage() {
  return (
    <PageShell lang="ja" crumb={{ name: "講師・コンサルタント", path: "/ja/for-coaches" }}>
      <PageHero
        badge="FOR COACHES & TEAMS"
        title="一人ではなく、共に成長させましょう"
        sub="講師・コンサルタント・教師・青少年指導士、そして団体のためのビジョンドリーム。"
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-14">
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">👩‍🏫 講師・コンサルタント</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {COACH.map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
                  <h3 className="text-base font-extrabold text-navy">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">🏢 団体・チーム</h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {TEAM.map(([t, d]) => (
                <div key={t} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
                  <h3 className="text-base font-extrabold text-navy">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/60">{d}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-8 text-center text-white">
            <h3 className="text-xl font-black">講師・団体として一緒に取り組みませんか？</h3>
            <p className="mt-3 text-sm text-white/70">導入・提携のお問い合わせをいただければ、ご案内いたします。</p>
            <a href="/ja/contact?type=coach" className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">お問い合わせ</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
