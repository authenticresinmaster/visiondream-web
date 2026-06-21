/**
 * 전자책 안내 이메일 — Resend HTTPS API (랜딩 vision-landing 과 동일 템플릿).
 * 신청 즉시 발송. RESEND_API_KEY 미설정 시 콘솔 로그만.
 */
import "server-only";

const EBOOK_LINK = process.env.EBOOK_LINK || "https://book.visiondream.kr";
const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663298618787/4D8ARnv7D6bvYhfqoadjtG/seowoo-logo-white2_43ba7649.png";
const KAKAO_URL = "https://pf.kakao.com/_xkmeqX";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const RESEND_FROM = process.env.RESEND_FROM || "서우 비전드림 <noreply@visiondream.kr>";
const RESEND_REPLY_TO = process.env.RESEND_REPLY_TO;

export async function sendEmail(opts: {
  to: string;
  subject: string;
  html: string;
  text?: string;
}): Promise<boolean> {
  if (!RESEND_API_KEY) {
    console.log(`[Email] RESEND_API_KEY 미설정 — 발송 생략. to=${opts.to}`);
    return false;
  }
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { authorization: `Bearer ${RESEND_API_KEY}`, "content-type": "application/json" },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: opts.to,
        subject: opts.subject,
        html: opts.html,
        ...(opts.text ? { text: opts.text } : {}),
        ...(RESEND_REPLY_TO ? { reply_to: RESEND_REPLY_TO } : {}),
      }),
    });
    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.warn(`[Email] Resend 발송 실패 (${res.status}): ${detail}`);
      return false;
    }
    console.log(`[Email] 발송 성공 → ${opts.to}`);
    return true;
  } catch (error) {
    console.warn("[Email] Resend 발송 오류:", error);
    return false;
  }
}

/** 전자책 신청 환영 메일 (랜딩과 동일 디자인) */
export async function sendEbookEmail({ to, name }: { to: string; name?: string | null }): Promise<boolean> {
  const who = name && name.trim() ? name.trim() : "회원";
  const html = `
<!DOCTYPE html>
<html lang="ko">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>서우 전자책 안내</title></head>
<body style="margin:0;padding:0;background:#f0f4f8;font-family:'Apple SD Gothic Neo','Malgun Gothic','Noto Sans KR',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f8;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,0.10);">
        <tr><td style="background:linear-gradient(135deg,#1A2332 0%,#105D9E 100%);padding:40px 40px 32px;text-align:center;">
          <img src="${LOGO_URL}" alt="서우" style="height:56px;width:auto;margin-bottom:16px;" />
          <div style="font-size:26px;font-weight:900;color:#F59E0B;letter-spacing:2px;margin-bottom:6px;">S = B × T × A</div>
          <div style="font-size:13px;color:#93C5FD;letter-spacing:1px;">성공 = 믿음 × 생각 × 행동</div>
        </td></tr>
        <tr><td style="padding:40px 40px 0;">
          <p style="font-size:20px;font-weight:800;color:#1A2332;margin:0 0 12px;">${who}님, 환영합니다! 🎉</p>
          <p style="font-size:15px;color:#4B5563;line-height:1.9;margin:0 0 28px;">서우 비전드림 앱에 관심 가져주셔서 진심으로 감사합니다.<br>신청하신 <strong style="color:#105D9E;">무료 전자책</strong>을 아래 버튼을 통해 지금 바로 확인하실 수 있습니다.</p>
        </td></tr>
        <tr><td style="padding:0 40px;">
          <div style="background:#EFF6FF;border-left:5px solid #105D9E;border-radius:10px;padding:22px 26px;margin-bottom:8px;">
            <div style="font-size:17px;font-weight:800;color:#1A2332;margin-bottom:10px;">📖 왜 나는 안 되고, 저 사람은 되는가?</div>
            <div style="font-size:12px;font-weight:700;color:#105D9E;margin-bottom:10px;letter-spacing:0.5px;">부제: 성공 네비게이션 — 서우의 성공법칙 S=BTA와 비전관리 프로세스</div>
            <ul style="margin:0;padding-left:18px;font-size:13px;color:#374151;line-height:2.0;">
              <li>성공법칙 S = B × T × A 완전 해설</li>
              <li>비전관리 프로세스 4단계 실천법</li>
              <li>꿈 역설계·두려움 해체기로 오늘 할 일 도출</li>
              <li>성공의 나무 게이미피케이션 시스템</li>
            </ul>
          </div>
        </td></tr>
        <tr><td style="padding:32px 40px 8px;text-align:center;">
          <a href="${EBOOK_LINK}" style="display:inline-block;background:linear-gradient(135deg,#105D9E,#1A2332);color:#ffffff;font-size:17px;font-weight:800;text-decoration:none;padding:18px 48px;border-radius:50px;box-shadow:0 6px 20px rgba(16,93,158,0.35);letter-spacing:0.5px;">📚 전자책 바로 읽기 →</a>
        </td></tr>
        <tr><td style="padding:16px 40px 0;">
          <p style="font-size:12px;color:#9CA3AF;line-height:1.7;margin:0;text-align:center;">버튼이 작동하지 않으면 아래 링크를 복사해 브라우저에 붙여넣기 해주세요.<br><a href="${EBOOK_LINK}" style="color:#105D9E;word-break:break-all;">${EBOOK_LINK}</a></p>
        </td></tr>
        <tr><td style="padding:28px 40px 0;"><hr style="border:none;border-top:1px solid #E5E7EB;margin:0;" /></td></tr>
        <tr><td style="padding:24px 40px 0;">
          <p style="font-size:14px;color:#374151;line-height:1.9;margin:0;">앞으로 <strong style="color:#1A2332;">비전관리 앱 출시 소식</strong>과<br>유용한 성공 콘텐츠를 이메일로 전달드릴 예정입니다.<br><br><span style="font-size:15px;font-weight:700;color:#105D9E;">비전을 심으면, 반드시 열매가 열립니다. 🌱</span></p>
        </td></tr>
        <tr><td style="padding:20px 40px 0;text-align:center;">
          <a href="${KAKAO_URL}" style="display:inline-block;background:#FEE500;color:#1A2332;font-size:13px;font-weight:700;text-decoration:none;padding:10px 24px;border-radius:8px;">💬 카카오채널로 문의하기</a>
        </td></tr>
        <tr><td style="background:#F9FAFB;padding:24px 40px;text-align:center;border-top:1px solid #E5E7EB;margin-top:32px;">
          <div style="font-size:11px;color:#9CA3AF;line-height:1.8;">본 메일은 서우 비전드림 전자책 신청에 의해 자동 발송되었습니다.<br>© 2026 서우. All rights reserved.</div>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return sendEmail({
    to,
    subject: `📚 [서우] ${who}님, 무료 전자책이 도착했습니다! — 왜 나는 안 되고, 저 사람은 되는가?`,
    html,
  });
}
