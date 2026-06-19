/**
 * 서버 전용 세션 헬퍼. 쿠키(app_session_id) → JWT 검증 → public.users 조회.
 * 서버 컴포넌트 / route handler 에서만 사용.
 */
import "server-only";
import { cookies } from "next/headers";
import { eq } from "drizzle-orm";
import { COOKIE_NAME } from "./constants";
import { verifySessionToken } from "./jwt";
import { getDb, schema } from "@/lib/db";
import type { User } from "@/lib/db/schema";

/** 현재 세션의 openId (검증 통과 시) */
export async function getSessionOpenId(): Promise<string | null> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  const payload = await verifySessionToken(token);
  return payload?.openId ?? null;
}

/** 현재 로그인 사용자(public.users row). 미로그인/미동기화 시 null. */
export async function getCurrentUser(): Promise<User | null> {
  const openId = await getSessionOpenId();
  if (!openId) return null;
  const db = getDb();
  const rows = await db.select().from(schema.users).where(eq(schema.users.openId, openId)).limit(1);
  return rows[0] ?? null;
}
