import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RESEND_API_KEY;
  
  if (!apiKey) {
    return NextResponse.json({ error: "No API key", env: Object.keys(process.env).filter(k => k.includes('RESEND')) });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "FORTEVA <noreply@forteva.com.ar>",
      to: ["bernardorshaid@gmail.com"],
      subject: "Debug test",
      html: "<p>Debug</p>",
    }),
  });

  const data = await res.json();
  return NextResponse.json({ status: res.status, data, keyPrefix: apiKey.substring(0, 8) });
}
