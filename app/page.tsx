import Link from "next/link";
import { EbookForm } from "@/components/EbookForm";
import { getAllPosts } from "@/lib/posts";
import { JsonLd } from "@/components/JsonLd";
import { softwareApplicationSchema, homeFaqSchema } from "@/lib/schema";

const APP_URL = "https://app.visiondream.kr";
const DISCORD_URL = "https://discord.gg/gPbRp24Khn";

const STEPS = [
  { n: "1", t: "비전", d: "되고 싶은 궁극의 나를 선언" },
  { n: "2", t: "꿈", d: "영역별 인생 목표로 구체화" },
  { n: "3", t: "목표", d: "측정 가능한 3개월 목표" },
  { n: "4", t: "습관·계획", d: "오늘 할 일로 매일 실천" },
];

const FEATURES = [
  { e: "🗂️", t: "비전보드", d: "비전·꿈을 시각화하고 한눈에 관리" },
  { e: "📅", t: "플래너", d: "연·월·주·일 계획을 우선순위로" },
  { e: "✅", t: "습관 트래커", d: "꿈·목표와 연계된 매일의 실천" },
  { e: "🤖", t: "AI 코치", d: "비전·목표를 함께 다듬는 코칭" },
  { e: "🦁", t: "두려움 해체기", d: "무서워서 못 하던 일을 작은 한 걸음으로" },
  { e: "🛰️", t: "꿈 역설계", d: "원하는 미래에서 오늘 할 일까지 역산" },
];

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <JsonLd data={[softwareApplicationSchema, homeFaqSchema]} />
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
            <Link href="/blog" className="hover:text-brand">블로그</Link>
            <Link href="/pricing" className="hover:text-brand">요금제</Link>
            <Link href="/for-coaches" className="hover:text-brand">강사</Link>
            <Link href="/for-teams" className="hover:text-brand">기관·팀</Link>
            <Link href="/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/about" className="hover:text-brand">이야기</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login" className="text-sm font-semibold text-navy/70 transition hover:text-brand">
              로그인
            </Link>
            <a href={APP_URL} className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110">
              앱 시작하기
            </a>
          </div>
        </div>
      </header>

      {/* 히어로 */}
      <section className="relative bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-20 text-center text-white md:py-28">
        <div className="mx-auto max-w-3xl animate-fade-up">
          <div className="mb-5 inline-block rounded-full bg-amber px-4 py-1.5 text-sm font-extrabold text-navy">
            성공(S) = 믿음(B) × 생각(T) × 행동(A)
          </div>
          <h1 className="text-3xl font-black leading-tight md:text-5xl">
            비전을 심으면,<br />반드시 열매가 열립니다 🌱
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/80 md:text-lg">
            성공(S) = 믿음(B) × 생각(T) × 행동(A).<br />
            비전·꿈·목표·습관을 하나로 연결하고, AI가 미래에서 오늘 할 일까지 설계합니다.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-amber px-7 py-3.5 text-base font-extrabold text-navy transition hover:brightness-105">
              지금 무료로 시작 →
            </a>
            <a href="#ebook" className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-base font-bold text-white transition hover:bg-white/20">
              📚 무료 전자책 받기
            </a>
          </div>
        </div>
      </section>

      {/* 문제 제기 */}
      <section className="bg-white px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">"왜 나는 안 되고, 저 사람은 되는가?"</h2>
          <p className="mt-5 text-base leading-relaxed text-navy/70">
            목표는 있는데 매일 무엇을 할지 막막하고, 결심은 작심삼일로 끝나죠.<br />
            문제는 의지가 아니라 <strong className="text-brand">비전에서 오늘 행동까지 연결되는 시스템</strong>의 부재입니다.
          </p>
        </div>
      </section>

      {/* 솔루션 — 4단계 */}
      <section id="method" className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-bold text-brand">비전관리 프로세스</p>
          <h2 className="mt-2 text-center text-2xl font-black text-navy md:text-3xl">미래에서 오늘로, 거꾸로 설계합니다</h2>
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

      {/* 핵심 기능 */}
      <section id="features" className="bg-white px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-black text-navy md:text-3xl">하나의 앱, 완전한 연결</h2>
          <p className="mt-3 text-center text-navy/60">비전 → 꿈 → 목표 → 계획 → 습관이 끊김 없이 이어집니다</p>
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

      {/* 성공의 나무 */}
      <section className="bg-gradient-to-b from-[#f5f8fb] to-white px-5 py-20 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="text-6xl">🌳</div>
          <h2 className="mt-4 text-2xl font-black text-navy md:text-3xl">실천할수록 자라는 성공의 나무</h2>
          <p className="mt-4 text-base leading-relaxed text-navy/70">
            매일의 작은 실천이 열매🍎가 되어 나만의 나무를 키웁니다.<br />
            레벨·연속 기록·과수원·리더보드로 동기부여를 이어가세요.
          </p>
        </div>
      </section>

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
        <div className="mx-auto max-w-2xl">
          <h2 className="text-2xl font-black text-navy md:text-3xl">지금 바로 시작하세요</h2>
          <p className="mt-3 text-navy/60">웹에서 즉시 사용하거나 앱으로 설치하세요</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={APP_URL} className="rounded-xl bg-brand px-7 py-3.5 font-extrabold text-white transition hover:brightness-110">
              🌐 웹에서 시작하기
            </a>
            <a href={APP_URL} className="rounded-xl border border-navy/15 px-7 py-3.5 font-bold text-navy transition hover:bg-navy/5">
              📱 앱 다운로드
            </a>
          </div>
          <p className="mt-4 text-xs text-navy/40">Android · iOS · Web · 한국어 / English / 日本語</p>
        </div>
      </section>

      {/* 최신 블로그 */}
      <section className="bg-[#f5f8fb] px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-sm font-bold text-brand">인사이트</p>
              <h2 className="mt-2 text-2xl font-black text-navy md:text-3xl">비전을 행동으로 잇는 글</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-bold text-brand hover:underline sm:block">
              전체 보기 →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {getAllPosts().slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-black/5 bg-white p-6 transition hover:border-brand/30 hover:shadow-md"
              >
                <div className="text-3xl">{p.emoji}</div>
                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-brand">
                  <span className="rounded-full bg-brand/10 px-2.5 py-1">{p.category}</span>
                  <span className="text-navy/40">· {p.readMinutes}분</span>
                </div>
                <h3 className="mt-3 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/blog" className="text-sm font-bold text-brand hover:underline">전체 글 보기 →</Link>
          </div>
        </div>
      </section>

      {/* 커뮤니티 */}
      <section className="bg-white px-5 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-br from-[#5865F2] to-[#404EED] p-10 text-center text-white">
          <div className="text-5xl">💬</div>
          <h2 className="mt-4 text-2xl font-black md:text-3xl">함께 비전을 키우는 커뮤니티</h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
            디스코드에서 다른 사용자들과 목표를 나누고, 서로 응원하며 함께 실천하세요.
            팁·업데이트 소식도 가장 먼저 받아볼 수 있어요.
          </p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-white px-8 py-3.5 font-extrabold text-[#404EED] transition hover:brightness-95"
          >
            디스코드 커뮤니티 참여하기 →
          </a>
        </div>
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
            <Link href="/pricing" className="hover:text-brand">요금제</Link>
            <Link href="/for-teams" className="hover:text-brand">기관·팀</Link>
            <Link href="/faq" className="hover:text-brand">FAQ</Link>
            <Link href="/about" className="hover:text-brand">이야기</Link>
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
