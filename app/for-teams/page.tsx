import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/for-teams",
  title: "기관·팀 도입",
  description:
    "학교·기관·기업·교회를 위한 비전드림 팀 플랜. 조직 단위 비전 관리, 익명 성장 리포트, 멘토 관리, 관리자→멘토→멘티 권한 운영.",
});

const VALUE = [
  ["🏢 조직 단위 도입", "팀·학급·부서·소그룹 단위로 구성원을 초대하고 한곳에서 관리합니다."],
  ["📊 성장 리포트(익명)", "구성원의 실천·달성률을 익명·집계 통계로 확인해 운영을 개선합니다."],
  ["🧭 멘토 관리", "멘토가 멘티의 비전·목표·습관을 (동의 기반) 보고 코칭합니다."],
  ["✅ 결재형 운영", "관리자 → 멘토 → 멘티 권한과 승인 흐름으로 안정적으로 운영됩니다."],
  ["🎯 공동 챌린지", "조직 공통의 목표·챌린지로 함께 동기부여하고 문화를 만듭니다."],
  ["🔐 안전한 데이터", "구성원 데이터는 동의 범위 안에서만 공유되며 안전하게 보관됩니다."],
];

const USECASES = [
  ["🎓 학교·교육기관", "학생의 진로 비전·학습 목표·생활 습관을 통합 지도하고 성장 리포트로 학부모와 소통합니다."],
  ["🏢 기업·조직", "구성원의 성장 목표와 핵심 습관을 OKR처럼 연결해 자기주도 성장 문화를 만듭니다."],
  ["⛪ 교회·공동체", "공동체의 비전과 개인의 결단을 잇고, 소그룹 단위로 함께 실천합니다."],
  ["🧑‍🏫 청소년지도·상담", "청소년의 자존감·진로·습관을 비전 중심으로 코칭하고 변화를 추적합니다."],
];

export default function ForTeamsPage() {
  return (
    <PageShell crumb={{ name: "기관·팀", path: "/for-teams" }}>
      <PageHero
        badge="FOR TEAMS & ORGANIZATIONS"
        title="조직의 비전을, 구성원의 매일로"
        sub="학교·기관·기업·공동체를 위한 비전드림 팀 플랜. 함께 비전을 심고 함께 자랍니다."
      />

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">조직 운영에 필요한 모든 것</h2>
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
          <h2 className="text-center text-xl font-black text-navy md:text-2xl">이런 조직에 맞습니다</h2>
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
          <h2 className="text-2xl font-black">조직 도입을 검토 중이신가요?</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-white/70">
            규모·목표를 알려주시면 맞춤 도입 방안과 견적을 안내드립니다. 시범 운영(파일럿)도 가능합니다.
          </p>
          <a
            href="/contact?type=team"
            className="mt-6 inline-block rounded-xl bg-amber px-8 py-3.5 font-extrabold text-navy"
          >
            도입 문의하기
          </a>
        </div>
      </section>
    </PageShell>
  );
}
