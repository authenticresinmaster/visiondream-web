import { pageMeta } from "@/lib/seo";
import { DownloadContent } from "@/components/DownloadContent";

export const metadata = pageMeta({
  path: "/download",
  lang: "en",
  title: "Download",
  description:
    "Get Seowoo Vision Dream — start instantly on the web or install the Android app. Vision board, dream map mandala, planner, habit tracker, and AI coach for free.",
});

export default function DownloadPage() {
  return <DownloadContent lang="en" />;
}
