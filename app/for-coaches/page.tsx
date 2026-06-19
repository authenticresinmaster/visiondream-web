import { PageShell, PageHero } from "@/components/PageShell";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  path: "/for-coaches",
  title: "강사·컨설턴트·기관",
  description: "강사·컨설턴트·교사·청소년지도사·기관을 위한 비전드림. 멘티 성장 관리, 추천 보상, 조직 성장 리포트.",
});

const COACH = [
  ["🎓 멘티 성장 관리", "멘티의 비전·목표·습관 달성을 (동의 기반) 한눈에 보고 코칭하세요."],
  ["🎁 추천 보상", "강사 전용 추천코드로 멘티가 가입하면 양측 모두 프리미엄 혜택."],
  ["📚 콘텐츠 발행", "동기부여 콘텐츠·숏폼을 멘티에게 전달합니다."],
];
const TEAM = [
  ["🏢 조직 단위 도입", "팀·학급·기관 단위로 구성원을 초대하고 관리합니다."],
  ["📊 성장 리포트(익명)", "구성원의 실천·달성 통계를 익명·집계로 확인합니다."],
  ["✅ 결재형 운영", "관리자→멘토→멘티 권한과 승인 흐름으로 안정적으로 운영합니다."],
];

export default function ForCoachesPage() {
  return (
    <PageShell crumb={{ name: "강사·컨설턴트", path: "/for-coaches" }}>
      <PageHero
        badge="FOR COACHES & TEAMS"
        title="혼자가 아니라, 함께 성장시키세요"
        sub="강사·컨설턴트·교사·청소년지도사, 그리고 기관을 위한 비전드림."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl space-y-14">
          <div>
            <h2 className="text-xl font-black text-navy md:text-2xl">👩‍🏫 강사·컨설턴트</h2>
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
            <h2 className="text-xl font-black text-navy md:text-2xl">🏢 기관·팀</h2>
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
            <h3 className="text-xl font-black">강사·기관으로 함께하시겠어요?</h3>
            <p className="mt-3 text-sm text-white/70">도입·제휴 문의를 남겨주시면 안내드리겠습니다.</p>
            <a href="mailto:authenticresinmaster@gmail.com?subject=비전드림 강사/기관 문의" className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">문의하기</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
