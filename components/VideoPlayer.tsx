"use client";

import { useRef, useState } from "react";
import type { VideoItem } from "@/lib/videos";

/** 상세 페이지용 단일 영상 플레이어 (세로형 9:16, 중앙 정렬). */
export function VideoPlayer({ video, unmuteLabel = "🔇 탭하면 소리" }: { video: VideoItem; unmuteLabel?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  if (video.kind === "youtube") {
    return (
      <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl bg-black shadow-lg">
        <iframe
          src={`https://www.youtube.com/embed/${video.id}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-[9/16] w-full"
        />
      </div>
    );
  }

  return (
    <div className="relative mx-auto w-full max-w-[300px] overflow-hidden rounded-2xl bg-black shadow-lg">
      <video
        ref={ref}
        src={video.src}
        poster={video.poster}
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
        {muted ? unmuteLabel : "🔊"}
      </button>
    </div>
  );
}
