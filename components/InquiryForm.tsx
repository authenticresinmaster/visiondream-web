"use client";

import { useState } from "react";

type Lang = "ko" | "en" | "ja";

const T: Record<Lang, Record<string, string>> = {
  ko: {
    type: "문의 유형",
    t_team: "기관·기업·팀 도입",
    t_coach: "강사·코치·컨설턴트",
    t_general: "일반 문의",
    name: "이름 / 담당자명",
    org: "소속·기관·회사 (선택)",
    email: "이메일 *",
    phone: "연락처 (선택)",
    message: "도입 규모·인원, 도입 목적, 궁금한 점 등을 자유롭게 적어주세요.",
    submit: "도입 문의 보내기",
    submitting: "접수 중…",
    note: "접수 후 담당자가 이메일로 연락드립니다.",
    doneTitle: "문의가 접수되었습니다",
    doneBody: "빠른 시일 내 담당자가 입력하신 이메일로 연락드리겠습니다. 감사합니다.",
    err: "제출에 실패했습니다. 잠시 후 다시 시도해주세요.",
    neterr: "네트워크 오류가 발생했습니다.",
  },
  en: {
    type: "Inquiry type",
    t_team: "Organization / Company / Team",
    t_coach: "Coach / Consultant",
    t_general: "General inquiry",
    name: "Name / Contact person",
    org: "Organization / Company (optional)",
    email: "Email *",
    phone: "Phone (optional)",
    message: "Tell us your team size, goals, and any questions.",
    submit: "Send inquiry",
    submitting: "Sending…",
    note: "Our team will reply to your email.",
    doneTitle: "Your inquiry has been received",
    doneBody: "We'll get back to you at the email you provided. Thank you.",
    err: "Submission failed. Please try again shortly.",
    neterr: "A network error occurred.",
  },
  ja: {
    type: "お問い合わせ種類",
    t_team: "団体・企業・チーム導入",
    t_coach: "講師・コーチ・コンサルタント",
    t_general: "一般のお問い合わせ",
    name: "お名前 / 担当者名",
    org: "所属・団体・会社（任意）",
    email: "メール *",
    phone: "連絡先（任意）",
    message: "導入規模・人数、目的、ご質問などを自由にご記入ください。",
    submit: "お問い合わせを送る",
    submitting: "送信中…",
    note: "受付後、担当者がメールでご連絡します。",
    doneTitle: "お問い合わせを受け付けました",
    doneBody: "ご入力のメールへ担当者よりご連絡いたします。ありがとうございます。",
    err: "送信に失敗しました。しばらくして再度お試しください。",
    neterr: "ネットワークエラーが発生しました。",
  },
};

export function InquiryForm({ defaultType = "team", lang = "ko" }: { defaultType?: string; lang?: Lang }) {
  const t = T[lang] ?? T.ko;
  const TYPES = [
    { value: "team", label: t.t_team },
    { value: "coach", label: t.t_coach },
    { value: "general", label: t.t_general },
  ];

  const [inquiryType, setInquiryType] = useState(defaultType);
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ inquiryType, name, org, email, phone, message }),
      });
      if (res.ok) setDone(true);
      else setErr(t.err);
    } catch {
      setErr(t.neterr);
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-[#568A35]/20 bg-white p-8 text-center">
        <div className="text-3xl">🌱</div>
        <h3 className="mt-2 text-lg font-bold text-[#1A2332]">{t.doneTitle}</h3>
        <p className="mt-1 text-sm text-[#6B7A8D]">{t.doneBody}</p>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-[#105D9E]/15 px-3.5 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#105D9E]/50";

  return (
    <form onSubmit={submit} className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
      <div className="grid gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-[#6B7A8D]">{t.type}</label>
          <select className={field} value={inquiryType} onChange={(e) => setInquiryType(e.target.value)}>
            {TYPES.map((ty) => (
              <option key={ty.value} value={ty.value}>
                {ty.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={field} placeholder={t.name} value={name} onChange={(e) => setName(e.target.value)} />
          <input className={field} placeholder={t.org} value={org} onChange={(e) => setOrg(e.target.value)} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={field} type="email" required placeholder={t.email} value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={field} placeholder={t.phone} value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <textarea className={`${field} min-h-28`} placeholder={t.message} value={message} onChange={(e) => setMessage(e.target.value)} />
        {err && <p className="text-sm text-[#D14343]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-1 rounded-xl bg-[#105D9E] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-50"
        >
          {busy ? t.submitting : t.submit}
        </button>
        <p className="text-center text-xs text-[#6B7A8D]">{t.note}</p>
      </div>
    </form>
  );
}
