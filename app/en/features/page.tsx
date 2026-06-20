import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/features",
  title: "Features",
  description: "From Vision Board, Planner, Habit Tracker, AI Coach, Fear Buster to Dream Backcasting — every feature that connects your vision to action.",
});

const GROUPS = [
  {
    title: "🎯 Turn Vision into Action",
    items: [
      ["🗂️ Vision Board", "Visualize your life vision and dreams and manage them on a single screen."],
      ["📅 Planner", "Organize yearly, monthly, weekly, and daily plans by priority (A·B·C) and get reminders."],
      ["✅ Habit Tracker", "Record daily practices linked to your dreams and goals, and build up streaks."],
    ],
  },
  {
    title: "🤖 With AI by Your Side",
    items: [
      ["🤖 AI Coach", "Personalized coaching questions and feedback to refine your vision and goals together."],
      ["🦁 Fear Buster", "Break down the things you were too afraid to do into manageable small steps, and connect them to your dreams and goals."],
      ["🛰️ Dream Backcasting", "Enter the future you want (5 years from now), and it designs backward from vision → dream → goal → today's tasks."],
    ],
  },
  {
    title: "🌳 The Power to Keep Going",
    items: [
      ["🌳 Tree of Success", "Gamification where fruit grows and the tree flourishes the more you practice."],
      ["🏆 Leaderboard & Challenges", "Get past short-lived resolutions with the motivation of doing it together."],
      ["💾 Backup & Sync", "Keep your data safe and pick up right where you left off, anywhere."],
    ],
  },
];

export default function FeaturesPage() {
  return (
    <PageShell lang="en" crumb={{ name: "Features", path: "/en/features" }}>
      <PageHero
        badge="FEATURES"
        title="One App, Complete Connection"
        sub="Vision → Dream → Goal → Plan → Habit, seamlessly connected."
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
              Start Free Now →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
