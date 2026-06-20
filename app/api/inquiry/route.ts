import { NextResponse } from "next/server";
import { createInquiry } from "@/lib/inquiries";

export const dynamic = "force-dynamic";

const TYPES = new Set(["team", "coach", "general"]);

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "invalid email" }, { status: 400 });
  }
  const type = typeof body.inquiryType === "string" && TYPES.has(body.inquiryType) ? body.inquiryType : "general";

  const ok = await createInquiry({
    name: typeof body.name === "string" ? body.name.trim().slice(0, 100) : undefined,
    email,
    phone: typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : undefined,
    org: typeof body.org === "string" ? body.org.trim().slice(0, 200) : undefined,
    inquiryType: type,
    message: typeof body.message === "string" ? body.message.slice(0, 2000) : undefined,
  });

  if (!ok) return NextResponse.json({ error: "server error" }, { status: 500 });
  return NextResponse.json({ ok: true });
}
