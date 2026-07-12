import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageShell } from "@/components/PageShell";
import { getAllPosts, getPostBySlug, getAdjacentPosts, getRelatedPosts } from "@/lib/posts";
import { getVideoForPost, videoObjectLd } from "@/lib/post-video";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "글을 찾을 수 없습니다" };
  const url = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url,
      siteName: "서우 비전드림",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: ["/og.png"],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(post.slug);
  const related = getRelatedPosts(post.slug, "ko", 4);
  const SITE = "https://visiondream.kr";

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    author: { "@type": "Organization", name: "서우 비전드림" },
    publisher: { "@type": "Organization", name: "서우 비전드림" },
    mainEntityOfPage: `${SITE}/blog/${post.slug}`,
    ...(post.cover ? { image: `${SITE}${post.cover}` } : {}),
  };
  // 이 글과 같은 주제의 Shorts — 임베드해 글을 두껍게 하고(색인↑), 영상엔 검색 유입을 준다(피드 의존 탈피)
  const video = getVideoForPost(post.slug, "ko");
  const videoLd = video ? videoObjectLd(video, `${SITE}/blog/${post.slug}`, post.date) : null;

  const faqLd = post.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      {videoLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      )}
      <article className="bg-white px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <Link href="/blog" className="text-sm font-bold text-brand hover:underline">
            ← 블로그
          </Link>
          <div className="mt-6 text-4xl">{post.emoji}</div>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand">
            <span className="rounded-full bg-brand/10 px-2.5 py-1">{post.category}</span>
            <span className="text-navy/40">
              {post.date} · {post.readMinutes}분 읽기
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-black leading-tight text-navy md:text-3xl">
            {post.title}
          </h1>

          {post.cover && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={post.cover} alt={post.title} className="mt-6 w-full rounded-2xl" />
          )}

          <div className="prose-vd mt-8">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
          </div>

          {video && video.kind === "youtube" && (
            <div className="mt-12">
              <h2 className="text-xl font-black text-navy">1분 영상으로 보기</h2>
              <div className="mt-5 overflow-hidden rounded-2xl bg-black">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="aspect-[9/16] w-full max-h-[560px]"
                />
              </div>
              {/* 대본을 텍스트로 함께 노출 — 크롤러·AI가 읽을 수 있는 본문이 되어 색인·인용에 기여 */}
              {video.transcript && (
                <details className="mt-4 rounded-2xl border border-black/5 bg-[#fafbfc] p-5">
                  <summary className="cursor-pointer text-sm font-extrabold text-navy">
                    영상 대본 전문
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-navy/70">{video.transcript}</p>
                </details>
              )}
              <Link
                href={`/videos/${video.slug}`}
                className="mt-4 inline-block text-sm font-bold text-brand hover:underline"
              >
                영상 상세 페이지 보기 →
              </Link>
            </div>
          )}

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-black text-navy">자주 묻는 질문</h2>
              <div className="mt-5 space-y-4">
                {post.faq.map((f) => (
                  <div key={f.q} className="rounded-2xl border border-black/5 bg-[#fafbfc] p-5">
                    <h3 className="text-base font-extrabold text-navy">{f.q}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy/70">{f.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 rounded-2xl bg-gradient-to-br from-[#1a2332] to-[#105d9e] p-8 text-center text-white">
            <p className="text-lg font-bold text-gold">비전을 심으면, 반드시 열매가 열립니다 🌱</p>
            <a
              href="https://app.visiondream.kr"
              className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
            >
              앱으로 실천 시작 →
            </a>
          </div>

          {(prev || next) && (
            <nav className="mt-14 grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group rounded-2xl border border-black/5 bg-[#fafbfc] p-5 transition hover:border-brand/30"
                >
                  <span className="text-xs font-bold text-brand">← 이전 글</span>
                  <div className="mt-2 text-2xl">{prev.emoji}</div>
                  <h3 className="mt-1 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{prev.title}</h3>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group rounded-2xl border border-black/5 bg-[#fafbfc] p-5 transition hover:border-brand/30 sm:text-right"
                >
                  <span className="text-xs font-bold text-brand">다음 글 →</span>
                  <div className="mt-2 text-2xl">{next.emoji}</div>
                  <h3 className="mt-1 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{next.title}</h3>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
            </nav>
          )}

          {related.length > 0 && (
            <section className="mt-14">
              <h2 className="text-lg font-extrabold text-navy">관련 글</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex items-start gap-3 rounded-2xl border border-black/5 bg-[#fafbfc] p-4 transition hover:border-brand/30"
                    >
                      <span className="text-2xl">{r.emoji}</span>
                      <span className="text-sm font-bold leading-snug text-navy group-hover:text-brand">{r.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </article>
    </PageShell>
  );
}

// 예약발행(publishedAt) 게이트 재평가를 위한 ISR — 5분마다 재생성
export const revalidate = 300;
