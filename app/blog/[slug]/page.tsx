import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { PageShell } from "@/components/PageShell";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

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

  const others = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 2);
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
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
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

          {others.length > 0 && (
            <div className="mt-14">
              <h2 className="text-lg font-black text-navy">다른 글</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {others.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="rounded-2xl border border-black/5 bg-[#fafbfc] p-5 transition hover:border-brand/30"
                  >
                    <div className="text-2xl">{p.emoji}</div>
                    <h3 className="mt-2 text-base font-extrabold leading-snug text-navy">{p.title}</h3>
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
