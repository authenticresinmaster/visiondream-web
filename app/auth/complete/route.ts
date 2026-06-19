/**
 * 소셜 로그인 완료 후 앱이 web_return 으로 보내는 복귀 지점.
 * 이 시점엔 쿠키(app_session_id)가 .visiondream.kr 에 심겨 있으므로,
 * 세션을 읽어 역할별 대시보드(또는 요청된 redirect)로 보낸다.
 */
import { NextResponse, type NextRequest } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { roleHome } from "@/lib/auth/roles";
import { SITE_URL } from "@/lib/auth/constants";

export const dynamic = "force-dynamic";

function safeRedirect(target: string | null): string | null {
  if (!target) return null;
  // 오픈 리다이렉트 방지: 같은 사이트 내부 경로만 허용
  if (target.startsWith("/") && !target.startsWith("//")) return target;
  return null;
}

export async function GET(req: NextRequest) {
  const requested = safeRedirect(req.nextUrl.searchParams.get("redirect"));
  const user = await getCurrentUser();

  // 로그인 실패(쿠키 없음/무효) → 로그인 페이지로
  if (!user) {
    return NextResponse.redirect(new URL("/login", SITE_URL));
  }

  const dest = requested ?? roleHome(user.role);
  return NextResponse.redirect(new URL(dest, SITE_URL));
}
