import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, company, email, phone, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Campos requeridos faltantes" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("No RESEND_API_KEY - logging submission:", { name, email });
    return NextResponse.json({ success: true });
  }

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "FORTEVA Contacto <noreply@forteva.com.ar>",
      to: ["bernardorshaid@gmail.com"],
      reply_to: email,
      subject: `Nueva consulta de ${name} — ${company || "Sin empresa"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a5f; border-bottom: 2px solid #e5e7eb; padding-bottom: 12px;">Nueva consulta desde forteva.com.ar</h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
            <tr><td style="padding: 10px 8px; font-weight: bold; color: #555; width: 120px;">Nombre:</td><td style="padding: 10px 8px;">${name}</td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 10px 8px; font-weight: bold; color: #555;">Empresa:</td><td style="padding: 10px 8px;">${company || "—"}</td></tr>
            <tr><td style="padding: 10px 8px; font-weight: bold; color: #555;">Email:</td><td style="padding: 10px 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr style="background:#f9f9f9"><td style="padding: 10px 8px; font-weight: bold; color: #555;">Teléfono:</td><td style="padding: 10px 8px;">${phone || "—"}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f0f4f8; border-radius: 8px; border-left: 4px solid #2563eb;">
            <p style="font-weight: bold; color: #555; margin: 0 0 8px;">Mensaje:</p>
            <p style="color: #333; margin: 0; line-height: 1.7;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          <p style="color: #999; font-size: 12px; margin-top: 24px; border-top: 1px solid #e5e7eb; padding-top: 12px;">Enviado desde forteva.com.ar · Responder a: ${email}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend SDK error:", error);
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
