import type { Metadata } from "next";

/**
 * 페이지별 메타데이터 헬퍼.
 * 진단에서 만점이던 항목(메타태그·OG태그·canonical)이 홈뿐 아니라
 * 모든 하위 페이지에서도 올바르게 출력되도록 일관 적용합니다.
 * (layout의 전역 OG/canonical은 홈 고정이라, 하위 페이지는 이 헬퍼로 override)
 */

export const SITE_URL = "https://visiondream.kr";

const OG_IMAGE = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "서우 비전드림 — 비전을 심으면, 반드시 열매가 열립니다",
};

export function pageMeta({
  path,
  title,
  description,
  ogTitle,
}: {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
}): Metadata {
  const socialTitle = ogTitle ?? `${title} | 서우 비전드림`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: path,
      siteName: "서우 비전드림",
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

/** BreadcrumbList JSON-LD (홈 > 현재 페이지). 권장 스키마 항목 충족. */
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
