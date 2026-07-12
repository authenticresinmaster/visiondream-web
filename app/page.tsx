import Link from "next/link";
import { EbookForm } from "@/components/EbookForm";
import { InquiryForm } from "@/components/InquiryForm";
import { VideoGallery } from "@/components/VideoGallery";
import { videosFor, videosJsonLd, videosIndexHref } from "@/lib/videos";
import { getAllPosts } from "@/lib/posts";
import { JsonLd } from "@/components/JsonLd";
import { softwareApplicationSchema, homeFaqSchema } from "@/lib/schema";
import { AuthNav } from "@/components/AuthNav";
import { LangSwitch } from "@/components/LangSwitch";
import { MobileNav } from "@/components/MobileNav";
import { Reveal } from "@/components/Reveal";
import { getApprovedTestimonials } from "@/lib/testimonials";
import { APP_WEB_URL as APP_URL, ANDROID_INSTALL_URL, IS_STORE_LIVE } from "@/lib/app-links";

const DISCORD_URL = "https://discord.gg/gPbRp24Khn";
const KAKAO_URL = "https://pf.kakao.com/_xkmeqX";

// 후기(사용자 이야기)가 승인되면 1시간 내 홈에 반영 (정적 서빙 유지)
export const revalidate = 3600;

const STEPS = [
  { n: "1", t: "비전", d: "되고 싶은 궁극의 나를 선언" },
  { n: "2", t: "꿈", d: "영역별 인생 목표로 구체화" },
  { n: "3", t: "목표", d: "측정 가능한 3개월 목표" },
  { n: "4", t: "습관·계획", d: "오늘 할 일로 매일 실천" },
];

const FEATURES = [
  { e: "🗂️", t: "비전보드", d: "비전·꿈을 시각화하고 한눈에 관리" },
  { e: "🗺️", t: "꿈지도(만다라)", d: "9×9 만다라트로 비전을 81칸 실천으로 펼치기" },
  { e: "📅", t: "플래너", d: "연·월·주·일 계획을 우선순위로" },
  { e: "✅", t: "습관 트래커", d: "꿈·목표와 연계된 매일의 실천" },
  { e: "🤖", t: "AI 코치", d: "비전·목표를 함께 다듬는 코칭" },
  { e: "🦁", t: "두려움 해체기", d: "무서워서 못 하던 일을 작은 한 걸음으로" },
  { e: "🛰️", t: "꿈 역설계", d: "원하는 미래에서 오늘 할 일까지 역산" },
  { e: "🌳", t: "성공의 나무", d: "실천할수록 자라는 게이미피케이션" },
];

