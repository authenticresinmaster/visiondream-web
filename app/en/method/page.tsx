import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/method",
  title: "Success Formula — Success(S) = Belief(B) × Thinking(T) × Action(A)",
  description: "Seowoo's Success Formula: Success(S) is the product of Belief(B) × Thinking(T) × Action(A). How the Vision Management process connects your future to today's action.",
});

const BTA = [
  { k: "B", w: "Belief", c: "#105d9e", d: "The conviction that 'I can do it.' The root that keeps your vision from wavering." },
  { k: "T", w: "Thinking", c: "#439ae3", d: "The design that shapes your vision into dreams and goals. It turns the vague into the clear." },
  { k: "A", w: "Action", c: "#568a35", d: "Today's small practice. The final multiplier that turns belief and thinking into results." },
];

export default function MethodPage() {
  return (
    <PageShell lang="en" crumb={{ name: "Method", path: "/en/method" }}>
      <PageHero
        badge="Success(S) = Belief(B) × Thinking(T) × Action(A)"
        title="Success is not addition — it's multiplication"
        sub="If even one is zero, the whole becomes zero. Success happens only when belief, thinking, and action are multiplied together."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 rounded-2xl bg-[#f5f8fb] p-6 text-center">
            <p className="text-lg font-black text-navy md:text-xl">
              <span className="text-amber">Success(S)</span> = Belief(B) <span className="text-navy/40">×</span> Thinking(T) <span className="text-navy/40">×</span> Action(A)
            </p>
            <p className="mt-2 text-sm text-navy/60">Success(S) is the product of three things: Belief(B), Thinking(T), and Action(A)</p>
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
            <h2 className="text-xl font-black text-navy md:text-2xl">The 4 Steps of Vision Management</h2>
            <ol className="mt-6 space-y-4">
              {[
                ["Declare Your Vision", "Declare the ultimate self you want to become in a single sentence."],
                ["Shape Your Dreams", "Break it down into life goals by area — business, health, finances, relationships, learning, and more."],
                ["Set Your Goals", "Turn them into measurable 3-month goals (SMART)."],
                ["Practice Habits & Plans", "Take a step forward every day through your daily to-dos and repeated habits."],
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
            <p className="text-lg font-bold text-gold">Plant a vision, and the fruit will surely come 🌱</p>
            <a href="https://app.visiondream.kr" className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">Start practicing in the app →</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
