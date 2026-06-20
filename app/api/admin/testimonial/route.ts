import { NextResponse } from "next/server";
import { getCurrentUser } from "@/lib/auth/session";
import { setTestimonialStatus } from "@/lib/testimonials";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const user = await getCurrentUser();
  if (!user || user.role !== "admin") {
    return NextResponse.json({ error: "forbidden" }, { status: 403 });
  }
  const body = await req.json().catch(() => ({}));
  const id = Number(body.id);
  const status = body.status === "approved" ? "approved" : body.status === "rejected" ? "rejected" : null;
  if (!id || !status) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const ok = await setTestimonialStatus(id, status);
  return NextResponse.json({ ok });
}
