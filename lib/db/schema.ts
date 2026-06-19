/**
 * vision-manager-app 과 동일한 Supabase(public 스키마)를 읽기 위한 Drizzle 스키마 (부분).
 * 컬럼명은 앱(vision-manager-app/drizzle/schema.ts)과 1:1 일치해야 한다.
 * 웹은 이 테이블들을 "읽기" 위주로 사용한다 (세션/역할/구독/팀 대시보드).
 */
import { boolean, integer, pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: varchar("role", { length: 16, enum: ["user", "admin", "team_admin", "team_member", "coach"] })
    .default("user")
    .notNull(),
  approvalStatus: varchar("approvalStatus", { length: 16, enum: ["pending", "approved", "rejected"] })
    .default("approved")
    .notNull(),
  shareSlug: varchar("shareSlug", { length: 32 }).unique(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type UserRole = User["role"];

export const subscriptionPlans = pgTable("subscription_plans", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  nameKo: varchar("nameKo", { length: 100 }).notNull(),
  priceMonthly: integer("priceMonthly").default(0).notNull(),
  priceYearly: integer("priceYearly").default(0).notNull(),
  aiCoachingEnabled: boolean("aiCoachingEnabled").default(false).notNull(),
  teamEnabled: boolean("teamEnabled").default(false).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  sortOrder: integer("sortOrder").default(0).notNull(),
});

export type SubscriptionPlan = typeof subscriptionPlans.$inferSelect;

export const userSubscriptions = pgTable("user_subscriptions", {
  id: serial("id").primaryKey(),
  userId: integer("userId").notNull(),
  planId: integer("planId").notNull(),
  status: varchar("status", { length: 16, enum: ["active", "expired", "cancelled", "pending"] })
    .default("pending")
    .notNull(),
  billingCycle: varchar("billingCycle", { length: 16, enum: ["monthly", "yearly"] })
    .default("monthly")
    .notNull(),
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserSubscription = typeof userSubscriptions.$inferSelect;

export const teams = pgTable("teams", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  inviteCode: varchar("inviteCode", { length: 16 }).notNull().unique(),
  ownerId: integer("ownerId").notNull(),
  maxMembers: integer("maxMembers").default(50).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Team = typeof teams.$inferSelect;

export const teamMembers = pgTable("team_members", {
  id: serial("id").primaryKey(),
  teamId: integer("teamId").notNull(),
  userId: integer("userId").notNull(),
  role: varchar("role", { length: 16, enum: ["admin", "member"] }).default("member").notNull(),
  status: varchar("status", { length: 16, enum: ["pending", "active", "removed"] })
    .default("pending")
    .notNull(),
  joinedAt: timestamp("joinedAt"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type TeamMember = typeof teamMembers.$inferSelect;

export const teamReports = pgTable("team_reports", {
  id: serial("id").primaryKey(),
  teamId: integer("teamId").notNull(),
  userId: integer("userId").notNull(),
  year: integer("year").notNull(),
  week: integer("week").notNull(),
  planCompletionRate: integer("planCompletionRate").default(0).notNull(),
  btaCompletionRate: integer("btaCompletionRate").default(0).notNull(),
  habitCompletionRate: integer("habitCompletionRate").default(0).notNull(),
  completedGoals: integer("completedGoals").default(0).notNull(),
  streak: integer("streak").default(0).notNull(),
  submittedAt: timestamp("submittedAt").defaultNow().notNull(),
});

export type TeamReport = typeof teamReports.$inferSelect;

export const coupons = pgTable("coupons", {
  id: serial("id").primaryKey(),
  code: varchar("code", { length: 32 }).notNull().unique(),
  kind: varchar("kind", { length: 16, enum: ["referral", "promo"] }).default("promo").notNull(),
  ownerUserId: integer("ownerUserId"),
  rewardMonths: integer("rewardMonths").default(1).notNull(),
  referrerRewardMonths: integer("referrerRewardMonths").default(1).notNull(),
  maxUses: integer("maxUses").default(0).notNull(),
  usedCount: integer("usedCount").default(0).notNull(),
  isActive: boolean("isActive").default(true).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Coupon = typeof coupons.$inferSelect;
