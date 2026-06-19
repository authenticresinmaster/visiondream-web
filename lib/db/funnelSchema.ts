/**
 * 퍼널 연결용 cross-schema 테이블 (읽기 전용).
 * 동일 Supabase DB의 ebook / landing 스키마를 참조한다.
 * 컬럼명은 ebook-site/vision-landing 의 drizzle/schema.ts 와 1:1 일치해야 한다.
 */
import { boolean, integer, pgSchema, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const ebookSchema = pgSchema("ebook");
export const landingSchema = pgSchema("landing");

/** 전자책(ebook-site) 구독자: accessToken 으로 /read/:token 이어보기 가능 */
export const ebookSubscribers = ebookSchema.table("subscribers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  language: varchar("language", { length: 10 }).default("ko").notNull(),
  accessToken: varchar("accessToken", { length: 64 }).notNull().unique(),
  emailSent: boolean("emailSent").default(false).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

/** 랜딩(vision-landing) 전자책 신청자: 토큰 없음(이름·이메일·전화) */
export const landingSubscribers = landingSchema.table("subscribers", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }).notNull(),
  phone: varchar("phone", { length: 20 }).notNull(),
  emailSent: varchar("emailSent", { length: 16, enum: ["pending", "sent", "failed"] })
    .default("pending")
    .notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type EbookSubscriber = typeof ebookSubscribers.$inferSelect;
export type LandingSubscriber = typeof landingSubscribers.$inferSelect;
