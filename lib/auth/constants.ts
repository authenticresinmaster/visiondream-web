/**
 * 앱(vision-manager-app)과 공유하는 인증 상수.
 * COOKIE_NAME 은 shared/const.ts 의 값과 반드시 일치해야 한다.
 */
export const COOKIE_NAME = "app_session_id";

/** 앱 백엔드(소셜/이메일 로그인 처리) 베이스 URL */
export const APP_BASE_URL = process.env.NEXT_PUBLIC_APP_BASE_URL ?? "https://app.visiondream.kr";

/** 웹 사이트 베이스 URL (로그인 후 복귀 대상) */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://visiondream.kr";

/**
 * 소셜 로그인 시작 URL 생성. 로그인 완료 후 웹의 /auth/complete 로 복귀하도록 web_return 전달.
 * (앱 social-oauth.ts 가 web_return 파라미터를 지원해야 함)
 */
export function appLoginUrl(provider: "google" | "kakao", redirectAfter?: string): string {
  const complete = new URL("/auth/complete", SITE_URL);
  if (redirectAfter) complete.searchParams.set("redirect", redirectAfter);
  const login = new URL(`/api/oauth/${provider}/login`, APP_BASE_URL);
  login.searchParams.set("web_return", complete.toString());
  return login.toString();
}

/** 보호 경로 → 허용 역할. 미들웨어는 "로그인 여부"만, 역할은 서버컴포넌트(requireRole)에서 강제. */
export const PROTECTED_PREFIXES = ["/my", "/coach", "/org", "/admin"] as const;
