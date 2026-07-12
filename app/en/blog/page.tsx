import Link from "next/link";
import { PageShell, PageHero } from "@/components/PageShell";
import { getAllPosts } from "@/lib/posts";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  lang: "en",
  path: "/blog",
  title: "Blog — Vision, Goal & Habit Insights",
  description:
    "From the Success Formula Success(S)=Belief(B)×Thought(T)×Action(A) to Vision Board creation and habit design. Practical insights that turn your vision into action.",
});

export default function BlogPage() {
  const posts = getAllPosts("en");
  return (
    <PageShell lang="en" crumb={{ name: "Blog", path: "/en/blog" }}>
      <PageHero
        badge="BLOG"
        title="Insights that turn vision into action"
        sub="From the Success Formula and Vision Board to habit design, articles that support your daily practice."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/en/blog/${p.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-[#fafbfc] transition hover:border-brand/30 hover:shadow-md"
            >
              {p.cover ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.cover} alt={p.title} className="aspect-[2/1] w-full object-cover" />
              ) : (
                <div className="flex aspect-[2/1] w-full items-center justify-center bg-gradient-to-br from-[#0e2746] to-[#105d9e] text-5xl">
                  {p.emoji}
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-2 text-xs font-bold text-brand">
                <span className="rounded-full bg-brand/10 px-2.5 py-1">{p.category}</span>
                <span className="text-navy/40">· {p.readMinutes} min</span>
              </div>
              <h2 className="mt-3 text-lg font-extrabold leading-snug text-navy group-hover:text-brand">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.description}</p>
              <span className="mt-4 text-sm font-bold text-brand">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

// 예약발행(publishedAt) 게이트 재평가를 위한 ISR — 5분마다 재생성
export const revalidate = 300;
