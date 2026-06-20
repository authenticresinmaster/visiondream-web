/**
 * marketing 스키마 (쓰기용, 웹). 앱 vision-manager-app/drizzle/marketingSchema.ts 와 동일 테이블.
 * 웹은 구독자 등록(contacts upsert + welcome enrollment)만 수행하고,
 * 실제 시퀀스 발송은 앱 스케줄러(processDueSequenceEmails)가 같은 테이블을 읽어 처리한다.
 */
import {
  bigint,
  bigserial,
  boolean,
  integer,
  jsonb,
  pgSchema,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const marketing = pgSchema("marketing");
const tz = { withTimezone: true } as const;

export const mktContacts = marketing.table("contacts", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  email: varchar("email", { length: 320 }).notNull().unique(),
  name: varchar("name", { length: 255 }),
  locale: varchar("locale", { length: 10 }).default("ko").notNull(),
  source: varchar("source", { length: 64 }),
  tags: text("tags").array().default([]).notNull(),
  status: varchar("status", {
    length: 16,
    enum: ["active", "unsubscribed", "bounced", "complained"],
  })
    .default("active")
    .notNull(),
  consent: boolean("consent").default(false).notNull(),
  consentAt: timestamp("consent_at", tz),
  unsubscribeToken: varchar("unsubscribe_token", { length: 64 }).notNull().unique(),
  appOpenId: varchar("app_open_id", { length: 64 }),
  createdAt: timestamp("created_at", tz).defaultNow().notNull(),
  updatedAt: timestamp("updated_at", tz).defaultNow().notNull(),
});

export const mktEnrollments = marketing.table("sequence_enrollments", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  contactId: bigint("contact_id", { mode: "number" }).notNull(),
  sequenceKey: varchar("sequence_key", { length: 64 }).notNull(),
  step: integer("step").default(0).notNull(),
  status: varchar("status", { length: 16, enum: ["active", "completed", "cancelled"] })
    .default("active")
    .notNull(),
  nextDueAt: timestamp("next_due_at", tz),
  createdAt: timestamp("created_at", tz).defaultNow().notNull(),
});

export const mktCampaigns = marketing.table("campaigns", {
  id: bigserial("id", { mode: "number" }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  subject: varchar("subject", { length: 255 }).notNull(),
  bodyHtml: text("body_html"),
  contentRef: varchar("content_ref", { length: 255 }),
  segment: jsonb("segment").default({}).notNull(),
  status: varchar("status", { length: 16, enum: ["draft", "scheduled", "sending", "sent"] })
    .default("draft")
    .notNull(),
  scheduledAt: timestamp("scheduled_at", tz),
  sentAt: timestamp("sent_at", tz),
  createdAt: timestamp("created_at", tz).defaultNow().notNull(),
});

export type MktContact = typeof mktContacts.$inferSelect;
export type MktCampaign = typeof mktCampaigns.$inferSelect;
