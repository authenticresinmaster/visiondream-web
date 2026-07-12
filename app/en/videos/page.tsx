import { VideosIndex } from "@/components/VideosIndex";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/videos",
  title: "VisionDream in 30 seconds — short videos + transcripts",
  description:
    "Quit-again habits, miracle mornings, backcasting your dream, vision boards — see the core of VisionDream in 30-second clips with full transcripts.",
});

export default function VideosPageEn() {
  return <VideosIndex lang="en" />;
}

// 예약발행(publishedAt) 게이트 재평가를 위한 ISR — 5분마다 재생성
export const revalidate = 300;