export default async function Home() {
  const stories = await getApprovedTestimonials(4);
  return (
    <main className="overflow-x-hidden">
      <JsonLd data={[softwareApplicationSchema, homeFaqSchema, ...videosJsonLd("ko")]} />
      {/* 헤더 */}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <span className="text-lg font-extrabold text-navy">서우 비전드림</span>
          </div>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-navy/70 lg:flex">
            <Link href="/features" className="hover:text-brand">기능</Link>
            <Link href="/method" className="hover:text-brand">성공법칙</Link>
            <Link href="/pricing" className="hover:text-brand">요금제</Link>
            <Link href="/for-coaches" className="hover:text-brand">강사</Link>
            <Link href="/for-teams" className="hover:text-brand">기관·팀</Link>
            <Link href="/blog" className="hover:text-brand">블로그</Link>
            <Link href="/stories" className="hover:text-brand">사례</Link>
            <Link href="/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/about" className="hover:text-brand">이야기</Link>
            <a href="https://landing.visiondream.kr" className="hover:text-brand">S=BTA 랜딩페이지</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-3 lg:flex">
              <LangSwitch />
              <AuthNav />
              <a href={ANDROID_INSTALL_URL} className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110">
                앱 시작하기
              </a>
            </div>
            <MobileNav />
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="relative bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-amber px-4 py-1.5 text-sm font-extrabold text-navy">
            서우 비전드림 · 성공 방정식 S = B × T × A
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            비전을 심으면,<br />반드시 열매가 열립니다 🌱
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
            결심은 왜 늘 작심삼일로 끝날까요? 문제는 의지가 아니라<br />
            <strong className="text-amber">비전에서 오늘 행동까지</strong> 이어주는 시스템의 부재입니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href="#ebook" className="rounded-xl bg-amber px-7 py-3.5 text-base font-extrabold text-navy transition hover:brightness-105">
              📚 무료 전자책 받기 →
            </a>
            <a href={ANDROID_INSTALL_URL} className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/20">
              앱 바로 시작하기
            </a>
          </div>
          <p className="mx-auto mt-4 text-xs text-white/50">
            30초면 충분해요 · 무료로 시작 · 한국어 / English / 日本語
          </p>
        </div>
      </section>

      {/* 문제 제기 */}
      <section className="bg-white px-5 py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">"왜 나는 안 되고, 저 사람은 되는가?"</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            목표는 있는데 매일 무엇을 할지 막막하고, 결심은 작심삼일로 끝나죠.<br />
            문제는 의지가 아니라 <strong className="text-brand">비전에서 오늘 행동까지 연결되는 시스템</strong>의 부재입니다.
          </p>
        </Reveal>
      </section>

      {/* 솔루션 — 4단계 */}
      <section id="method" className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center text-sm font-bold text-brand">비전관리 프로세스</p>
            <h2 className="mt-2 text-center text-2xl font-black text-navy md:text-3xl">미래에서 오늘로, 거꾸로 설계합니다</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal
                key={s.n}
                delay={i * 90}
                className="rounded-2xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand text-lg font-black text-white">{s.n}</div>
                <h3 className="mt-4 text-lg font-extrabold text-navy">{s.t}</h3>
                <p className="mt-1.5 text-sm text-navy/60">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 핵심 기능 */}
      <section id="features" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h2 className="text-center text-2xl font-black text-navy md:text-3xl">하나의 앱, 완전한 연결</h2>
            <p className="mt-3 text-center text-navy/60">비전 → 꿈 → 목표 → 계획 → 습관이 끊김 없이 이어집니다</p>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <Reveal
                key={f.t}
                delay={(i % 3) * 90}
                className="rounded-2xl border border-black/5 bg-[#fafbfc] p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/20 hover:shadow-lg"
              >
                <div className="text-3xl">{f.e}</div>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy/60">{f.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 차별화 — 왜 비전드림인가 */}
      <section className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-center text-sm font-bold text-brand">왜 비전드림인가</p>
            <h2 className="mt-2 text-center text-2xl font-black text-navy md:text-3xl">습관앱도, 플래너도, 챗봇도 아닙니다</h2>
            <p className="mt-3 text-center text-navy/60">흩어진 도구가 아니라, 비전에서 오늘까지 하나로 연결된 시스템</p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { tag: "습관앱과 다른 점", t: "습관만 따로 X", d: "체크만 쌓다 '왜'를 잃습니다. 비전드림은 습관을 비전·목표와 연결해, 실천이 곧 꿈을 향한 한 걸음이 됩니다." },
              { tag: "플래너와 다른 점", t: "계획만 따로 X", d: "일정만 채우면 지치죠. 미래에서 오늘로 역설계해, 오늘 할 일에 '이유'가 붙어 지속됩니다." },
              { tag: "AI챗봇과 다른 점", t: "매번 새로 묻기 X", d: "당신의 비전·목표·기록을 기억하는 AI 코치가, 매일의 실천 구조 안에서 함께합니다." },
            ].map((c, i) => (
              <Reveal
                key={c.t}
                delay={i * 90}
                className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="inline-block rounded-full bg-brand/10 px-2.5 py-1 text-xs font-bold text-brand">{c.tag}</span>
                <h3 className="mt-3 text-lg font-extrabold text-navy">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/60">{c.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 증거 — 검증된 방법론 */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-4xl">
          <Reveal className="rounded-3xl bg-[#f5f8fb] p-8 md:p-10">
            <p className="text-sm font-bold text-brand">검증된 방법론</p>
            <h2 className="mt-2 text-2xl font-black text-navy md:text-3xl">벼랑 끝에서 다시 일어선 실전 공식</h2>
            <p className="mt-4 text-base leading-relaxed text-navy/70">
              S=BTA는 책상 위 이론이 아닙니다. 배신과 빚, 은퇴 위기의 벼랑 끝에서 5년간 읽고 실천하며
              재기해낸 <strong className="text-navy">서우 대표의 실전 성공 공식</strong>을, 누구나 매일
              따라 할 수 있게 앱으로 만들었습니다.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { e: "🧭", t: "실전 검증", d: "이론이 아닌 재기의 경험에서" },
                { e: "🆓", t: "무료로 확인", d: "부담 없이 지금 바로" },
                { e: "🌏", t: "3개 국어", d: "한국어 · English · 日本語" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-black/5 bg-white p-5 text-center">
                  <div className="text-3xl">{x.e}</div>
                  <div className="mt-2 font-extrabold text-navy">{x.t}</div>
                  <div className="mt-1 text-xs text-navy/60">{x.d}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* 사용자 이야기 (승인된 실제 사례만 — 없으면 미노출) */}
      {stories.length > 0 && (
        <section className="bg-white px-5 pb-4 pt-0">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-center text-sm font-bold text-brand">사용자 이야기</p>
              <h2 className="mt-2 text-center text-2xl font-black text-navy md:text-3xl">비전을 심은 분들의 진짜 이야기</h2>
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {stories.map((t, i) => (
                <Reveal key={t.id} delay={(i % 2) * 90}>
                  <figure className="h-full rounded-2xl border border-black/5 bg-[#fafbfc] p-6">
                    {t.goalTitle && (
                      <figcaption className="mb-2 text-xs font-semibold text-brand">🎯 {t.goalTitle}</figcaption>
                    )}
                    <blockquote className="whitespace-pre-wrap text-[15px] leading-relaxed text-navy">
                      “{t.content}”
                    </blockquote>
                    <p className="mt-4 text-sm font-medium text-navy/50">— {t.name ?? "비전드림 회원"}</p>
                  </figure>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link href="/stories" className="text-sm font-bold text-brand hover:underline">
                전체 사례 보기 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 성공의 나무 */}
      <section className="bg-gradient-to-b from-[#f5f8fb] to-white px-5 py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <div className="text-6xl">🌳</div>
          <h2 className="mt-4 text-2xl font-black text-navy md:text-3xl">실천할수록 자라는 성공의 나무</h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            매일의 작은 실천이 열매🍎가 되어 나만의 나무를 키웁니다.<br />
            레벨·연속 기록·과수원·리더보드로 동기부여를 이어가세요.
          </p>
        </Reveal>
      </section>

      {/* 영상으로 보는 비전드림 */}
      {videosFor("ko").length > 0 && (
        <section id="videos" className="bg-white px-5 py-20">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center text-2xl font-black text-navy md:text-3xl">영상으로 보는 비전드림</h2>
            <p className="mt-3 text-center text-navy/60">30초면 충분해요. 카드를 누르면 영상과 대본을 함께 볼 수 있습니다.</p>
            <div className="mt-10">
              <VideoGallery videos={videosFor("ko").slice(0, 6)} lang="ko" />
            </div>
            <div className="mt-8 text-center">
              <Link href={videosIndexHref("ko")} className="text-sm font-bold text-brand hover:underline">
                전체 영상 보기 →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 전자책 CTA */}
      <section id="ebook" className="bg-gradient-to-br from-[#1a2332] to-[#105d9e] px-5 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm font-bold text-gold">무료 전자책</p>
            <h2 className="mt-2 text-2xl font-black text-white md:text-3xl">
              왜 나는 안 되고,<br />저 사람은 되는가?
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              성공법칙 성공(S)=믿음(B)×생각(T)×행동(A)과 비전관리 프로세스를 담은 전자책을 무료로 받아보세요.
              이메일로 바로 보내드립니다.
            </p>
          </div>
          <EbookForm />
        </div>
      </section>

      {/* 다운로드 */}
      <section id="download" className="bg-white px-5 py-20 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">지금 바로 시작하세요</h2>
          <p className="mt-3 text-navy/60">웹에서 즉시 사용하거나 앱으로 설치하세요</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-brand px-7 py-3.5 font-extrabold text-white transition hover:brightness-110">
              🌐 웹에서 시작하기
            </a>
            <a href={ANDROID_INSTALL_URL} className="rounded-xl border border-navy/15 px-7 py-3.5 font-bold text-navy transition hover:bg-navy/5">
              {IS_STORE_LIVE ? "▶ Google Play에서 다운로드" : "📱 앱 다운로드 (Android)"}
            </a>
          </div>
          <p className="mt-4 text-xs text-navy/40">
            {IS_STORE_LIVE ? "Google Play" : "Google Play 출시 준비 중"} · Web · 한국어 / English / 日本語 ·{" "}
            <Link href="/download" className="underline hover:text-brand">설치 안내</Link>
          </p>
        </Reveal>
      </section>

      {/* 최신 블로그 */}
      <section className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <Reveal className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-brand">인사이트</p>
              <h2 className="mt-2 text-2xl font-black text-navy md:text-3xl">비전을 행동으로 잇는 글</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-bold text-brand hover:underline sm:block">
              전체 보기 →
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {getAllPosts().slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 90} className="h-full">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-black/5 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg"
                >
                  <div className="text-3xl">{p.emoji}</div>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-brand">
                    <span className="rounded-full bg-brand/10 px-2.5 py-1">{p.category}</span>
                    <span className="text-navy/40">· {p.readMinutes}분</span>
                  </div>
                  <h3 className="mt-3 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.description}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-bold text-brand hover:underline">전체 글 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 커뮤니티 */}
      <section className="bg-white px-5 py-20">
        <Reveal className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#5865F2] to-[#404EED] p-10 text-center text-white">
          <div className="text-5xl">💬</div>
          <h2 className="mt-4 text-2xl font-black md:text-3xl">함께 비전을 키우는 커뮤니티</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
            디스코드에서 다른 사용자들과 목표를 나누고, 서로 응원하며 함께 실천하세요.
            문의는 카카오톡 채널로 편하게 남겨주시면 빠르게 답해드립니다.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-white px-7 py-3.5 font-extrabold text-[#404EED] transition hover:brightness-95"
            >
              💬 디스코드 참여하기
            </a>
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-xl bg-[#FEE500] px-7 py-3.5 font-extrabold text-[#191600] transition hover:brightness-95"
            >
              💛 카카오톡 채널 문의
            </a>
          </div>
        </Reveal>
      </section>

      {/* 도입 문의 */}
      <section id="contact" className="bg-[#f5f8fb] px-5 py-20">
        <Reveal className="mx-auto max-w-xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-black text-navy md:text-3xl">기관·팀 도입 문의</h2>
            <p className="mx-auto mt-3 max-w-md text-base text-navy/60">
              기업·학교·교회·소그룹, 강사·코치를 위한 비전드림 도입을 도와드립니다. 남겨주시면 담당자가 연락드립니다.
            </p>
          </div>
          <InquiryForm defaultType="team" />
        </Reveal>
      </section>

      {/* 푸터 */}
      <footer className="border-t border-black/5 bg-[#fafbfc] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-navy/50 md:flex-row">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-navy">🌳 서우 비전드림</div>
            <p className="mt-1 text-xs">성공(S) = 믿음(B) × 생각(T) × 행동(A)</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/features" className="hover:text-brand">기능</Link>
            <Link href="/blog" className="hover:text-brand">블로그</Link>
            <Link href="/stories" className="hover:text-brand">사례</Link>
            <Link href="/download" className="hover:text-brand">다운로드</Link>
            <Link href="/pricing" className="hover:text-brand">요금제</Link>
            <Link href="/for-teams" className="hover:text-brand">기관·팀</Link>
            <Link href="/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/about" className="hover:text-brand">이야기</Link>
            <a href="https://landing.visiondream.kr" className="hover:text-brand">S=BTA 랜딩페이지</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">커뮤니티</a>
            <a href="https://app.visiondream.kr/privacy" className="hover:text-brand">개인정보처리방침</a>
            <a href="https://app.visiondream.kr/terms" className="hover:text-brand">이용약관</a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-navy/30">© 2026 서우 비전드림. All rights reserved.</p>
      </footer>
    </main>
  );
}
