import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/faq",
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about Vision Dream — pricing, features, data, team plans, and supported platforms.",
});

const FAQ: { q: string; a: string }[] = [
  {
    q: "Can I use it for free?",
    a: "Yes. Core features such as the Vision Board, dreams, goals, planner, habit tracker, and Tree of Success are available for free. Some features like the AI Coach, Fear Buster, Dream Backcasting, and advanced analytics are offered as a free trial and then unlimited with Premium.",
  },
  {
    q: "How much is Premium?",
    a: "Premium is ₩9,900 per month (₩99,000 per year). It includes all AI features, the Fear Buster and Dream Backcasting, advanced analytics, and an expansion to 50 dreams and 100 goals. You can also receive free Premium benefits by signing up with a referral code.",
  },
  {
    q: "Which devices can I use it on?",
    a: "You can use it on Android and iOS apps as well as the web, with your data synced through your account. It supports 한국어, English, and 日本語.",
  },
  {
    q: "What does Success(S) = Belief(B) × Thinking(T) × Action(A) mean?",
    a: "It is Seowoo's law of success: Success(S) is the product of Belief(B), Thinking(T), and Action(A). Because it is multiplication rather than addition, if any one of them is 0, the whole becomes 0. Vision Dream connects Vision → Dream → Goal → Habit so that all three work together.",
  },
  {
    q: "What are the Fear Buster and Dream Backcasting?",
    a: "The Fear Buster breaks down the tasks you keep postponing out of fear into small, manageable steps and connects them to your dreams and goals. Dream Backcasting takes the future you want (for example, 5 years from now) and designs backward — from Vision → Dream → Goal all the way to today's tasks. You can edit the AI-generated content directly and turn it into plans and habits.",
  },
  {
    q: "Is my data safe?",
    a: "Your data is stored securely, and you can export and import it yourself with the backup and restore features. Even when used by teams or organizations, members' data is shared only within the scope they have consented to.",
  },
  {
    q: "Can a team or organization use it as a group?",
    a: "Yes. With Team and Organization plans, you can adopt it across schools, companies, churches, and small groups. It supports anonymous growth reports, mentor management, and admin → mentor → mentee permission operation. For details, see the 'Teams' page or contact us.",
  },
  {
    q: "I'm a coach or consultant — how can I use it?",
    a: "When a mentee signs up with a coach-only referral code, both sides receive Premium benefits. With consent-based access, you can view and coach your mentees' vision, goal, and habit progress, and deliver motivational content. Please reach out through the 'Coaches' page.",
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
    <PageShell lang="en" crumb={{ name: "FAQ", path: "/en/faq" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        badge="FAQ"
        title="Frequently Asked Questions"
        sub="From pricing and features to data and team operations — we've gathered what you may be wondering about."
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
          <h2 className="text-xl font-black">Still have questions?</h2>
          <p className="mt-3 text-sm text-white/70">Reach out anytime and we'll be happy to help.</p>
          <a
            href="/en/contact"
            className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
          >
            Contact Us
          </a>
        </div>
      </section>
    </PageShell>
  );
}
