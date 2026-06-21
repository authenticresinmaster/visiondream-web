"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Me = { authenticated: boolean; home?: string; name?: string | null };

/**
 * 헤더 인증 영역. 정적 페이지를 유지한 채 클라이언트에서 세션을 조회해
 * 로그인 상태면 "내 대시보드", 아니면 "로그인" 링크를 표시한다.
 */
export function AuthNav() {
  const [me, setMe] = useState<Me | null>(null);

  useEffect(() => {
    let alive = true;
    fetch("/api/me", { cache: "no-store" })
      .then((r) => r.json())
      .then((d) => alive && setMe(d))
      .catch(() => alive && setMe({ authenticated: false }));
    return () => {
      alive = false;
    };
  }, []);

  // 로딩 중엔 버튼 크기만큼 자리 차지(깜빡임/레이아웃 점프 방지)
  if (me === null) return <span className="inline-block h-9 w-[68px]" aria-hidden />;

  if (me.authenticated) {
    return (
      <Link
        href={me.home ?? "/my"}
        className="rounded-full border border-brand/40 px-4 py-2 text-sm font-bold text-brand transition hover:bg-brand/10"
      >
        내 대시보드
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className="rounded-full border border-brand/40 px-4 py-2 text-sm font-bold text-brand transition hover:bg-brand/10"
    >
      로그인
    </Link>
  );
}
