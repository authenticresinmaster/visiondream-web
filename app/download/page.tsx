import { pageMeta } from "@/lib/seo";
import { DownloadContent } from "@/components/DownloadContent";

export const metadata = pageMeta({
  path: "/download",
  title: "다운로드",
  description:
    "서우 비전드림 설치 안내 — 웹에서 즉시 시작하거나 Android 앱으로 설치하세요. 비전보드·꿈지도 만다라·플래너·습관 트래커·AI 코치를 무료로.",
});

export default function DownloadPage() {
  return <DownloadContent lang="ko" />;
}
