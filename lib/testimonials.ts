/**
 * 고객 성공 사례(테스티모니얼) 조회/관리 — 앱과 동일 DB(public.testimonials).
 */
import "server-only";
import { sql } from "drizzle-orm";
import { getDb } from "@/lib/db";

export type Testimonial = {
  id: number;
  name: string | null;
  content: string;
  goalTitle: string | null;
  status: string;
  createdAt: string;
};

export async function getApprovedTestimonials(limit = 20): Promise<Testimonial[]> {
  try {
    const db = getDb();
    const rows = await db.execute(sql`
      select id, name, content, goal_title as "goalTitle", status, created_at as "createdAt"
      from public.testimonials where status='approved'
      order by approved_at desc nulls last, created_at desc limit ${limit}`);
    return rows as unknown as Testimonial[];
  } catch (err) {
    console.warn("[testimonials] approved failed:", err);
    return [];
  }
}

export async function getTestimonials(status?: string, limit = 100): Promise<Testimonial[]> {
  try {
    const db = getDb();
    const rows = status
      ? await db.execute(sql`select id, name, content, goal_title as "goalTitle", status, created_at as "createdAt" from public.testimonials where status=${status} order by created_at desc limit ${limit}`)
      : await db.execute(sql`select id, name, content, goal_title as "goalTitle", status, created_at as "createdAt" from public.testimonials order by created_at desc limit ${limit}`);
    return rows as unknown as Testimonial[];
  } catch (err) {
    console.warn("[testimonials] list failed:", err);
    return [];
  }
}

export async function setTestimonialStatus(id: number, status: "approved" | "rejected"): Promise<boolean> {
  try {
    const db = getDb();
    await db.execute(
      sql`update public.testimonials set status=${status}, approved_at=${status === "approved" ? sql`now()` : sql`null`} where id=${id}`,
    );
    return true;
  } catch (err) {
    console.warn("[testimonials] setStatus failed:", err);
    return false;
  }
}
