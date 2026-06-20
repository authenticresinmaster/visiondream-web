import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "도입 문의 — 비전드림",
  description: "기관·기업·팀·강사를 위한 비전드림 도입 문의. 도입 규모와 목적을 남겨주시면 담당자가 연락드립니다.",
  alternates: { canonical: "https://visiondream.kr/contact" },
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>;
}) {
  const { type } = await searchParams;
  const defaultType = type === "coach" || type === "general" ? type : "team";
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-black leading-tight md:text-4xl">도입 문의</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            기관·기업·교회·소그룹, 강사·코치를 위한 비전드림 도입을 도와드립니다. 남겨주시면 담당자가 직접 연락드립니다.
          </p>
        </div>
      </section>
      <section className="bg-[#F0F7FF] px-5 py-14">
        <div className="mx-auto max-w-xl">
          <InquiryForm defaultType={defaultType} />
        </div>
      </section>
    </PageShell>
  );
}
