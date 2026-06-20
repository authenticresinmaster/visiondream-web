"use client";

import { useState } from "react";

const TYPES = [
  { value: "team", label: "기관·기업·팀 도입" },
  { value: "coach", label: "강사·코치·컨설턴트" },
  { value: "general", label: "일반 문의" },
];

export function InquiryForm({ defaultType = "team" }: { defaultType?: string }) {
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
      else setErr("제출에 실패했습니다. 잠시 후 다시 시도해주세요.");
    } catch {
      setErr("네트워크 오류가 발생했습니다.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-[#568A35]/20 bg-white p-8 text-center">
        <div className="text-3xl">🌱</div>
        <h3 className="mt-2 text-lg font-bold text-[#1A2332]">문의가 접수되었습니다</h3>
        <p className="mt-1 text-sm text-[#6B7A8D]">
          빠른 시일 내 담당자가 입력하신 이메일로 연락드리겠습니다. 감사합니다.
        </p>
      </div>
    );
  }

  const field = "w-full rounded-xl border border-[#105D9E]/15 px-3.5 py-2.5 text-sm text-[#1A2332] outline-none focus:border-[#105D9E]/50";

  return (
    <form onSubmit={submit} className="rounded-2xl border border-[#105D9E]/10 bg-white p-6 shadow-sm">
      <div className="grid gap-3">
        <div>
          <label className="mb-1 block text-xs font-medium text-[#6B7A8D]">문의 유형</label>
          <select className={field} value={inquiryType} onChange={(e) => setInquiryType(e.target.value)}>
            {TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={field} placeholder="이름 / 담당자명" value={name} onChange={(e) => setName(e.target.value)} />
          <input className={field} placeholder="소속·기관·회사 (선택)" value={org} onChange={(e) => setOrg(e.target.value)} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <input className={field} type="email" required placeholder="이메일 *" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={field} placeholder="연락처 (선택)" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <textarea
          className={`${field} min-h-28`}
          placeholder="도입 규모·인원, 도입 목적, 궁금한 점 등을 자유롭게 적어주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        {err && <p className="text-sm text-[#D14343]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-1 rounded-xl bg-[#105D9E] px-5 py-3 text-sm font-bold text-white transition hover:brightness-110 disabled:opacity-50"
        >
          {busy ? "접수 중…" : "도입 문의 보내기"}
        </button>
        <p className="text-center text-xs text-[#6B7A8D]">접수 후 담당자가 이메일로 연락드립니다.</p>
      </div>
    </form>
  );
}
