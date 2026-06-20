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

  // 로딩 중엔 자리만 차지(깜빡임/오표시 방지)
  if (me === null) return <span className="w-14" aria-hidden />;

  if (me.authenticated) {
    return (
      <Link
        href={me.home ?? "/my"}
        className="text-sm font-semibold text-navy/70 transition hover:text-brand"
      >
        내 대시보드
      </Link>
    );
  }

  return (
    <Link
      href="/login"
      className="text-sm font-semibold text-navy/70 transition hover:text-brand"
    >
      로그인
    </Link>
  );
}
