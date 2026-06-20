/**
 * 관리자 캠페인 생성. status=scheduled 로 저장하면 앱 스케줄러가 세그먼트로 발송.
 * 관리자(role=admin)만 호출 가능.
 */
import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { getDb } from "@/lib/db";
import { mktCampaigns } from "@/lib/db/marketingSchema";

export const dynamic = "force-dynamic";

const SEGMENTS = ["all", "leads_no_signup", "activated_no_sub", "at_risk", "subscribers_all", "tag"];

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }

  const body = await req.json().catch(() => ({}));
  const title = typeof body.title === "string" ? body.title.trim() : "";
  const subjectRaw = typeof body.subject === "string" ? body.subject.trim() : "";
  const bodyHtml = typeof body.bodyHtml === "string" ? body.bodyHtml : "";
  const contentRef = typeof body.contentRef === "string" && body.contentRef ? body.contentRef : null;
  const segType = typeof body.segmentType === "string" && SEGMENTS.includes(body.segmentType) ? body.segmentType : "all";
  const tag = typeof body.tag === "string" ? body.tag : undefined;
  const isAd = Boolean(body.isAd);

  if (!title || !subjectRaw) {
    return NextResponse.json({ error: "title and subject required" }, { status: 400 });
  }
  const subject = isAd ? `(광고) ${subjectRaw}` : subjectRaw;

  try {
    const db = getDb();
    const [row] = await db
      .insert(mktCampaigns)
      .values({
        title,
        subject,
        bodyHtml,
        contentRef,
        segment: segType === "tag" ? { type: "tag", tag } : { type: segType },
        status: "scheduled",
      })
      .returning({ id: mktCampaigns.id });
    return NextResponse.json({ ok: true, id: row?.id });
  } catch (err) {
    console.error("[admin/campaign] insert failed:", err);
    return NextResponse.json({ error: "server error" }, { status: 500 });
  }
}
