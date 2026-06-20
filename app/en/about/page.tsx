import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/about",
  title: "Story",
  description:
    "Vision Dream began from the belief that 'Plant a vision, and fruit will surely grow.' Discover the success law Success(S)=Belief(B)×Thinking(T)×Action(A) and the values Vision Dream pursues.",
});

export default function AboutPage() {
  return (
    <PageShell lang="en" crumb={{ name: "Story", path: "/en/about" }}>
      <PageHero
        badge="OUR STORY"
        title="Plant a vision, and fruit will surely grow"
        sub="Vision Dream was created to turn vague hopes into daily action."
      />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-2xl space-y-10">
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">Why we built it</h2>
            <p className="mt-4 leading-[1.9] text-navy/70">
              Everyone sets wonderful goals. But for most people, they fizzle out
              within days. The problem isn't weak willpower — it's the absence of
              a <strong className="text-brand">bridge that connects a vision to
              today's action</strong>. Vision Dream was built to lay that bridge.
              From vision to dream, dream to goal, goal to today's habits and
              to-dos — connected without a single break.
            </p>
          </div>

          <div className="rounded-2xl bg-[#f5f8fb] p-7">
            <h2 className="text-xl font-black text-navy md:text-2xl">The success law we believe in</h2>
            <p className="mt-3 text-lg font-extrabold text-brand">Success(S) = Belief(B) × Thinking(T) × Action(A)</p>
            <p className="mt-3 leading-[1.9] text-navy/70">
              Success is multiplication, not addition. Even with strong belief and
              a great plan, if you don't act, the result is zero. Only when all
              three are multiplied together does fruit finally grow. Every feature
              of Vision Dream is designed to keep this multiplication from
              breaking.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">What we pursue</h2>
            <ul className="mt-4 space-y-3">
              {[
                ["🌱 One step each day", "A small action today grows your vision more than a grand resolution."],
                ["🔗 An unbroken connection", "Vision, dream, goal, and habit flow together as one."],
                ["🤝 Growing together", "You grow not alone, but with mentors, peers, and community."],
                ["🌳 Visible change", "See your change through a success tree that grows the more you act."],
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
            <p className="text-lg font-bold text-gold">Plant your vision today 🌱</p>
            <a
              href="https://app.visiondream.kr"
              className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
            >
              Start for free →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
