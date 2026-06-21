import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { videoSitemap, type Lang } from "@/lib/videos";

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
  const lastMod = new Date("2026-06-21");
  const marketingPaths = [
    "",
    "/features",
    "/method",
    "/pricing",
    "/for-coaches",
    "/for-teams",
    "/blog",
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

  return [...marketing, ...posts];
}
