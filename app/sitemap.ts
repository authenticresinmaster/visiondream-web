import type { MetadataRoute } from "next";
import { getAllPosts, langsForPost } from "@/lib/posts";
import { videoSitemap, videosFor, langsForSlug, type Lang } from "@/lib/videos";

const SITE = "https://visiondream.kr";
const LANGS = ["ko", "en", "ja"] as const;

/**
 * 크롤 예산 집중 (2026-07-23) — 색인률이 회복될 때까지 사이트맵을 줄인다.
 *
 * 실측: 사이트맵 334 URL 중 144개(43%)가 영상 상세인데, 고유 텍스트는 Shorts 대본 150~200자뿐.
 * 구간별 색인률 static/ko 100% > blog/en 58% > blog/ko 35% > blog/ja·video/ko 25% > video/ja 0%.
 * 신규 URL 대부분이 "발견됨 - 크롤 안 함"에 머물렀다 = 크롤 예산이 얇은 URL로 분산되고 있다.
 *
 * → 영상 상세는 **한국어만** 사이트맵에 남긴다(en/ja 96개 제외).
 *   deindex가 아니다. 페이지·내부링크·hreflang은 그대로고 사이트맵 우선순위에서만 빠진다.
 *   색인률 60% 회복 시 이 배열에 "en","ja"를 되돌려 재등록한다.
 */
const SITEMAP_VIDEO_LANGS: readonly Lang[] = ["ko"];

/** 로케일별 절대 URL (ko=prefix 없음) */
function langUrl(lang: string, path: string): string {
  if (lang === "ko") return `${SITE}${path}`;
  return `${SITE}/${lang}${path === "" ? "" : path}`;
}

/** hreflang 대체 언어 매핑 (3개 언어 모두 존재하는 마케팅 페이지용) */
function altLanguages(path: string) {
  return {
    ko: langUrl("ko", path),
    en: langUrl("en", path),
    ja: langUrl("ja", path),
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const koPosts = getAllPosts("ko");
  // 사이트가 실제로 갱신된 시점 = 최신 글 발행일. 고정 날짜를 박아두면 lastmod가 거짓 신호가 된다.
  const lastMod = new Date(koPosts[0]?.date ?? "2026-07-06");
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
      // 홈 항목에 동영상 사이트맵 첨부 → 구글 동영상 색인 가속(사이트맵 대상 언어만)
      ...(path === "" && SITEMAP_VIDEO_LANGS.includes(lang as Lang)
        ? { videos: videoSitemap(lang as Lang) }
        : {}),
    })),
  );

  // 블로그 글: 언어별 URL + hreflang(그 글이 실제로 존재하는 언어만)
  const posts: MetadataRoute.Sitemap = LANGS.flatMap((lang) =>
    getAllPosts(lang).map((p) => {
      const path = `/blog/${p.slug}`;
      const languages = Object.fromEntries(
        langsForPost(p.slug).map((l) => [l, langUrl(l, path)]),
      );
      return {
        url: langUrl(lang, path),
        lastModified: new Date(p.updated ?? p.date),
        changeFrequency: "monthly" as const,
        priority: 0.6,
        alternates: { languages },
      };
    }),
  );

  // 영상 상세 페이지: 크롤 예산 집중을 위해 SITEMAP_VIDEO_LANGS만 등록
  const videos: MetadataRoute.Sitemap = SITEMAP_VIDEO_LANGS.flatMap((lang) =>
    videosFor(lang).map((v) => {
      const path = `/videos/${v.slug}`;
      const langs = langsForSlug(v.slug);
      const languages = Object.fromEntries(langs.map((l) => [l, langUrl(l, path)]));
      return {
        url: langUrl(lang, path),
        lastModified: lastMod,
        changeFrequency: "monthly" as const,
        priority: 0.5,
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
