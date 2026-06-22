"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { videoHref, type Lang, type VideoItem } from "@/lib/videos";

function LocalCard({ v, lang, watchLabel }: { v: Extract<VideoItem, { kind: "local" }>; lang: Lang; watchLabel: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <figure className="group flex w-[230px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="relative overflow-hidden bg-black">
        <video
          ref={ref}
          src={v.src}
          poster={v.poster}
          muted={muted}
          loop
          autoPlay
          playsInline
          className="aspect-[9/16] w-full object-cover"
          onClick={() => {
            const el = ref.current;
            if (!el) return;
            setMuted((m) => !m);
            el.muted = !el.muted;
            el.play().catch(() => {});
          }}
        />
        <button
          type="button"
          onClick={() => {
            const el = ref.current;
            if (!el) return;
            setMuted((m) => !m);
            el.muted = !el.muted;
          }}
          className="absolute right-2 top-2 rounded-full bg-black/50 px-2 py-1 text-xs text-white backdrop-blur"
          aria-label="소리 켜기/끄기"
        >
          {muted ? "🔇 탭하면 소리" : "🔊"}
        </button>
        <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
          <p className="text-sm font-bold">{v.title}</p>
          {v.sub && <p className="text-xs text-white/75">{v.sub}</p>}
        </figcaption>
      </div>
      <Link href={videoHref(lang, v.slug)} className="px-3 py-2.5 text-center text-sm font-bold text-brand hover:underline">
        {watchLabel}
      </Link>
    </figure>
  );
}

function YouTubeCard({ v, lang, watchLabel }: { v: Extract<VideoItem, { kind: "youtube" }>; lang: Lang; watchLabel: string }) {
  return (
    <figure className="flex w-[230px] shrink-0 flex-col overflow-hidden rounded-2xl bg-white shadow-md">
      <div className="overflow-hidden bg-black">
        <iframe
          src={`https://www.youtube.com/embed/${v.id}`}
          title={v.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-[9/16] w-full"
        />
      </div>
      <figcaption className="p-3 text-center">
        <p className="text-sm font-bold text-navy">{v.title}</p>
        {v.sub && <p className="text-xs text-navy/60">{v.sub}</p>}
        <Link href={videoHref(lang, v.slug)} className="mt-2 inline-block text-sm font-bold text-brand hover:underline">
          {watchLabel}
        </Link>
      </figcaption>
    </figure>
  );
}

export function VideoGallery({
  videos,
  lang = "ko",
  watchLabel = "📝 대본 보기 →",
}: {
  videos: VideoItem[];
  lang?: Lang;
  watchLabel?: string;
}) {
  if (videos.length === 0) return null;
  return (
    <div className="overflow-x-auto pb-2">
      <div className="mx-auto flex w-max gap-4 px-5">
        {videos.map((v) =>
          v.kind === "youtube"
            ? <YouTubeCard key={v.slug} v={v} lang={lang} watchLabel={watchLabel} />
            : <LocalCard key={v.slug} v={v} lang={lang} watchLabel={watchLabel} />,
        )}
      </div>
    </div>
  );
}
