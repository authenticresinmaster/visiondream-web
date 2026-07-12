import { VideosIndex } from "@/components/VideosIndex";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "ja",
  path: "/videos",
  title: "動画で見るビジョンドリーム — 30秒動画+台本",
  description:
    "三日坊主・ミラクルモーニング・夢の逆算設計・ビジョンボードまで。30秒の動画と全文台本でビジョンドリームの核心をすばやく確認できます。",
});

export default function VideosPageJa() {
  return <VideosIndex lang="ja" />;
}

// 예약발행(publishedAt) 게이트 재평가를 위한 ISR — 5분마다 재생성
export const revalidate = 300;
