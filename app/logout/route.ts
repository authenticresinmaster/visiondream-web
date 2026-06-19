/**
 * 로그아웃: .visiondream.kr 도메인의 세션 쿠키를 만료시키고 홈으로.
 * (앱과 공유하는 쿠키이므로 도메인을 명시해 제거)
 */
import { NextResponse, type NextRequest } from "next/server";
import { COOKIE_NAME, SITE_URL } from "@/lib/auth/constants";

export const dynamic = "force-dynamic";

function parentDomain(host: string): string | undefined {
  const name = host.split(":")[0];
  const parts = name.split(".");
  if (parts.length < 2) return undefined;
  return "." + parts.slice(-2).join(".");
}

export async function GET(req: NextRequest) {
  const res = NextResponse.redirect(new URL("/", SITE_URL));
  const domain = parentDomain(req.nextUrl.hostname);
  res.cookies.set(COOKIE_NAME, "", {
    domain,
    path: "/",
    httpOnly: true,
    sameSite: "none",
    secure: true,
    maxAge: 0,
  });
  return res;
}
