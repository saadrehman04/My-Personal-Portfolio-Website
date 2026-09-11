import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { budgetLabels, projectTypeLabels } from "@/lib/validations";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, budget, projectType, message } = parsed.data;

    const budgetLabel = budgetLabels[budget];
    const projectLabel = projectTypeLabels[projectType];

    // ─── Attempt Resend API ────────────────────────────────────────────────────
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL ?? "hello@saadrehman.dev";

    if (RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(RESEND_API_KEY);

      // Notification to Saad
      await resend.emails.send({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [TO_EMAIL],
        subject: `New Project Inquiry — ${projectLabel} from ${name}`,
        html: buildOwnerEmail({ name, email, budget: budgetLabel, projectType: projectLabel, message }),
      });

      // Confirmation to client
      await resend.emails.send({
        from: "Saad Rehman <onboarding@resend.dev>",
        to: [email],
        subject: "Got your message — I'll be in touch shortly",
        html: buildClientEmail({ name }),
      });

      return NextResponse.json({ success: true });
    }

    // ─── Fallback: Nodemailer (SMTP) ──────────────────────────────────────────
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = parseInt(process.env.SMTP_PORT ?? "587");
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465,
        auth: { user: SMTP_USER, pass: SMTP_PASS },
      });

      await transporter.sendMail({
        from: `"Portfolio" <${SMTP_USER}>`,
        to: TO_EMAIL,
        subject: `New Project Inquiry — ${projectLabel} from ${name}`,
        html: buildOwnerEmail({ name, email, budget: budgetLabel, projectType: projectLabel, message }),
      });

      await transporter.sendMail({
        from: `"Saad Rehman" <${SMTP_USER}>`,
        to: email,
        subject: "Got your message — I'll be in touch shortly",
        html: buildClientEmail({ name }),
      });

      return NextResponse.json({ success: true });
    }

    // ─── No email provider configured ─────────────────────────────────────────
    // In development, just log and succeed (so the UI flow works)
    if (process.env.NODE_ENV === "development") {
      console.log("📬 Contact form submission (no email provider configured):");
      console.log({ name, email, budget: budgetLabel, projectType: projectLabel, message });
      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { error: "Email service not configured. Please set RESEND_API_KEY or SMTP_* env vars." },
      { status: 500 }
    );
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// ─── Email templates ──────────────────────────────────────────────────────────

function buildOwnerEmail(data: {
  name: string;
  email: string;
  budget: string;
  projectType: string;
  message: string;
}) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:'Helvetica Neue',Arial,sans-serif;color:#e5e7eb;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td>
      <table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#111827;border-radius:16px;border:1px solid #1f2937;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);padding:24px 32px;">
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff;">New Project Inquiry 🚀</h1>
            <p style="margin:4px 0 0;font-size:14px;color:rgba(255,255,255,0.8);">From your portfolio contact form</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${row("Name", data.name)}
              ${row("Email", `<a href="mailto:${data.email}" style="color:#3b82f6;">${data.email}</a>`)}
              ${row("Project Type", data.projectType)}
              ${row("Budget", data.budget)}
            </table>
            <div style="margin-top:24px;background:#1f2937;border-radius:12px;padding:20px;">
              <p style="margin:0 0 8px;font-size:12px;font-weight:600;color:#9ca3af;text-transform:uppercase;letter-spacing:0.05em;">Message</p>
              <p style="margin:0;font-size:14px;line-height:1.7;color:#d1d5db;">${data.message.replace(/\n/g, "<br>")}</p>
            </div>
            <div style="margin-top:24px;text-align:center;">
              <a href="mailto:${data.email}" style="display:inline-block;background:#3b82f6;color:#fff;font-size:14px;font-weight:600;padding:12px 28px;border-radius:10px;text-decoration:none;">Reply to ${data.name}</a>
            </div>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

function row(label: string, value: string) {
  return `
    <tr>
      <td style="padding:8px 0;font-size:12px;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;width:120px;">${label}</td>
      <td style="padding:8px 0;font-size:14px;color:#f3f4f6;">${value}</td>
    </tr>`;
}

function buildClientEmail(data: { name: string }) {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:'Helvetica Neue',Arial,sans-serif;color:#111827;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 20px;">
    <tr><td>
      <table width="600" cellpadding="0" cellspacing="0" style="margin:0 auto;background:#fff;border-radius:16px;border:1px solid #e5e7eb;overflow:hidden;">
        <tr>
          <td style="background:linear-gradient(135deg,#3b82f6,#8b5cf6);padding:32px;text-align:center;">
            <div style="width:48px;height:48px;background:rgba(255,255,255,0.2);border-radius:12px;display:inline-flex;align-items:center;justify-content:center;margin-bottom:12px;">
              <span style="font-size:24px;">✉️</span>
            </div>
            <h1 style="margin:0;font-size:22px;font-weight:700;color:#fff;">Message Received!</h1>
          </td>
        </tr>
        <tr>
          <td style="padding:36px 32px;">
            <p style="margin:0 0 16px;font-size:16px;color:#374151;">Hey ${data.name},</p>
            <p style="margin:0 0 16px;font-size:15px;line-height:1.7;color:#4b5563;">
              Thanks for reaching out! I've received your project details and I'm excited to learn more about what you're building.
            </p>
            <p style="margin:0 0 24px;font-size:15px;line-height:1.7;color:#4b5563;">
              I typically respond within <strong>24 hours</strong>. In the meantime, feel free to book a discovery call directly on my calendar if you prefer to talk through things live.
            </p>
            <div style="text-align:center;margin:28px 0;">
              <a href="https://calendly.com/saadrehman" style="display:inline-block;background:#3b82f6;color:#fff;font-size:14px;font-weight:600;padding:14px 32px;border-radius:10px;text-decoration:none;">Book a Discovery Call</a>
            </div>
            <p style="margin:24px 0 0;font-size:14px;color:#6b7280;border-top:1px solid #e5e7eb;padding-top:20px;">
              Best,<br>
              <strong style="color:#111827;">Saad Rehman</strong><br>
              <span style="color:#3b82f6;">AI & ML Engineer · Full Stack Developer</span>
            </p>
          </td>
        </tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}
