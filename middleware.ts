/**
 * 보호 경로(/my, /coach, /org, /admin)에 대해 "로그인 여부"만 Edge에서 빠르게 검사.
 * 세션 쿠키(app_session_id)를 JWT 검증하고, 없거나 무효면 /login 으로 리다이렉트.
 * 역할별 접근 강제는 각 대시보드 서버컴포넌트의 requireRole 에서 수행한다(DB 조회 필요).
 */
import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, PROTECTED_PREFIXES } from "@/lib/auth/constants";
import { verifySessionToken } from "@/lib/auth/jwt";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isProtected = PROTECTED_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );
  if (!isProtected) return NextResponse.next();

  const token = req.cookies.get(COOKIE_NAME)?.value;
  const session = await verifySessionToken(token);

  if (!session) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    url.search = `?redirect=${encodeURIComponent(pathname)}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/my/:path*", "/coach/:path*", "/org/:path*", "/admin/:path*"],
};
