import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { getApprovedTestimonials } from "@/lib/testimonials";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "성공 사례 — 비전드림",
  description: "비전드림과 함께 비전을 이룬 분들의 진짜 이야기. 당신의 다음 한 걸음에 용기가 되기를.",
  alternates: { canonical: "https://visiondream.kr/stories" },
};

export default async function StoriesPage() {
  const items = await getApprovedTestimonials(60);

  return (
    <PageShell>
      <section className="bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-bold">🌳 함께 성장한 이야기</div>
          <h1 className="text-2xl font-black leading-tight md:text-4xl">비전을 심은 분들의 진짜 이야기</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            포기하지 않고 한 걸음씩 나아간 분들의 사례입니다. 당신의 다음 한 걸음에 용기가 되기를.
          </p>
        </div>
      </section>

      <section className="bg-[#F0F7FF] px-5 py-16">
        <div className="mx-auto max-w-4xl">
          {items.length === 0 ? (
            <p className="text-center text-sm text-[#6B7A8D]">곧 멋진 사례들이 채워질 거예요. 🌱</p>
          ) : (
            <div className="grid gap-5 md:grid-cols-2">
              {items.map((t) => (
                <figure key={t.id} className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
                  {t.goalTitle && (
                    <figcaption className="mb-2 text-xs font-semibold text-[#105D9E]">🎯 {t.goalTitle}</figcaption>
                  )}
                  <blockquote className="whitespace-pre-wrap text-[15px] leading-relaxed text-[#1A2332]">
                    “{t.content}”
                  </blockquote>
                  <p className="mt-4 text-sm font-medium text-[#6B7A8D]">— {t.name ?? "비전드림 회원"}</p>
                </figure>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <a
              href="https://app.visiondream.kr"
              className="inline-block rounded-xl bg-[#105D9E] px-8 py-4 text-lg font-extrabold text-white transition hover:brightness-110"
            >
              나도 시작하기 →
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
