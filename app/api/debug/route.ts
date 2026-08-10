import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "No API key" });

  const { Resend } = await import("resend");
  const resend = new Resend(apiKey);

  const { data, error } = await resend.emails.send({
    from: "FORTEVA <noreply@forteva.com.ar>",
    to: ["bernardorshaid@gmail.com"],
    subject: "Debug SDK test",
    html: "<p>SDK test</p>",
  });

  return NextResponse.json({ data, error, keyPrefix: apiKey.substring(0, 10) });
}
