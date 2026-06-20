"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LOCALES = [
  { code: "ko", label: "KO", prefix: "" },
  { code: "en", label: "EN", prefix: "/en" },
  { code: "ja", label: "JA", prefix: "/ja" },
] as const;

/** 현재 경로를 유지한 채 언어(ko/en/ja)를 전환. ko=prefix 없음, en=/en, ja=/ja */
export function LangSwitch() {
  const pathname = usePathname() || "/";

  // 현재 로케일 prefix 제거 → 공통 base 경로
  let base = pathname;
  if (base === "/en" || base === "/ja") base = "/";
  else if (base.startsWith("/en/")) base = base.slice(3);
  else if (base.startsWith("/ja/")) base = base.slice(3);

  return (
    <div className="flex items-center gap-1 text-xs font-bold text-navy/50">
      {LOCALES.map((l, i) => {
        const href = l.prefix + (base === "/" ? "" : base) || "/";
        const active =
          (l.code === "ko" && !pathname.startsWith("/en") && !pathname.startsWith("/ja")) ||
          (l.code === "en" && pathname.startsWith("/en")) ||
          (l.code === "ja" && pathname.startsWith("/ja"));
        return (
          <span key={l.code} className="flex items-center">
            {i > 0 && <span className="mx-0.5 text-navy/20">·</span>}
            <Link
              href={href}
              className={active ? "text-brand" : "transition hover:text-brand"}
              aria-current={active ? "true" : undefined}
            >
              {l.label}
            </Link>
          </span>
        );
      })}
    </div>
  );
}
