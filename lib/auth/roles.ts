/**
 * 역할 정의 + 서버측 역할 가드.
 * 역할값은 앱 public.users.role enum 과 동일: user | admin | team_admin | team_member | coach
 */
import "server-only";
import { redirect } from "next/navigation";
import { getCurrentUser } from "./session";
import type { User, UserRole } from "@/lib/db/schema";

/** 역할별 홈(대시보드) 경로 */
export const ROLE_HOME: Record<UserRole, string> = {
  admin: "/admin",
  team_admin: "/org",
  coach: "/coach",
  team_member: "/my",
  user: "/my",
};

export function roleHome(role: UserRole): string {
  return ROLE_HOME[role] ?? "/my";
}

const LOGIN_PATH = "/login";

/** 로그인 필수. 미로그인 시 /login 으로. 로그인 시 User 반환. */
export async function requireAuth(returnTo?: string): Promise<User> {
  const user = await getCurrentUser();
  if (!user) {
    redirect(`${LOGIN_PATH}${returnTo ? `?redirect=${encodeURIComponent(returnTo)}` : ""}`);
  }
  return user;
}

/** 특정 역할 필수. 미로그인 → /login, 권한부족 → 본인 역할 홈으로. */
export async function requireRole(allowed: UserRole[], returnTo?: string): Promise<User> {
  const user = await requireAuth(returnTo);
  if (!allowed.includes(user.role)) {
    redirect(roleHome(user.role));
  }
  return user;
}
