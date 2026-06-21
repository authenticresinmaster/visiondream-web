"use client";

import Link from "next/link";
import { useState } from "react";
import { AuthNav } from "./AuthNav";
import { LangSwitch } from "./LangSwitch";

const APP_URL = "https://app.visiondream.kr";
const LANDING_URL = "https://landing.visiondream.kr";

type Lang = "ko" | "en" | "ja";

const ITEMS: { path: string; ko: string; en: string; ja: string }[] = [
  { path: "/features", ko: "기능", en: "Features", ja: "機能" },
  { path: "/method", ko: "성공법칙", en: "Success Formula", ja: "成功法則" },
  { path: "/pricing", ko: "요금제", en: "Pricing", ja: "料金プラン" },
  { path: "/for-coaches", ko: "강사", en: "Coaches", ja: "講師" },
  { path: "/for-teams", ko: "기관·팀", en: "Organizations & Teams", ja: "機関・チーム" },
  { path: "/blog", ko: "블로그", en: "Blog", ja: "ブログ" },
  { path: "/faq", ko: "FAQ", en: "FAQ", ja: "FAQ" },
  { path: "/about", ko: "이야기", en: "Our Story", ja: "ストーリー" },
];
const LANDING_LABEL: Record<Lang, string> = {
  ko: "S=BTA 랜딩페이지",
  en: "S=BTA Landing",
  ja: "S=BTA ランディング",
};
const START_LABEL: Record<Lang, string> = { ko: "앱 시작하기", en: "Open App", ja: "アプリを開く" };

function lp(lang: Lang, path: string): string {
  return lang === "ko" ? path : `/${lang}${path}`;
}

/** 모바일(lg 미만) 햄버거 메뉴. 데스크탑에선 숨김. */
export function MobileNav({ lang = "ko" }: { lang?: Lang }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-label="메뉴 열기"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-10 w-10 items-center justify-center rounded-lg text-2xl text-navy"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <>
          {/* 배경 오버레이 */}
          <button
            type="button"
            aria-label="메뉴 닫기"
            onClick={close}
            className="fixed inset-0 top-[57px] z-40 cursor-default bg-black/20"
          />
          {/* 드롭다운 메뉴 */}
          <nav className="fixed inset-x-0 top-[57px] z-50 max-h-[calc(100vh-57px)] overflow-y-auto border-b border-black/5 bg-white px-5 py-4 shadow-lg">
            <div className="mx-auto flex max-w-6xl flex-col gap-1">
              {ITEMS.map((it) => (
                <Link
                  key={it.path}
                  href={lp(lang, it.path)}
                  onClick={close}
                  className="rounded-lg px-3 py-3 text-base font-semibold text-navy/80 transition hover:bg-[#f5f8fb] hover:text-brand"
                >
                  {it[lang]}
                </Link>
              ))}
              <a
                href={LANDING_URL}
                onClick={close}
                className="rounded-lg px-3 py-3 text-base font-semibold text-navy/80 transition hover:bg-[#f5f8fb] hover:text-brand"
              >
                {LANDING_LABEL[lang]}
              </a>

              <div className="mt-3 flex items-center justify-between gap-3 border-t border-black/5 pt-4">
                <div className="flex items-center gap-3" onClick={close}>
                  <LangSwitch />
                  <AuthNav />
                </div>
                <a
                  href={APP_URL}
                  className="rounded-full bg-brand px-4 py-2 text-sm font-bold text-white transition hover:brightness-110"
                >
                  {START_LABEL[lang]}
                </a>
              </div>
            </div>
          </nav>
        </>
      )}
    </div>
  );
}
