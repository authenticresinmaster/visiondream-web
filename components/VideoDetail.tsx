import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { JsonLd } from "@/components/JsonLd";
import { VideoPlayer } from "@/components/VideoPlayer";
import {
  videoObjectLd,
  videoHref,
  videosIndexHref,
  type Lang,
  type VideoItem,
} from "@/lib/videos";

const T: Record<
  Lang,
  {
    back: string; caption: string; unmute: string; transcript: string;
    ctaLine: string; ctaBtn: string; more: string;
  }
> = {
  ko: {
    back: "← 영상 모아보기",
    caption: "탭하면 소리가 켜집니다.",
    unmute: "🔇 탭하면 소리",
    transcript: "대본",
    ctaLine: "비전을 심으면, 반드시 열매가 열립니다 🌱",
    ctaBtn: "앱으로 실천 시작 →",
    more: "다른 영상",
  },
  en: {
    back: "← All videos",
    caption: "Tap the video to unmute.",
    unmute: "🔇 tap for sound",
    transcript: "Transcript",
    ctaLine: "Plant your vision, and the fruit will surely come 🌱",
    ctaBtn: "Start in the app →",
    more: "More videos",
  },
  ja: {
    back: "← 動画一覧",
    caption: "タップで音が出ます。",
    unmute: "🔇 タップで音",
    transcript: "台本・字幕",
    ctaLine: "ビジョンを植えれば、必ず実がなります 🌱",
    ctaBtn: "アプリで実践を始める →",
    more: "ほかの動画",
  },
};

const APP_URL = "https://app.visiondream.kr";

export function VideoDetail({
  video,
  lang,
  related,
}: {
  video: VideoItem;
  lang: Lang;
  related: VideoItem[];
}) {
  const t = T[lang];

  return (
    <PageShell lang={lang} crumb={{ name: video.title, path: videoHref(lang, video.slug) }}>
      <JsonLd data={videoObjectLd(video, lang, { includeTranscript: true })} />
      <article className="bg-white px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <Link href={videosIndexHref(lang)} className="text-sm font-bold text-brand hover:underline">
            {t.back}
          </Link>

          <h1 className="mt-6 text-2xl font-black leading-tight text-navy md:text-3xl">{video.title}</h1>
          {video.sub && <p className="mt-3 text-base text-navy/60">{video.sub}</p>}

          <div className="mt-8">
            <VideoPlayer video={video} unmuteLabel={t.unmute} />
            <p className="mt-3 text-center text-xs text-navy/40">{t.caption}</p>
          </div>

          {video.transcript && (
            <section className="mt-12">
              <h2 className="text-xl font-black text-navy">📝 {t.transcript}</h2>
              <p className="mt-4 whitespace-pre-line text-base leading-loose text-navy/75">
                {video.transcript}
              </p>
            </section>
          )}

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-8 text-center text-white">
            <p className="text-lg font-bold text-gold">{t.ctaLine}</p>
            <a href={APP_URL} className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy">
              {t.ctaBtn}
            </a>
          </div>

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-lg font-black text-navy">{t.more}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {related.map((v) => (
                  <Link
                    key={v.slug}
                    href={videoHref(lang, v.slug)}
                    className="group flex items-center gap-3 rounded-2xl border border-black/5 bg-[#fafbfc] p-3 transition hover:border-brand/30"
                  >
                    {v.kind === "youtube" && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`}
                        alt={v.title}
                        className="h-16 w-12 shrink-0 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <h3 className="text-sm font-extrabold leading-snug text-navy group-hover:text-brand">{v.title}</h3>
                      {v.sub && <p className="mt-0.5 text-xs text-navy/50">{v.sub}</p>}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </PageShell>
  );
}
