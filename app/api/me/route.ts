/**
 * 현재 세션 상태 조회 (헤더 AuthNav 용).
 * 쿠키(app_session_id) 기반이라 동적. 로그인 시 역할별 대시보드 경로를 반환.
 */
import { getCurrentUser } from "@/lib/auth/session";
import { roleHome } from "@/lib/auth/roles";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const user = await getCurrentUser();
    if (!user) return Response.json({ authenticated: false });
    return Response.json({
      authenticated: true,
      home: roleHome(user.role),
      name: user.name ?? null,
      role: user.role,
    });
  } catch {
    return Response.json({ authenticated: false });
  }
}
