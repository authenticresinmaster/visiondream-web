import Link from "next/link";
import { EbookForm } from "@/components/EbookForm";
import { getAllPosts } from "@/lib/posts";
import { AuthNav } from "@/components/AuthNav";
import { LangSwitch } from "@/components/LangSwitch";
import { MobileNav } from "@/components/MobileNav";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/",
  title: "Plant a vision, and fruit will surely grow",
  description:
    "Seowoo Vision Dream connects vision, dreams, goals, and habits into one. With Success(S) = Belief(B) × Thinking(T) × Action(A), AI designs everything from your future back to what to do today.",
});

const APP_URL = "https://app.visiondream.kr";
const DISCORD_URL = "https://discord.gg/gPbRp24Khn";

const STEPS = [
  { n: "1", t: "Vision", d: "Declare the ultimate you that you want to become" },
  { n: "2", t: "Dream", d: "Crystallize into life goals by area" },
  { n: "3", t: "Goal", d: "Measurable 3-month goals" },
  { n: "4", t: "Habits & Plans", d: "Practice every day with today's to-dos" },
];

const FEATURES = [
  { e: "🗂️", t: "Vision Board", d: "Visualize your vision and dreams, manage them at a glance" },
  { e: "📅", t: "Planner", d: "Yearly, monthly, weekly, and daily plans by priority" },
  { e: "✅", t: "Habit Tracker", d: "Daily practice linked to your dreams and goals" },
  { e: "🤖", t: "AI Coach", d: "Coaching that refines your vision and goals together with you" },
  { e: "🦁", t: "Fear Buster", d: "Turn the things you were too scared to do into one small step" },
  { e: "🛰️", t: "Dream Backcasting", d: "Work backward from the future you want to today's to-dos" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <span className="text-lg font-extrabold text-navy">Seowoo Vision Dream</span>
          </div>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-navy/70 lg:flex">
            <Link href="/en/features" className="hover:text-brand">Features</Link>
            <Link href="/en/method" className="hover:text-brand">Success Formula</Link>
            <Link href="/en/pricing" className="hover:text-brand">Pricing</Link>
            <Link href="/en/for-coaches" className="hover:text-brand">Coaches</Link>
            <Link href="/en/for-teams" className="hover:text-brand">Organizations & Teams</Link>
            <Link href="/en/blog" className="hover:text-brand">Blog</Link>
            <Link href="/en/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/en/about" className="hover:text-brand">Our Story</Link>
            <a href="https://landing.visiondream.kr" className="hover:text-brand">S=BTA Landing</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 lg:flex">
              <LangSwitch />
              <AuthNav />
              <a href={APP_URL} className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110">
                Open App
              </a>
            </div>
            <MobileNav lang="en" />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-amber px-4 py-1.5 text-sm font-extrabold text-navy">
            Success(S) = Belief(B) × Thinking(T) × Action(A)
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            Plant a vision,<br />and fruit will surely grow 🌱
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
            Success(S) = Belief(B) × Thinking(T) × Action(A).<br />
            Connect vision, dreams, goals, and habits into one, and let AI design everything from your future to what to do today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-amber px-7 py-3.5 text-base font-extrabold text-navy transition hover:brightness-105">
              Start free now →
            </a>
            <a href="#ebook" className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/20">
              📚 Get the free ebook
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-white px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">"Why do they succeed when I can't?"</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            You have goals, but each day you're unsure what to do, and your resolve fizzles out in three days.<br />
            The problem isn't willpower — it's the absence of a <strong className="text-brand">system that connects your vision to today's action</strong>.
          </p>
        </div>
      </section>

      {/* Solution — 4 Steps */}
      <section id="method" className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold text-brand">The Vision Management Process</p>
          <h2 className="mt-2 text-center text-2xl font-black text-navy md:text-3xl">From the future to today, designed in reverse</h2>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-black text-white">{s.n}</div>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{s.t}</h3>
                <p className="mt-1.5 text-sm text-navy/60">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-navy md:text-3xl">One app, fully connected</h2>
          <p className="mt-3 text-center text-navy/60">Vision → Dream → Goal → Plan → Habit, all seamlessly linked</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.t} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6 transition hover:shadow-md">
                <div className="text-3xl">{f.e}</div>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tree of Success */}
      <section className="bg-gradient-to-b from-[#f5f8fb] to-white px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="text-6xl">🌳</div>
          <h2 className="mt-4 text-2xl font-black text-navy md:text-3xl">A Tree of Success that grows as you practice</h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            Each small daily practice becomes a fruit 🍎 that grows your very own tree.<br />
            Stay motivated with levels, streaks, an orchard, and a leaderboard.
          </p>
        </div>
      </section>

      {/* Ebook CTA */}
      <section id="ebook" className="bg-gradient-to-br from-[#1a2332] to-[#105d9e] px-5 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-gold">Free Ebook</p>
            <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
              Why do they succeed<br />when I can't?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Get the free ebook covering the Success Formula — Success(S) = Belief(B) × Thinking(T) × Action(A) — and the vision management process.
              We'll send it straight to your email.
            </p>
          </div>
          <EbookForm />
        </div>
      </section>

      {/* Download */}
      <section id="download" className="bg-white px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">Get started right now</h2>
          <p className="mt-3 text-navy/60">Use it instantly on the web or install the app</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-brand px-7 py-3.5 font-extrabold text-white transition hover:brightness-110">
              🌐 Start on the web
            </a>
            <a href={APP_URL} className="rounded-xl border border-navy/15 px-7 py-3.5 font-bold text-navy transition hover:bg-navy/5">
              📱 Download the app
            </a>
          </div>
          <p className="mt-4 text-xs text-navy/40">Android · iOS · Web · 한국어 / English / 日本語</p>
        </div>
      </section>

      {/* Latest Blog */}
      <section className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-brand">Insights</p>
              <h2 className="mt-2 text-2xl font-black text-navy md:text-3xl">Articles that turn vision into action</h2>
            </div>
            <Link href="/en/blog" className="hidden text-sm font-bold text-brand hover:underline sm:block">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {getAllPosts("en").slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/en/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 transition hover:border-brand/30 hover:shadow-md"
              >
                <div className="text-3xl">{p.emoji}</div>
                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-brand">
                  <span className="rounded-full bg-brand/10 px-2.5 py-1">{p.category}</span>
                  <span className="text-navy/40">· {p.readMinutes} min</span>
                </div>
                <h3 className="mt-3 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/en/blog" className="text-sm font-bold text-brand hover:underline">View all articles →</Link>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#5865F2] to-[#404EED] p-10 text-center text-white">
          <div className="text-5xl">💬</div>
          <h2 className="mt-4 text-2xl font-black md:text-3xl">A community that grows visions together</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
            Share your goals with other users on Discord, cheer each other on, and practice together.
            You'll also be the first to get tips and update news.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3.5 font-extrabold text-[#404EED] transition hover:brightness-95"
          >
            Join the Discord community →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5 bg-[#fafbfc] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-navy/50 md:flex-row">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-navy">🌳 Seowoo Vision Dream</div>
            <p className="mt-1 text-xs">Success(S) = Belief(B) × Thinking(T) × Action(A)</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/en/features" className="hover:text-brand">Features</Link>
            <Link href="/en/blog" className="hover:text-brand">Blog</Link>
            <Link href="/en/pricing" className="hover:text-brand">Pricing</Link>
            <Link href="/en/for-teams" className="hover:text-brand">Organizations & Teams</Link>
            <Link href="/en/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/en/about" className="hover:text-brand">Our Story</Link>
            <a href="https://landing.visiondream.kr" className="hover:text-brand">S=BTA Landing</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Community</a>
            <a href="https://app.visiondream.kr/privacy" className="hover:text-brand">Privacy Policy</a>
            <a href="https://app.visiondream.kr/terms" className="hover:text-brand">Terms of Service</a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-navy/30">© 2026 Seowoo Vision Dream. All rights reserved.</p>
      </footer>
    </main>
  );
}
