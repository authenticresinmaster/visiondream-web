import { pageMeta } from "@/lib/seo";
import { DownloadContent } from "@/components/DownloadContent";

export const metadata = pageMeta({
  path: "/download",
  lang: "ja",
  title: "ダウンロード",
  description:
    "ソウ・ビジョンドリームを入手 — ウェブですぐ始めるか、Androidアプリをインストール。ビジョンボード・夢の地図曼荼羅・プランナー・習慣トラッカー・AIコーチを無料で。",
});

export default function DownloadPage() {
  return <DownloadContent lang="ja" />;
}
