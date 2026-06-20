import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { setInquiryStatus } from "@/lib/inquiries";

export const dynamic = "force-dynamic";

const STATUSES = ["new", "contacted", "closed"] as const;

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => ({}));
  const id = Number(body.id);
  const status = STATUSES.includes(body.status) ? body.status : null;
  if (!id || !status) return NextResponse.json({ error: "invalid" }, { status: 400 });
  const ok = await setInquiryStatus(id, status);
  return NextResponse.json({ ok });
}
