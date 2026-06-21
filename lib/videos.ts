/**
 * 홈페이지 영상 목록 — 언어별(ko/en/ja). 로컬 MP4(/public/videos) 또는 유튜브 지원.
 * 영상 추가: 해당 언어 배열에 한 줄 (local: public/videos에 파일, youtube: 영상 id).
 */
export type VideoItem =
  | { kind: "local"; src: string; poster?: string; title: string; sub?: string }
  | { kind: "youtube"; id: string; title: string; sub?: string };

export type Lang = "ko" | "en" | "ja";

export const VIDEOS_BY_LANG: Record<Lang, VideoItem[]> = {
  ko: [
    { kind: "local", src: "/videos/habit-ko.mp4", poster: "/videos/habit-ko.jpg", title: "작심삼일, 또?", sub: "의지가 아니라 시스템 — 습관 트래커" },
    { kind: "local", src: "/videos/morning-ko.mp4", poster: "/videos/morning-ko.jpg", title: "미라클모닝, 또 늦잠?", sub: "아침 습관 하나로 — 습관 트래커" },
    { kind: "local", src: "/videos/burnout-ko.mp4", poster: "/videos/burnout-ko.jpg", title: "다 놓고 싶은 날", sub: "작은 한 걸음 — 두려움 해체기" },
  ],
  en: [
    { kind: "local", src: "/videos/habit-en.mp4", poster: "/videos/habit-en.jpg", title: "Quit again?", sub: "Not willpower — a system" },
    { kind: "local", src: "/videos/morning-en.mp4", poster: "/videos/morning-en.jpg", title: "Slept through it?", sub: "One tiny morning habit" },
  ],
  ja: [
    { kind: "local", src: "/videos/habit-ja.mp4", poster: "/videos/habit-ja.jpg", title: "また三日坊主?", sub: "意志じゃなくシステム" },
    { kind: "local", src: "/videos/morning-ja.mp4", poster: "/videos/morning-ja.jpg", title: "また寝坊?", sub: "朝の習慣ひとつ" },
  ],
};

export function videosFor(lang: Lang): VideoItem[] {
  return VIDEOS_BY_LANG[lang] ?? VIDEOS_BY_LANG.ko;
}

/** 하위호환: 기존 한국어 홈 import */
export const HOME_VIDEOS: VideoItem[] = VIDEOS_BY_LANG.ko;
