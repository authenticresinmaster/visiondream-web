/**
 * 홈페이지 영상 목록. 로컬 MP4(/public/videos) 또는 유튜브 둘 다 지원.
 * 영상 추가: 아래 배열에 한 줄 추가 (local: public/videos에 파일, youtube: 영상 id).
 */
export type VideoItem =
  | { kind: "local"; src: string; poster?: string; title: string; sub?: string }
  | { kind: "youtube"; id: string; title: string; sub?: string };

export const HOME_VIDEOS: VideoItem[] = [
  {
    kind: "local",
    src: "/videos/habit-ko.mp4",
    poster: "/videos/habit-ko.jpg",
    title: "작심삼일, 또?",
    sub: "의지가 아니라 시스템 — 습관 트래커",
  },
  // 예시) 유튜브 Shorts 발행 후:
  // { kind: "youtube", id: "VIDEO_ID", title: "미라클모닝", sub: "..." },
];
