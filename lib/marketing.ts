/**
 * 웹 구독자 등록: marketing.contacts upsert + welcome 시퀀스 등록.
 * 발송은 앱 스케줄러가 처리(같은 DB). 웹은 행만 만든다.
 */
import "server-only";
import { randomBytes } from "crypto";
import { eq, sql } from "drizzle-orm";
import { getDb } from "@/lib/db";
import { mktContacts, mktEnrollments } from "@/lib/db/marketingSchema";

function newToken(): string {
  return randomBytes(24).toString("hex");
}

export type SubscribeInput = {
  email: string;
  name?: string | null;
  source?: string;
  locale?: string;
  consent?: boolean;
  appOpenId?: string | null;
  /** welcome 드립 시퀀스 자동 시작 여부 (기본 true). 홈은 즉시 전자책 메일을 직접 보내므로 false 권장 */
  enroll?: boolean;
};

/**
 * 구독자 등록(멱등). 신규 active 구독자면 welcome 시퀀스 즉시 시작.
 * DB 오류 시 false 반환(호출부에서 사용자 응답은 별도로 ok 처리).
 */
export async function subscribeContact(
  input: SubscribeInput,
): Promise<{ ok: boolean; contactId?: number; unsubscribeToken?: string }> {
  try {
    const db = getDb();
    const email = input.email.trim().toLowerCase();

    await db
      .insert(mktContacts)
      .values({
        email,
        name: input.name ?? null,
        locale: input.locale ?? "ko",
        source: input.source ?? "home",
        consent: input.consent ?? false,
        consentAt: input.consent ? new Date() : null,
        unsubscribeToken: newToken(),
        appOpenId: input.appOpenId ?? null,
      })
      .onConflictDoUpdate({
        target: mktContacts.email,
        set: {
          name: input.name ?? sql`${mktContacts.name}`,
          appOpenId: input.appOpenId ?? sql`${mktContacts.appOpenId}`,
          updatedAt: new Date(),
        },
      });

    const [row] = await db
      .select({ id: mktContacts.id, status: mktContacts.status, unsubscribeToken: mktContacts.unsubscribeToken })
      .from(mktContacts)
      .where(eq(mktContacts.email, email))
      .limit(1);

    if (!row) return { ok: false };

    if ((input.enroll ?? true) && row.status === "active") {
      // 웹은 신청 즉시 브랜디드 전자책 메일을 직접 발송한다(= welcome 시퀀스의 0일차).
      // 그래서 스토리 널처링은 step 1("모든 걸 잃었던 그날")부터, 24시간 뒤 시작해 중복 발송을 막는다.
      const dayOne = new Date(Date.now() + 24 * 3600_000);
      await db
        .insert(mktEnrollments)
        .values({ contactId: row.id, sequenceKey: "welcome", step: 1, status: "active", nextDueAt: dayOne })
        .onConflictDoNothing();
    }
    return { ok: true, contactId: row.id, unsubscribeToken: row.unsubscribeToken ?? undefined };
  } catch (err) {
    console.warn("[marketing] subscribeContact failed:", err);
    return { ok: false };
  }
}
