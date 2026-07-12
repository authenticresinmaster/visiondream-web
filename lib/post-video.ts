/**
 * 블로그 글 ↔ 영상 연결 (2026-07-12)
 *
 * 왜: 실측 결과 ① 블로그 글에 영상 임베드가 0건이라 두 자산이 서로를 전혀 돕지 않았고
 *     ② 유튜브 조회의 96%가 Shorts 피드에서만 나와 검색 유입이 2%뿐이었으며
 *     ③ 일부 글(goal-management·okr-goals·reading-for-action)은 구글이 "크롤했으나 색인 거부"했다.
 *     영상을 글에 임베드하면 글은 두꺼워져 색인 확률이 오르고, 영상은 검색·웹에서 새 유입을 얻는다.
 *
 * 슬러그가 정확히 겹치는 13쌍은 자동 매칭되고, 표현만 다른 짝은 아래 별칭표로 잇는다.
 */
import { VIDEOS_BY_LANG, type Lang, type VideoItem } from "./videos";

// 블로그 slug → 영상 slug (슬러그가 다르지만 같은 주제인 짝)
const ALIAS: Record<string, string> = {
  "overcome-laziness": "laziness",
  "godsaeng-routine": "godsaeng",
  "improve-focus": "focus",
  "mindfulness-basics": "mindfulness",
  "deep-work-focus": "deep-work",
  "overcome-perfectionism": "perfectionism",
  "build-self-esteem": "self-esteem",
  "grit-consistency": "grit",
  "bucket-list-how-to": "bucket-list",
  "self-improvement-start": "self-start",
  "affirmations-that-work": "affirmations",
  "smart-goal-setting": "smart-goals",
  "identity-based-habits": "identity-habits",
  "weekly-review-habit": "weekly-review",
  "ai-coach-guide": "ai-coach",
  "motivation-system": "motivation",
  "vision-board-how-to": "vision-board",
  "fear-deconstruction-overcome": "fear-breaker",
  "miracle-morning-system": "morning-habit",
  "beat-three-day-quitting": "habit-tracker",
  "backcasting-goal-setting": "dream-reverse-design",
};

/** 글 slug에 대응하는 영상(없으면 null). 정확 일치 → 별칭 순으로 찾는다. */
export function getVideoForPost(postSlug: string, lang: Lang = "ko"): VideoItem | null {
  const list = VIDEOS_BY_LANG[lang] ?? [];
  const target = ALIAS[postSlug] ?? postSlug;
  return list.find((v) => v.slug === target) ?? null;
}

/** 영상 slug에 대응하는 글 slug(역방향 링크용). */
export function getPostSlugForVideo(videoSlug: string): string | null {
  const hit = Object.entries(ALIAS).find(([, v]) => v === videoSlug);
  return hit ? hit[0] : videoSlug;
}

/** 유튜브 영상의 VideoObject 구조화 데이터 — AI·검색이 영상을 이 페이지의 자산으로 인식하게 한다. */
export function videoObjectLd(video: VideoItem, pageUrl: string, uploadDate: string) {
  if (video.kind !== "youtube") return null;
  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.sub ?? video.title,
    thumbnailUrl: [`https://i.ytimg.com/vi/${video.id}/maxresdefault.jpg`],
    uploadDate,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    contentUrl: `https://youtu.be/${video.id}`,
    ...(video.transcript ? { transcript: video.transcript } : {}),
    mainEntityOfPage: pageUrl,
  };
}
