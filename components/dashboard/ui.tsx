/**
 * 대시보드(로그인 후 업무형) 공용 UI 프리미티브.
 * 공개 웹(브랜드/전환형)과 달리 조용하고 촘촘한 업무 톤을 일관 적용한다.
 */
import Link from "next/link";

type Tone = "default" | "brand" | "good" | "warn" | "danger" | "muted";

const TONE: Record<Tone, string> = {
  default: "bg-[#105D9E]/10 text-[#105D9E]",
  brand: "bg-[#105D9E]/10 text-[#105D9E]",
  good: "bg-[#568A35]/10 text-[#568A35]",
  warn: "bg-[#E0A800]/12 text-[#A9810A]",
  danger: "bg-[#D14343]/10 text-[#D14343]",
  muted: "bg-black/5 text-[#6B7A8D]",
};

/** 상태 배지. 표/카드의 상태 표기에 공통 사용. */
export function Badge({ children, tone = "default" }: { children: React.ReactNode; tone?: Tone }) {
  return (
    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${TONE[tone]}`}>
      {children}
    </span>
  );
}

/** 빈 상태 안내. 데이터가 없을 때 다음 행동을 알려준다. */
export function EmptyState({
  emoji = "🗂️",
  title,
  desc,
  action,
}: {
  emoji?: string;
  title: string;
  desc?: string;
  action?: { href: string; label: string };
}) {
  return (
    <div className="rounded-xl border border-dashed border-[#105D9E]/20 bg-[#F7FAFE] px-6 py-10 text-center">
      <div className="text-3xl" aria-hidden>
        {emoji}
      </div>
      <p className="mt-2 text-sm font-semibold text-[#1A2332]">{title}</p>
      {desc && <p className="mx-auto mt-1 max-w-md text-xs leading-relaxed text-[#6B7A8D]">{desc}</p>}
      {action &&
        (action.href.startsWith("http") ? (
          <a
            href={action.href}
            className="mt-4 inline-block rounded-lg bg-[#105D9E] px-4 py-2 text-xs font-medium text-white transition hover:brightness-110"
          >
            {action.label}
          </a>
        ) : (
          <Link
            href={action.href}
            className="mt-4 inline-block rounded-lg bg-[#105D9E] px-4 py-2 text-xs font-medium text-white transition hover:brightness-110"
          >
            {action.label}
          </Link>
        ))}
    </div>
  );
}

/**
 * 표 가로 스크롤 컨테이너. 넓은 표가 모바일에서 깨지지 않도록 감싼다.
 * 표 자체에는 min-w-[36rem] 등 최소 폭을 줘 스크롤이 동작하게 한다.
 */
export function TableWrap({ children }: { children: React.ReactNode }) {
  return <div className="-mx-2 overflow-x-auto px-2">{children}</div>;
}

export type TodayItem = {
  emoji: string;
  text: string;
  href?: string;
  tone?: Tone;
};

/**
 * 역할별 "오늘 할 일" 패널. 각 대시보드 최상단에 배치.
 * 급한 항목이 없으면 조용한 빈 상태를 보여준다.
 */
export function TodayPanel({ title, items }: { title: string; items: TodayItem[] }) {
  const today = new Date().toLocaleDateString("ko-KR", {
    month: "long",
    day: "numeric",
    weekday: "short",
  });
  return (
    <section className="mb-6 rounded-2xl border border-[#105D9E]/15 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 font-bold text-[#1A2332]">
          <span aria-hidden>📌</span>
          {title}
        </h2>
        <span className="text-xs text-[#6B7A8D]">{today}</span>
      </div>
      {items.length === 0 ? (
        <p className="mt-3 rounded-xl bg-[#F0F7FF] px-4 py-3 text-sm text-[#6B7A8D]">
          오늘 급히 확인할 항목이 없습니다. 좋은 흐름을 유지하고 있어요. 👍
        </p>
      ) : (
        <ul className="mt-3 divide-y divide-[#105D9E]/5">
          {items.map((it, i) => {
            const inner = (
              <span className="flex items-center gap-3 py-2.5">
                <span className="text-lg" aria-hidden>
                  {it.emoji}
                </span>
                <span className="text-sm text-[#1A2332]">{it.text}</span>
                {it.href && <span className="ml-auto text-xs font-medium text-[#105D9E]">확인 →</span>}
              </span>
            );
            return (
              <li key={i}>
                {it.href ? (
                  it.href.startsWith("http") ? (
                    <a href={it.href} className="block rounded-lg px-1 transition hover:bg-[#F0F7FF]">
                      {inner}
                    </a>
                  ) : (
                    <Link href={it.href} className="block rounded-lg px-1 transition hover:bg-[#F0F7FF]">
                      {inner}
                    </Link>
                  )
                ) : (
                  <span className="block px-1">{inner}</span>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
