"use client";

import { useRef, useState } from "react";
import type { VideoItem } from "@/lib/videos";

function LocalCard({ v }: { v: Extract<VideoItem, { kind: "local" }> }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  return (
    <figure className="group relative w-[230px] shrink-0 overflow-hidden rounded-2xl bg-black shadow-md">
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
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white">
        <p className="text-sm font-bold">{v.title}</p>
        {v.sub && <p className="text-xs text-white/75">{v.sub}</p>}
      </figcaption>
    </figure>
  );
}

function YouTubeCard({ v }: { v: Extract<VideoItem, { kind: "youtube" }> }) {
  return (
    <figure className="w-[230px] shrink-0 overflow-hidden rounded-2xl bg-black shadow-md">
      <iframe
        src={`https://www.youtube.com/embed/${v.id}`}
        title={v.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="aspect-[9/16] w-full"
      />
      <figcaption className="p-2 text-center">
        <p className="text-sm font-bold text-navy">{v.title}</p>
        {v.sub && <p className="text-xs text-navy/60">{v.sub}</p>}
      </figcaption>
    </figure>
  );
}

export function VideoGallery({ videos, transcriptLabel = "대본 보기" }: { videos: VideoItem[]; transcriptLabel?: string }) {
  if (videos.length === 0) return null;
  const withText = videos.filter((v) => v.transcript);
  return (
    <>
      <div className="overflow-x-auto pb-2">
        <div className="mx-auto flex w-max gap-4 px-5">
          {videos.map((v, i) =>
            v.kind === "youtube" ? <YouTubeCard key={i} v={v} /> : <LocalCard key={i} v={v} />,
          )}
        </div>
      </div>

      {/* 대본(transcript) — 검색엔진 색인용. 접이식이지만 DOM에 포함되어 검색 노출. */}
      {withText.length > 0 && (
        <div className="mx-auto mt-8 max-w-2xl space-y-2">
          {withText.map((v, i) => (
            <details key={i} className="rounded-xl border border-black/5 bg-[#fafbfc] px-4 py-3">
              <summary className="cursor-pointer text-sm font-semibold text-navy">📝 {v.title} — {transcriptLabel}</summary>
              <p className="mt-2 text-sm leading-relaxed text-navy/70">{v.transcript}</p>
            </details>
          ))}
        </div>
      )}
    </>
  );
}
