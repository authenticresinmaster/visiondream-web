import Link from "next/link";
import { PageShell, PageHero } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { videosFor, videoHref, videosIndexHref, videosJsonLd, type Lang } from "@/lib/videos";

const T: Record<Lang, { badge: string; title: string; sub: string; watch: string }> = {
  ko: {
    badge: "VIDEOS",
    title: "영상으로 보는 비전드림",
    sub: "30초면 충분해요. 영상마다 대본도 함께 읽을 수 있습니다.",
    watch: "영상·대본 보기 →",
  },
  en: {
    badge: "VIDEOS",
    title: "VisionDream in 30 seconds",
    sub: "Short clips with full transcripts you can read alongside each video.",
    watch: "Watch & read →",
  },
  ja: {
    badge: "VIDEOS",
    title: "動画で見るビジョンドリーム",
    sub: "30秒で十分。各動画には台本も一緒に読めます。",
    watch: "動画・台本を見る →",
  },
};

export function VideosIndex({ lang }: { lang: Lang }) {
  const t = T[lang];
  const videos = videosFor(lang);

  return (
    <PageShell lang={lang} crumb={{ name: t.title, path: videosIndexHref(lang) }}>
      <JsonLd data={videosJsonLd(lang)} />
      <PageHero badge={t.badge} title={t.title} sub={t.sub} />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <Link
              key={v.slug}
              href={videoHref(lang, v.slug)}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-[#fafbfc] transition hover:border-brand/30 hover:shadow-md"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-black">
                {v.kind === "youtube" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={v.poster ?? ""}
                    alt={v.title}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                )}
                <span className="absolute inset-0 flex items-center justify-center text-5xl text-white/90 drop-shadow">▶</span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="text-base font-extrabold leading-snug text-navy group-hover:text-brand">{v.title}</h2>
                {v.sub && <p className="mt-1 flex-1 text-sm text-navy/55">{v.sub}</p>}
                <span className="mt-3 text-sm font-bold text-brand">{t.watch}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
