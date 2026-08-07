import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, company, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    // Fallback: log and return success (dev mode / before setup)
    console.log("Contact form submission (no RESEND_API_KEY configured):", { name, company, email, phone, message });
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FORTEVA Contacto <noreply@forteva.com.ar>",
        to: ["ventas@forteva.com.ar"],
        reply_to: email,
        subject: `Nueva consulta de ${name} — ${company}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #1e3a5f;">Nueva consulta desde forteva.com.ar</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold; color: #555;">Nombre:</td><td style="padding: 8px;">${name}</td></tr>
              <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; color: #555;">Empresa:</td><td style="padding: 8px;">${company || "—"}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
              <tr style="background:#f9f9f9"><td style="padding: 8px; font-weight: bold; color: #555;">Teléfono:</td><td style="padding: 8px;">${phone || "—"}</td></tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #f0f4f8; border-radius: 8px;">
              <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Mensaje:</p>
              <p style="color: #333; margin: 0; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</p>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 24px;">Enviado desde forteva.com.ar</p>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
