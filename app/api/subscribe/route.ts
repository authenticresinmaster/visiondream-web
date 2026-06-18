import { NextResponse } from "next/server";

/**
 * 전자책 신청 → ConvertKit 구독자 등록.
 * 환경변수: CONVERTKIT_API_KEY, CONVERTKIT_FORM_ID (Vercel에 설정).
 * 미설정 시에도 실패하지 않고 접수 처리(추후 연동).
 */
export async function POST(req: Request) {
  try {
    const { email, name } = await req.json();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "invalid email" }, { status: 400 });
    }

    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;

    if (apiKey && formId) {
      const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ api_key: apiKey, email, first_name: name || undefined }),
      });
      if (!res.ok) {
        console.error("[subscribe] ConvertKit error", res.status, await res.text().catch(() => ""));
        // 구독자 등록 실패해도 사용자에겐 접수로 응답(이후 재처리)
      }
    } else {
      console.log("[subscribe] ConvertKit 미설정 — 접수만:", email, name);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
