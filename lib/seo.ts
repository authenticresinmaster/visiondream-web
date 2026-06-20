import type { Metadata } from "next";

/**
 * 페이지별 메타데이터 헬퍼 (다국어 hreflang 지원).
 * lang 별 canonical + 언어 대체(alternates.languages)를 자동 구성한다.
 * ko=prefix 없음, en=/en, ja=/ja.
 */

export const SITE_URL = "https://visiondream.kr";

export type Lang = "ko" | "en" | "ja";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
};

const OG_LOCALE: Record<Lang, string> = { ko: "ko_KR", en: "en_US", ja: "ja_JP" };
const BRAND: Record<Lang, string> = {
  ko: "서우 비전드림",
  en: "Seowoo Vision Dream",
  ja: "ソウ・ビジョンドリーム",
};

function localeUrl(lang: Lang, path: string): string {
  if (lang === "ko") return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

export function pageMeta({
  path,
  title,
  description,
  ogTitle,
  lang = "ko",
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  lang?: Lang;
}): Metadata {
  const url = localeUrl(lang, path);
  const socialTitle = ogTitle ?? `${title} | ${BRAND[lang]}`;
  return {
    // 한국어는 layout의 title template(한국어 브랜드) 사용, 영어·일본어는 브랜드까지 해당 언어로 고정
    title: lang === "ko" ? title : { absolute: `${title} | ${BRAND[lang]}` },
    description,
    alternates: {
      canonical: url,
      languages: {
        "ko-KR": localeUrl("ko", path),
        "en-US": localeUrl("en", path),
        "ja-JP": localeUrl("ja", path),
        "x-default": localeUrl("ko", path),
      },
    },
    openGraph: {
      type: "website",
      locale: OG_LOCALE[lang],
      url,
      siteName: BRAND[lang],
      title: socialTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: ["/og.png"],
    },
  };
}

/** BreadcrumbList JSON-LD (홈 > 현재 페이지). */
export function breadcrumbLd(crumb: { name: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "홈", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: crumb.name, item: `${SITE_URL}${crumb.path}` },
    ],
  };
}
