import type { Post, PostLang } from "./posts";

/**
 * 목록·카드에 보여줄 게시일 문자열.
 *
 * 글이 언제 쓰인 것인지는 독자가 신뢰를 판단하는 첫 단서인데,
 * 목록 카드에는 읽는 시간("6분")만 있고 날짜가 아예 없었다(2026-08-20 수정).
 *
 * `updated`가 있으면 그쪽을 보여준다 — 보강모드로 본문을 크게 고친 글은
 * 원래 발행일보다 수정일이 내용의 최신성을 더 정확히 말해준다.
 *
 * 이 헬퍼를 posts.ts가 아니라 별도 파일에 둔 이유: posts.ts는 매일 아침
 * 자동발행 작업이 직접 편집하는 파일이라, 사람이 쓴 코드를 같이 두면
 * 자동 편집과 충돌하거나 실수로 지워질 수 있다.
 */
export function formatPostDate(post: Pick<Post, "date" | "updated">, lang: PostLang = "ko"): string {
  const raw = post.updated || post.date;
  const [y, m, d] = raw.split("-").map(Number);
  if (!y || !m || !d) return raw;
  if (lang === "en") {
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${MONTHS[m - 1]} ${d}, ${y}`;
  }
  if (lang === "ja") return `${y}年${m}月${d}日`;
  return `${y}. ${m}. ${d}.`;
}

/** 게시일 이후 본문을 고친 적이 있는지(목록에서 '수정됨' 표시용). */
export function isPostUpdated(post: Pick<Post, "date" | "updated">): boolean {
  return Boolean(post.updated && post.updated !== post.date);
}

/** 사람이 읽는 날짜 옆에 붙일 machine-readable 값(<time dateTime>). */
export function postDateISO(post: Pick<Post, "date" | "updated">): string {
  return post.updated || post.date;
}
