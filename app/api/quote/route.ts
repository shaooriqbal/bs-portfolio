import { NextResponse } from "next/server";
import { site } from "@/lib/site";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body?.name || !body?.phone || !body?.email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const lines = [
    `🚀 New BurjSoft Project Architecture Strategy Request`,
    `Name: ${body.name}`,
    `Email: ${body.email}`,
    `Phone: ${body.phone}`,
    `Company: ${body.company || "Not specified"}`,
    `Project Category: ${body.jobType || "Custom Software"}`,
    `Budget Range: ${body.budget || "Not specified"}`,
    `Scope / Requirements: ${body.symptoms || "Not specified"}`,
    body.photoName ? `Attachment: ${body.photoName}` : "",
    `Please schedule a 30-minute discovery call with a senior software architect.`,
  ]
    .filter(Boolean)
    .join("\n");

  const whatsapp = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(lines)}`;

  return NextResponse.json({ ok: true, whatsapp });
}
