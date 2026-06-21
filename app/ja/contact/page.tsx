import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "お問い合わせ — ビジョンドリーム",
  description: "団体・企業・チーム・講師向けのビジョンドリーム導入のお問い合わせ。目的をお知らせいただければ担当者がご連絡します。",
  alternates: { canonical: "https://visiondream.kr/ja/contact" },
};

export default async function JaContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const defaultType = type === "coach" || type === "general" ? type : "team";
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-black leading-tight md:text-4xl">お問い合わせ</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            団体・企業・教会・小グループ、講師・コーチへのビジョンドリーム導入をサポートします。ご記入いただければ担当者がご連絡します。
          </p>
        </div>
      </section>
      <section className="bg-[#F0F7FF] px-5 py-14">
        <div className="mx-auto max-w-xl">
          <InquiryForm defaultType={defaultType} lang="ja" />
        </div>
      </section>
    </PageShell>
  );
}
