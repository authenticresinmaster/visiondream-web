import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { videoSitemap, videosFor, langsForSlug, type Lang } from "@/lib/videos";

const SITE = "https://visiondream.kr";
const LANGS = ["ko", "en", "ja"] as const;

/** 로케일별 절대 URL (ko=prefix 없음) */
function langUrl(lang: string, path: string): string {
  if (lang === "ko") return `${SITE}${path}`;
  return `${SITE}/${lang}${path === "" ? "" : path}`;
}

/** hreflang 대체 언어 매핑 */
function altLanguages(path: string) {
  return {
    ko: langUrl("ko", path),
    en: langUrl("en", path),
    ja: langUrl("ja", path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastMod = new Date("2026-07-06");
  const marketingPaths = [
    "",
    "/features",
    "/method",
    "/pricing",
    "/download",
    "/for-coaches",
    "/for-teams",
    "/blog",
    "/videos",
    "/faq",
    "/about",
  ];

  // 마케팅 페이지: 언어별 URL + 각 항목에 hreflang 대체 링크
  const marketing: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    marketingPaths.map((path) => ({
      url: langUrl(lang, path),
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
      alternates: { languages: altLanguages(path) },
      // 홈 항목에 동영상 사이트맵 첨부 → 구글 동영상 색인 가속
      ...(path === "" ? { videos: videoSitemap(lang as Lang) } : {}),
    })),
  );

  // 블로그 글: 언어별 URL + hreflang
  const posts: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    getAllPosts(lang).map((p) => ({
      url: langUrl(lang, `/blog/${p.slug}`),
      lastModified: new Date(p.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: altLanguages(`/blog/${p.slug}`) },
    })),
  );

  // 영상 상세 페이지: 언어별 URL + 해당 슬러그를 가진 언어만 hreflang 대체
  const videos: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    videosFor(lang as Lang).map((v) => {
      const path = `/videos/${v.slug}`;
      const langs = langsForSlug(v.slug);
      const languages = Object.fromEntries(langs.map((l) => [l, langUrl(l, path)]));
      return {
        url: langUrl(lang, path),
        lastModified: lastMod,
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages },
      };
    }),
  );

  // 성공 사례(한국어 전용 페이지)
  const stories: MetadataRoute.Sitemap = [
    {
      url: `${SITE}/stories`,
      lastModified: lastMod,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  return [...marketing, ...stories, ...posts, ...videos];
}

// 예약발행(publishedAt) 게이트 재평가를 위한 ISR — 5분마다 재생성
export const revalidate = 300;
