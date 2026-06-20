/**
 * 도입 문의(inquiries) — 제출/조회/상태변경. 앱과 동일 DB(public.inquiries).
 * 제출 알림은 앱 스케줄러(notifyNewInquiries)가 처리(Resend/디스코드 설정이 Railway에 있음).
 */
import "server-only";
import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";

export type Inquiry = {
  id: number;
  name: string | null;
  email: string;
  phone: string | null;
  org: string | null;
  inquiryType: string | null;
  message: string | null;
  status: string;
  createdAt: string;
};

export async function createInquiry(input: {
  name?: string;
  email: string;
  phone?: string;
  org?: string;
  inquiryType?: string;
  message?: string;
}): Promise<boolean> {
  try {
    const db = getDb();
    await db.execute(sql`
      insert into public.inquiries (name, email, phone, org, inquiry_type, message)
      values (${input.name ?? null}, ${input.email.trim().toLowerCase()}, ${input.phone ?? null},
              ${input.org ?? null}, ${input.inquiryType ?? "general"}, ${input.message ?? null})`);
    return true;
  } catch (err) {
    console.error("[inquiries] create failed:", err);
    return false;
  }
}

export async function listInquiries(status?: string, limit = 100): Promise<Inquiry[]> {
  try {
    const db = getDb();
    const rows = status
      ? await db.execute(sql`select id, name, email, phone, org, inquiry_type as "inquiryType", message, status, created_at as "createdAt" from public.inquiries where status=${status} order by created_at desc limit ${limit}`)
      : await db.execute(sql`select id, name, email, phone, org, inquiry_type as "inquiryType", message, status, created_at as "createdAt" from public.inquiries order by created_at desc limit ${limit}`);
    return rows as unknown as Inquiry[];
  } catch (err) {
    console.warn("[inquiries] list failed:", err);
    return [];
  }
}

export async function setInquiryStatus(id: number, status: "new" | "contacted" | "closed"): Promise<boolean> {
  try {
    const db = getDb();
    await db.execute(sql`update public.inquiries set status=${status} where id=${id}`);
    return true;
  } catch (err) {
    console.warn("[inquiries] setStatus failed:", err);
    return false;
  }
}
