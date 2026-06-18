import Link from "next/link";

const APP_URL = "https://app.visiondream.kr";
const DISCORD_URL = "https://discord.gg/gPbRp24Khn";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <span className="text-lg font-extrabold text-navy">서우 비전드림</span>
          </Link>
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
          <a href={APP_URL} className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110">
            앱 시작하기
          </a>
        </div>
      </header>

      {children}

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

export function PageHero({ badge, title, sub }: { badge: string; title: string; sub: string }) {
  return (
    <section className="bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-16 text-center text-white md:py-20">
      <div className="mx-auto max-w-3xl animate-fade-up">
        <div className="mb-4 inline-block rounded-full bg-amber px-4 py-1.5 text-sm font-extrabold text-navy">{badge}</div>
        <h1 className="text-2xl font-black leading-tight md:text-4xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-white/80">{sub}</p>
      </div>
    </section>
  );
}
