"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Testimonial } from "@/lib/testimonials";

export function TestimonialModerator({ items }: { items: Testimonial[] }) {
  const router = useRouter();
  const [busy, setBusy] = useState<number | null>(null);

  async function act(id: number, status: "approved" | "rejected") {
    setBusy(id);
    try {
      await fetch("/api/admin/testimonial", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      router.refresh();
    } finally {
      setBusy(null);
    }
  }

  if (items.length === 0) {
    return <p className="text-sm text-[#6B7A8D]">아직 제출된 사례가 없습니다.</p>;
  }

  const badge = (s: string) =>
    s === "approved"
      ? "bg-[#568A35]/10 text-[#568A35]"
      : s === "rejected"
        ? "bg-[#D14343]/10 text-[#D14343]"
        : "bg-[#E0A800]/10 text-[#A9810A]";

  return (
    <div className="space-y-3">
      {items.map((t) => (
        <div key={t.id} className="rounded-xl border border-[#105D9E]/10 p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="font-medium text-[#1A2332]">{t.name ?? "익명"}</span>
            <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${badge(t.status)}`}>
              {t.status === "approved" ? "승인" : t.status === "rejected" ? "거절" : "대기"}
            </span>
          </div>
          {t.goalTitle && <p className="mt-1 text-xs text-[#105D9E]">🎯 {t.goalTitle}</p>}
          <p className="mt-2 whitespace-pre-wrap text-sm text-[#1A2332]">{t.content}</p>
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => act(t.id, "approved")}
              disabled={busy === t.id || t.status === "approved"}
              className="rounded-lg bg-[#568A35] px-3 py-1.5 text-xs font-medium text-white disabled:opacity-40"
            >
              승인
            </button>
            <button
              onClick={() => act(t.id, "rejected")}
              disabled={busy === t.id || t.status === "rejected"}
              className="rounded-lg border border-[#D14343]/30 px-3 py-1.5 text-xs font-medium text-[#D14343] disabled:opacity-40"
            >
              거절
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
