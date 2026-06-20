"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Inquiry } from "@/lib/inquiries";

const TYPE_LABEL: Record<string, string> = { team: "기관·팀", coach: "강사·코치", general: "일반" };
const NEXT: Record<string, { label: string; status: "contacted" | "closed" }[]> = {
  new: [{ label: "연락함", status: "contacted" }, { label: "종료", status: "closed" }],
  contacted: [{ label: "종료", status: "closed" }],
  closed: [],
};

export function InquiryManager({ items }: { items: Inquiry[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState<number | null>(null);

  async function setStatus(id: number, status: "contacted" | "closed") {
    setBusy(id);
    try {
      await fetch("/api/admin/inquiry", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  if (items.length === 0) return <p className="text-sm text-[#6B7A8D]">아직 접수된 문의가 없습니다.</p>;

  const badge = (s: string) =>
    s === "new" ? "bg-[#E0A800]/10 text-[#A9810A]" : s === "contacted" ? "bg-[#105D9E]/10 text-[#105D9E]" : "bg-black/5 text-[#6B7A8D]";

  return (
    <div className="space-y-3">
      {items.map((q) => (
        <div key={q.id} className="rounded-xl border border-[#105D9E]/10 p-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-[#105D9E]/10 px-2 py-0.5 text-xs font-medium text-[#105D9E]">
              {TYPE_LABEL[q.inquiryType ?? "general"] ?? "일반"}
            </span>
            <span className="font-semibold text-[#1A2332]">{q.name ?? "이름없음"}</span>
            {q.org && <span className="text-sm text-[#6B7A8D]">· {q.org}</span>}
            <span className={`ml-auto rounded-full px-2 py-0.5 text-xs font-medium ${badge(q.status)}`}>
              {q.status === "new" ? "신규" : q.status === "contacted" ? "연락함" : "종료"}
            </span>
          </div>
          <div className="mt-1 text-xs text-[#6B7A8D]">
            ✉️ {q.email}
            {q.phone ? ` · 📞 ${q.phone}` : ""}
          </div>
          {q.message && <p className="mt-2 whitespace-pre-wrap text-sm text-[#1A2332]">{q.message}</p>}
          <div className="mt-3 flex gap-2">
            {(NEXT[q.status] ?? []).map((n) => (
              <button
                key={n.status}
                onClick={() => setStatus(q.id, n.status)}
                disabled={busy === q.id}
                className="rounded-lg border border-[#105D9E]/30 px-3 py-1.5 text-xs font-medium text-[#105D9E] disabled:opacity-40"
              >
                {n.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
