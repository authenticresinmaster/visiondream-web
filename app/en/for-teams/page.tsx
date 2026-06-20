import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/for-teams",
  title: "For Teams & Organizations",
  description:
    "Vision Dream team plans for schools, organizations, companies, and churches. Organization-wide vision management, anonymous Growth Reports, mentor management, and Admin → Mentor → Mentee permission operations.",
});

const VALUE = [
  ["🏢 Organization-wide Rollout", "Invite members by team, class, department, or small group and manage them all in one place."],
  ["📊 Growth Reports (Anonymous)", "Review members' practice and achievement rates with anonymous, aggregated statistics to improve operations."],
  ["🧭 Mentor Management", "Mentors view and coach their mentees' visions, goals, and habits (consent-based)."],
  ["✅ Approval-based Operations", "Run smoothly with Admin → Mentor → Mentee permissions and approval flows."],
  ["🎯 Shared Challenges", "Motivate together and build culture with organization-wide goals and challenges."],
  ["🔐 Secure Data", "Member data is shared only within the scope of consent and stored securely."],
];

const USECASES = [
  ["🎓 Schools & Education", "Guide students' career visions, learning goals, and daily habits together, and communicate with parents through Growth Reports."],
  ["🏢 Companies & Organizations", "Connect members' growth goals and core habits like OKRs to build a self-driven growth culture."],
  ["⛪ Churches & Communities", "Link the community's vision with each individual's commitment, and practice together in small groups."],
  ["🧑‍🏫 Youth Guidance & Counseling", "Coach young people's self-esteem, career path, and habits around their vision, and track their changes."],
];

export default function ForTeamsPage() {
  return (
    <PageShell lang="en" crumb={{ name: "For Teams", path: "/en/for-teams" }}>
      <PageHero
        badge="FOR TEAMS & ORGANIZATIONS"
        title="Bring your organization's vision into every member's day"
        sub="Vision Dream team plans for schools, organizations, companies, and communities. Plant a vision together, grow together."
      />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">Everything you need to run your organization</h2>
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
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">A great fit for these organizations</h2>
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
          <h2 className="text-2xl font-black">Considering a rollout for your organization?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            Tell us your size and goals, and we'll guide you through a tailored rollout plan and quote. A pilot program is also available.
          </p>
          <a
            href="/contact?type=team"
            className="mt-6 inline-block rounded-xl bg-amber px-8 py-3.5 font-extrabold text-navy"
          >
            Get in touch
          </a>
        </div>
      </section>
    </PageShell>
  );
}
