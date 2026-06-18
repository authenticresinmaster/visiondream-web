import type { Metadata } from "next";
import Link from "next/link";
import { PageShell, PageHero } from "@/components/PageShell";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "블로그 — 비전·목표·습관 인사이트",
  description:
    "성공법칙 S=BTA, 비전보드 작성법, 습관 설계까지. 비전을 행동으로 잇는 실천 인사이트를 전합니다.",
};

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <PageShell>
      <PageHero
        badge="BLOG"
        title="비전을 행동으로 잇는 인사이트"
        sub="성공법칙·비전보드·습관 설계까지, 매일의 실천을 돕는 글을 전합니다."
      />
      <section className="bg-white px-5 py-16">
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-black/5 bg-[#fafbfc] p-6 transition hover:border-brand/30 hover:shadow-md"
            >
              <div className="text-3xl">{p.emoji}</div>
              <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand">
                <span className="rounded-full bg-brand/10 px-2.5 py-1">{p.category}</span>
                <span className="text-navy/40">· {p.readMinutes}분</span>
              </div>
              <h2 className="mt-3 text-lg font-extrabold leading-snug text-navy group-hover:text-brand">
                {p.title}
              </h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy/60">{p.description}</p>
              <span className="mt-4 text-sm font-bold text-brand">읽기 →</span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
