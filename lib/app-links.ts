/**
 * 앱 설치/시작 링크의 단일 출처.
 * Google Play 출시 승인이 나면 PLAY_STORE_URL 한 줄만 채우면
 * 사이트 전체 CTA(홈·전자책 폼·다운로드 페이지)가 스토어로 일괄 전환된다.
 */
export const PLAY_STORE_URL: string | null = null;
// 출시 후: "https://play.google.com/store/apps/details?id=kr.visiondream.app"

/** 스토어 출시 전 임시 배포용 EAS APK (출시 후엔 사용 안 함) — 2026-07-09 v1.0.0(vc2, dd15319) */
export const APK_URL =
  "https://expo.dev/artifacts/eas/pFnLYdcVSWeC9gEYBkJkl28DEE-p-K-2r1jzlpDFgoM.apk";

/** 웹앱 (설치 없이 브라우저에서 바로 사용) */
export const APP_WEB_URL = "https://app.visiondream.kr";

export const IS_STORE_LIVE = PLAY_STORE_URL !== null;

/** Android 설치 CTA가 가리킬 링크 — 스토어 우선, 미출시 시 APK */
export const ANDROID_INSTALL_URL: string = PLAY_STORE_URL ?? APK_URL;
