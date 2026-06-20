import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbLd } from "@/lib/seo";
import { AuthNav } from "@/components/AuthNav";
import { LangSwitch } from "@/components/LangSwitch";

const APP_URL = "https://app.visiondream.kr";
const DISCORD_URL = "https://discord.gg/gPbRp24Khn";

export type Lang = "ko" | "en" | "ja";

const BRAND: Record<Lang, string> = {
  ko: "서우 비전드림",
  en: "Seowoo Vision Dream",
  ja: "ソウ・ビジョンドリーム",
};

const LANDING_URL = "https://landing.visiondream.kr";
const LANDING_LABEL: Record<Lang, string> = {
  ko: "S=BTA 랜딩페이지",
  en: "S=BTA Landing",
  ja: "S=BTA ランディング",
};

const T: Record<
  Lang,
  {
    features: string; method: string; blog: string; pricing: string;
    coaches: string; teams: string; faq: string; about: string;
    start: string; privacy: string; terms: string; community: string;
    tagline: string; rights: string;
  }
> = {
  ko: {
    features: "기능", method: "성공법칙", blog: "블로그", pricing: "요금제",
    coaches: "강사", teams: "기관·팀", faq: "FAQ", about: "이야기",
    start: "앱 시작하기", privacy: "개인정보처리방침", terms: "이용약관", community: "커뮤니티",
    tagline: "성공(S) = 믿음(B) × 생각(T) × 행동(A)",
    rights: "© 2026 서우 비전드림. All rights reserved.",
  },
  en: {
    features: "Features", method: "Method", blog: "Blog", pricing: "Pricing",
    coaches: "Coaches", teams: "Teams", faq: "FAQ", about: "Story",
    start: "Open App", privacy: "Privacy", terms: "Terms", community: "Community",
    tagline: "Success(S) = Belief(B) × Thinking(T) × Action(A)",
    rights: "© 2026 Seowoo Vision Dream. All rights reserved.",
  },
  ja: {
    features: "機能", method: "成功法則", blog: "ブログ", pricing: "料金",
    coaches: "講師", teams: "団体・チーム", faq: "FAQ", about: "ストーリー",
    start: "アプリを開く", privacy: "プライバシー", terms: "利用規約", community: "コミュニティ",
    tagline: "成功(S) = 信念(B) × 思考(T) × 行動(A)",
    rights: "© 2026 ソウ・ビジョンドリーム. All rights reserved.",
  },
};

/** 로케일별 경로 prefix. ko=없음, en=/en, ja=/ja */
export function localePath(lang: Lang, path: string): string {
  if (lang === "ko") return path;
  return `/${lang}${path === "/" ? "" : path}`;
}

export function PageShell({
  children,
  crumb,
  lang = "ko",
}: {
  children: React.ReactNode;
  crumb?: { name: string; path: string };
  lang?: Lang;
}) {
  const t = T[lang];
  const p = (path: string) => localePath(lang, path);

  return (
    <main className="overflow-x-hidden">
      {crumb && <JsonLd data={breadcrumbLd(crumb)} />}
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
          <Link href={p("/")} className="flex items-center gap-2">
            <span className="text-xl">🌳</span>
            <span className="text-lg font-extrabold text-navy">{BRAND[lang]}</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-navy/70 lg:flex">
            <Link href={p("/features")} className="hover:text-brand">{t.features}</Link>
            <Link href={p("/method")} className="hover:text-brand">{t.method}</Link>
            <Link href={p("/pricing")} className="hover:text-brand">{t.pricing}</Link>
            <Link href={p("/for-coaches")} className="hover:text-brand">{t.coaches}</Link>
            <Link href={p("/for-teams")} className="hover:text-brand">{t.teams}</Link>
            <Link href={p("/blog")} className="hover:text-brand">{t.blog}</Link>
            <Link href={p("/faq")} className="hover:text-brand">{t.faq}</Link>
            <Link href={p("/about")} className="hover:text-brand">{t.about}</Link>
            <a href={LANDING_URL} className="hover:text-brand">{LANDING_LABEL[lang]}</a>
          </nav>
          <div className="flex items-center gap-3">
            <LangSwitch />
            <AuthNav />
            <a href={APP_URL} className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110">
              {t.start}
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-black/5 bg-[#fafbfc] px-5 py-10">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-navy/50 md:flex-row">
          <div>
            <div className="flex items-center gap-2 font-extrabold text-navy">🌳 {BRAND[lang]}</div>
            <p className="mt-1 text-xs">{t.tagline}</p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4">
            <Link href={p("/features")} className="hover:text-brand">{t.features}</Link>
            <Link href={p("/blog")} className="hover:text-brand">{t.blog}</Link>
            <Link href={p("/pricing")} className="hover:text-brand">{t.pricing}</Link>
            <Link href={p("/for-teams")} className="hover:text-brand">{t.teams}</Link>
            <Link href={p("/faq")} className="hover:text-brand">{t.faq}</Link>
            <Link href={p("/about")} className="hover:text-brand">{t.about}</Link>
            <a href={LANDING_URL} className="hover:text-brand">{LANDING_LABEL[lang]}</a>
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">{t.community}</a>
            <a href="https://app.visiondream.kr/privacy" className="hover:text-brand">{t.privacy}</a>
            <a href="https://app.visiondream.kr/terms" className="hover:text-brand">{t.terms}</a>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-navy/30">{t.rights}</p>
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
