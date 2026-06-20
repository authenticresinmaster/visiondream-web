"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SEGMENTS: { value: string; label: string }[] = [
  { value: "all", label: "전체 활성 구독자" },
  { value: "leads_no_signup", label: "리드 · 미가입 (리타겟)" },
  { value: "activated_no_sub", label: "활성화 · 미구독 (업그레이드)" },
  { value: "at_risk", label: "이탈위험 · 30일 미접속 (윈백)" },
  { value: "subscribers_all", label: "구독자 전체" },
  { value: "tag", label: "태그 지정" },
];

export function CampaignForm({ initialSegment = "all" }: { initialSegment?: string }) {
  const router = useRouter();
  const [segmentType, setSegmentType] = useState(initialSegment);
  const [tag, setTag] = useState("");
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [bodyHtml, setBodyHtml] = useState("");
  const [contentRef, setContentRef] = useState("");
  const [isAd, setIsAd] = useState(true);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setMsg(null);
    try {
      const res = await fetch("/api/admin/campaign", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, subject, bodyHtml, contentRef, segmentType, tag, isAd }),
      });
      const data = await res.json();
      if (res.ok) {
        setMsg("✅ 예약되었습니다. 앱 스케줄러가 곧 발송합니다.");
        setTitle("");
        setSubject("");
        setBodyHtml("");
        setContentRef("");
        router.refresh();
      } else {
        setMsg(`⚠️ 실패: ${data.error ?? res.status}`);
      }
    } catch {
      setMsg("⚠️ 네트워크 오류");
    } finally {
      setBusy(false);
    }
  }

  const input = "w-full rounded-xl border border-[#105D9E]/15 px-3 py-2 text-sm";

  return (
    <form onSubmit={submit} className="space-y-3">
      <div>
        <label className="text-xs text-[#6B7A8D]">대상 세그먼트</label>
        <select className={input} value={segmentType} onChange={(e) => setSegmentType(e.target.value)}>
          {SEGMENTS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>
      {segmentType === "tag" && (
        <input className={input} placeholder="태그명" value={tag} onChange={(e) => setTag(e.target.value)} />
      )}
      <input className={input} placeholder="캠페인 제목(내부용)" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className={input} placeholder="메일 제목" value={subject} onChange={(e) => setSubject(e.target.value)} />
      <textarea
        className={`${input} min-h-32`}
        placeholder="본문 HTML (예: <p>안녕하세요...</p>)"
        value={bodyHtml}
        onChange={(e) => setBodyHtml(e.target.value)}
      />
      <input
        className={input}
        placeholder="콘텐츠/링크 URL (선택 — 입력 시 디스코드에도 공유)"
        value={contentRef}
        onChange={(e) => setContentRef(e.target.value)}
      />
      <label className="flex items-center gap-2 text-sm text-[#6B7A8D]">
        <input type="checkbox" checked={isAd} onChange={(e) => setIsAd(e.target.checked)} />
        광고성 메일 (제목에 (광고) 표기 — 정보통신망법)
      </label>
      <button
        type="submit"
        disabled={busy}
        className="rounded-xl bg-[#105D9E] px-5 py-2.5 text-sm font-medium text-white disabled:opacity-50"
      >
        {busy ? "예약 중…" : "캠페인 예약 발송"}
      </button>
      {msg && <p className="text-sm text-[#1A2332]">{msg}</p>}
    </form>
  );
}
