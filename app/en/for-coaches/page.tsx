import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/for-coaches",
  title: "Coaches, Consultants & Organizations",
  description: "Vision Dream for coaches, consultants, teachers, youth instructors, and organizations. Mentee growth management, referral rewards, and organizational growth reports.",
});

const COACH = [
  ["🎓 Mentee Growth Management", "See and coach your mentees' vision, goal, and habit achievements at a glance (consent-based)."],
  ["🎁 Referral Rewards", "When a mentee signs up with your coach-exclusive referral code, both sides enjoy premium benefits."],
  ["📚 Content Publishing", "Deliver motivational content and short-form videos to your mentees."],
];
const TEAM = [
  ["🏢 Organization-wide Rollout", "Invite and manage members by team, class, or organization."],
  ["📊 Growth Reports (Anonymous)", "Review members' action and achievement statistics anonymously and in aggregate."],
  ["✅ Approval-based Operation", "Run smoothly with admin → mentor → mentee roles and an approval workflow."],
];

export default function ForCoachesPage() {
  return (
    <PageShell lang="en" crumb={{ name: "Coaches & Consultants", path: "/en/for-coaches" }}>
      <PageHero
        badge="FOR COACHES & TEAMS"
        title="Grow Together, Not Alone"
        sub="Vision Dream for coaches, consultants, teachers, youth instructors, and organizations."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-14">
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">👩‍🏫 Coaches & Consultants</h2>
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
            <h2 className="text-xl font-black text-navy md:text-2xl">🏢 Organizations & Teams</h2>
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
            <h3 className="text-xl font-black">Would you like to join us as a coach or organization?</h3>
            <p className="mt-3 text-sm text-white/70">Leave us a rollout or partnership inquiry and we'll get back to you.</p>
            <a href="/contact?type=coach" className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">Contact Us</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
