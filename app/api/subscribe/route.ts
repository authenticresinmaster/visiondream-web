import { NextResponse } from "next/server";
import { subscribeContact } from "@/lib/marketing";

/**
 * 전자책 신청 → ① 자체 마케팅(marketing.contacts + welcome 시퀀스) + ② ConvertKit(선택).
 * 자체 엔진(앱 스케줄러)이 환영 시퀀스를 발송하므로 ConvertKit 없이도 동작.
 * 환경변수(Vercel):
 *   CONVERTKIT_API_KEY  (필수)
 *   CONVERTKIT_FORM_ID  (필수 — 이 폼에 시퀀스/오토메이션 연결)
 *   CONVERTKIT_TAG_ID   (선택 — 유입 세그먼트 태그 id)
 * 미설정 시에도 실패하지 않고 접수 처리.
 */
export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const rawEmail = typeof body.email === "string" ? body.email : "";
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const source = typeof body.source === "string" ? body.source : "visiondream-web";

    const email = rawEmail.trim().toLowerCase();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "invalid email" }, { status: 400 });
    }

    // ① 자체 마케팅 시스템 등록 + 환영 시퀀스 시작 (앱 스케줄러가 발송)
    await subscribeContact({ email, name, source, consent: true });

    // ② ConvertKit (선택 — 키 설정 시에만)
    const apiKey = process.env.CONVERTKIT_API_KEY;
    const formId = process.env.CONVERTKIT_FORM_ID;
    const tagId = process.env.CONVERTKIT_TAG_ID;

    if (apiKey && formId) {
      const payload: Record<string, unknown> = {
        api_key: apiKey,
        email,
        first_name: name || undefined,
        fields: { source },
      };
      if (tagId) payload.tags = [Number(tagId)];

      const res = await fetch(`https://api.convertkit.com/v3/forms/${formId}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        console.error("[subscribe] ConvertKit error", res.status, await res.text().catch(() => ""));
        // 등록 실패해도 사용자에겐 접수로 응답(추후 재처리)
      }
    } else {
      console.log("[subscribe] ConvertKit 미설정 — 접수만:", email, name, source);
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
