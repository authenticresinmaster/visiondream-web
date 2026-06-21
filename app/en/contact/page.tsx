import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = {
  title: "Contact — Vision Dream",
  description: "Adoption inquiry for organizations, companies, teams and coaches. Tell us your goals and we'll reach out.",
  alternates: { canonical: "https://visiondream.kr/en/contact" },
};

export default async function EnContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const defaultType = type === "coach" || type === "general" ? type : "team";
  return (
    <PageShell>
      <section className="bg-gradient-to-b from-[#0e2746] to-[#105d9e] px-5 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h1 className="text-2xl font-black leading-tight md:text-4xl">Contact us</h1>
          <p className="mx-auto mt-4 max-w-md text-base text-white/80">
            Bring Vision Dream to your organization, company, church, small group, or coaching practice. Leave your details and our team will reach out.
          </p>
        </div>
      </section>
      <section className="bg-[#F0F7FF] px-5 py-14">
        <div className="mx-auto max-w-xl">
          <InquiryForm defaultType={defaultType} lang="en" />
        </div>
      </section>
    </PageShell>
  );
}
