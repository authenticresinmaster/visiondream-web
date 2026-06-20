"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function ContactSearch({ initial = "" }: { initial?: string }) {
  const router = useRouter();
  const [email, setEmail] = useState(initial);

  function go(e: React.FormEvent) {
    e.preventDefault();
    const v = email.trim();
    if (v) router.push(`/admin/journey/${encodeURIComponent(v)}`);
  }

  return (
    <form onSubmit={go} className="flex gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="고객 이메일로 여정 조회"
        className="flex-1 rounded-xl border border-[#105D9E]/15 px-3 py-2 text-sm"
      />
      <button type="submit" className="rounded-xl bg-[#105D9E] px-4 py-2 text-sm font-medium text-white">
        조회
      </button>
    </form>
  );
}
