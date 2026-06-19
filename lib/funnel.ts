/**
 * 퍼널 연결: 로그인한 웹 유저(이메일) ↔ 전자책/랜딩 신청자 매칭.
 * 같은 Supabase DB의 ebook/landing 스키마를 이메일로 조회한다.
 */
import "server-only";
import { count, sql } from "drizzle-orm";
import { getDb } from "@/lib/db";
import {
  ebookSubscribers,
  landingSubscribers,
  type EbookSubscriber,
  type LandingSubscriber,
} from "@/lib/db/funnelSchema";

const EBOOK_READER_BASE = process.env.NEXT_PUBLIC_EBOOK_BASE_URL ?? "https://book.visiondream.kr";

export type FunnelStatus = {
  ebook: EbookSubscriber | null;
  landing: LandingSubscriber | null;
  /** 전자책 이어보기 링크 (ebook 구독자일 때만) */
  ebookReadUrl: string | null;
  /** 전자책 신청 이력이 있는가 (ebook 또는 landing) */
  isSubscriber: boolean;
};

/** 이메일로 전자책/랜딩 신청 이력 조회. DB 오류 시 빈 상태로 graceful fallback. */
export async function getFunnelByEmail(email: string | null | undefined): Promise<FunnelStatus> {
  const empty: FunnelStatus = { ebook: null, landing: null, ebookReadUrl: null, isSubscriber: false };
  if (!email) return empty;

  try {
    const db = getDb();
    const normalized = email.trim().toLowerCase();

    const [ebookRows, landingRows] = await Promise.all([
      db
        .select()
        .from(ebookSubscribers)
        .where(sql`lower(${ebookSubscribers.email}) = ${normalized}`)
        .limit(1),
      db
        .select()
        .from(landingSubscribers)
        .where(sql`lower(${landingSubscribers.email}) = ${normalized}`)
        .limit(1),
    ]);

    const ebook = ebookRows[0] ?? null;
    const landing = landingRows[0] ?? null;
    return {
      ebook,
      landing,
      ebookReadUrl: ebook ? `${EBOOK_READER_BASE}/read/${ebook.accessToken}` : null,
      isSubscriber: Boolean(ebook || landing),
    };
  } catch (err) {
    console.warn("[funnel] lookup failed:", err);
    return empty;
  }
}

/** 관리자 퍼널 집계: 전자책/랜딩 신청자 총수. DB 오류 시 0. */
export async function getFunnelTotals(): Promise<{ ebookCount: number; landingCount: number }> {
  try {
    const db = getDb();
    const [[ebook], [landing]] = await Promise.all([
      db.select({ value: count() }).from(ebookSubscribers),
      db.select({ value: count() }).from(landingSubscribers),
    ]);
    return { ebookCount: ebook?.value ?? 0, landingCount: landing?.value ?? 0 };
  } catch (err) {
    console.warn("[funnel] totals failed:", err);
    return { ebookCount: 0, landingCount: 0 };
  }
}
