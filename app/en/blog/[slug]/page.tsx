import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageShell } from "@/components/PageShell";
import { getAllPosts, getPostBySlug, getAdjacentPosts, getRelatedPosts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return getAllPosts("en").map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) return { title: "Post not found" };
  return pageMeta({
    lang: "en",
    path: `/blog/${slug}`,
    title: post.title,
    description: post.description,
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug, "en");
  if (!post) notFound();

  const { prev, next } = getAdjacentPosts(post.slug, "en");
  const related = getRelatedPosts(post.slug, "en", 4);
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
    <PageShell lang="en">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}
      <article className="bg-white px-5 py-14">
        <div className="mx-auto max-w-2xl">
          <Link href="/en/blog" className="text-sm font-bold text-brand hover:underline">
            ← Blog
          </Link>
          <div className="mt-6 text-4xl">{post.emoji}</div>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand">
            <span className="rounded-full bg-brand/10 px-2.5 py-1">{post.category}</span>
            <span className="text-navy/40">
              {post.date} · {post.readMinutes} min read
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

          {post.faq && post.faq.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xl font-black text-navy">Frequently Asked Questions</h2>
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
            <p className="text-lg font-bold text-gold">Plant a vision, and fruit will surely grow 🌱</p>
            <a
              href="https://app.visiondream.kr"
              className="mt-5 inline-block rounded-xl bg-amber px-7 py-3.5 font-extrabold text-navy"
            >
              Start in the app →
            </a>
          </div>

          {(prev || next) && (
            <nav className="mt-14 grid gap-4 sm:grid-cols-2">
              {prev ? (
                <Link
                  href={`/en/blog/${prev.slug}`}
                  className="group rounded-2xl border border-black/5 bg-[#fafbfc] p-5 transition hover:border-brand/30"
                >
                  <span className="text-xs font-bold text-brand">← Previous</span>
                  <div className="mt-2 text-2xl">{prev.emoji}</div>
                  <h3 className="mt-1 text-base font-extrabold leading-snug text-navy group-hover:text-brand">{prev.title}</h3>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}
              {next ? (
                <Link
                  href={`/en/blog/${next.slug}`}
                  className="group rounded-2xl border border-black/5 bg-[#fafbfc] p-5 transition hover:border-brand/30 sm:text-right"
                >
                  <span className="text-xs font-bold text-brand">Next →</span>
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
              <h2 className="text-lg font-extrabold text-navy">Related posts</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/en/blog/${r.slug}`}
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
