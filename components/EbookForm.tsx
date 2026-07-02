"use client";

import { useState } from "react";

export function EbookForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMsg("올바른 이메일을 입력해주세요.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setMsg("신청 완료! 이메일로 전자책 링크를 보내드렸어요 📚");
    } catch {
      setStatus("error");
      setMsg("잠시 후 다시 시도해주세요.");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl bg-white/10 p-6 text-center">
        <p className="text-lg font-bold text-white">🎉 {msg}</p>
        <a href="https://expo.dev/artifacts/eas/d79Upge-z81nwLBm7RMcnkmluR0fou0w77Nt_Z6eRao.apk" className="mt-4 inline-block rounded-full bg-amber px-6 py-3 font-extrabold text-navy">
          앱 바로 시작하기 →
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="flex w-full max-w-md flex-col gap-3">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="이름 (선택)"
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-amber"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="이메일 주소"
        required
        className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none focus:border-amber"
      />
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-xl bg-amber px-6 py-3.5 text-base font-extrabold text-navy transition hover:brightness-105 disabled:opacity-60"
      >
        {status === "loading" ? "신청 중..." : "📚 무료 전자책 받기"}
      </button>
      {status === "error" && <p className="text-sm text-amber">{msg}</p>}
      <p className="text-center text-xs text-white/50">언제든 구독 취소 가능 · 스팸 없음</p>
    </form>
  );
}
