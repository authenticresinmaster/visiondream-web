/**
 * 앱이 발급한 세션 JWT(app_session_id) 검증.
 * 앱 server/_core/sdk.ts 의 signSession 과 동일: HS256, secret = JWT_SECRET, payload {openId, appId, name}.
 * jose 사용 → Edge 런타임(미들웨어)에서도 동작.
 */
import { jwtVerify } from "jose";

export type SessionPayload = {
  openId: string;
  appId: string;
  name: string;
};

function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not configured");
  return new TextEncoder().encode(secret);
}

/**
 * 세션 토큰을 검증해 payload 를 반환. 유효하지 않으면 null.
 * openId 만 필수(앱 정책과 동일: appId/name 은 비어있을 수 있음).
 */
export async function verifySessionToken(
  token: string | undefined | null,
): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, getSecret(), { algorithms: ["HS256"] });
    const openId = payload.openId;
    if (typeof openId !== "string" || openId.length === 0) return null;
    return {
      openId,
      appId: typeof payload.appId === "string" ? payload.appId : "",
      name: typeof payload.name === "string" ? payload.name : "",
    };
  } catch {
    return null;
  }
}
