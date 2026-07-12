import { VideosIndex } from "@/components/VideosIndex";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ko",
  path: "/videos",
  title: "영상으로 보는 비전드림 — 30초 영상 + 대본",
  description:
    "작심삼일·미라클모닝·꿈 역설계·비전보드까지. 30초 영상과 전체 대본으로 비전드림의 핵심을 빠르게 확인하세요.",
});

export default function VideosPage() {
  return <VideosIndex lang="ko" />;
}

// 예약발행(publishedAt) 게이트 재평가를 위한 ISR — 5분마다 재생성
export const revalidate = 300;
