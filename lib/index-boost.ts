/**
 * 색인 부스트 — 아직 색인되지 않은 글로 내부링크를 몰아주는 장치. (2026-07-23)
 *
 * 왜: GSC 전수 감사에서 색인 여부를 가른 변수는 분량도 스키마도 아닌 **참조 링크 수**였다.
 *     색인된 글 refUrls 평균 2.2 / 미색인 글 0.3. 미색인 글 대부분은 구글이 아예 크롤하지도 않았다
 *     ("발견됨 - 현재 색인이 생성되지 않음"). 크롤 예산이 부족한 사이트에선 **어디서 링크되는지**가
 *     크롤 순서를 정한다 → 홈·관련글처럼 실제로 크롤되는 자리에 미색인 글을 올려 보낸다.
 *
 * 데이터: lib/index-status.json — 주간 모니터(vision-index-monitor.ps1)가 GSC 실측으로 갱신.
 *         needsLinks가 비면 이 모듈은 아무 것도 바꾸지 않는다(안전한 no-op).
 */
import status from "./index-status.json";

export type IndexStatus = {
  brand: string;
  updated: string;
  rate: number;
  needsLinks: string[];
};

export const INDEX_STATUS: IndexStatus = {
  brand: status.brand,
  updated: status.updated,
  rate: status.rate,
  needsLinks: Array.isArray(status.needsLinks) ? status.needsLinks : [],
};

const NEEDS = new Set(INDEX_STATUS.needsLinks);

/** 이 글이 아직 색인되지 않아 내부링크가 필요한가 */
export function needsLink(slug: string): boolean {
  return NEEDS.has(slug);
}

/**
 * 링크가 필요한 글을 앞으로 끌어올린다(그 안의 순서는 원래 순서 유지 = 관련도·최신순 보존).
 * 목록 자체는 바꾸지 않으므로, 색인이 회복돼 needsLinks가 비면 원래 정렬로 자동 복귀한다.
 */
export function boostFirst<T extends { slug: string }>(items: T[]): T[] {
  if (!NEEDS.size) return items;
  const need = items.filter((i) => NEEDS.has(i.slug));
  if (!need.length) return items;
  return [...need, ...items.filter((i) => !NEEDS.has(i.slug))];
}
