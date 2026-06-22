import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { VideoDetail } from "@/components/VideoDetail";
import { pageMeta } from "@/lib/seo";
import { videosFor, videoBySlug } from "@/lib/videos";

const LANG = "ja" as const;

export function generateStaticParams() {
  return videosFor(LANG).map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const v = videoBySlug(LANG, slug);
  if (!v) return { title: "動画が見つかりません" };
  return pageMeta({
    lang: LANG,
    path: `/videos/${slug}`,
    title: `${v.title} — ビジョンドリーム動画`,
    description: v.transcript?.slice(0, 150) ?? v.sub ?? v.title,
  });
}

export default async function VideoDetailPageJa({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const video = videoBySlug(LANG, slug);
  if (!video) notFound();
  const related = videosFor(LANG).filter((v) => v.slug !== slug).slice(0, 4);
  return <VideoDetail video={video} lang={LANG} related={related} />;
}
