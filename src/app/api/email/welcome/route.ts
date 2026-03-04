import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Code Bonito <noreply@codebonito.com>";

function welcomeHtml(name: string | null) {
  const displayName = name ? name.split(" ")[0] : "there";
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <div style="background:#050510;padding:32px 40px;text-align:center;">
      <p style="margin:0;font-size:28px;font-weight:800;color:#fff;letter-spacing:-1px;">{<span style="color:#f97316;">CODE BONI_TO</span>}</p>
    </div>
    <div style="padding:40px;">
      <h1 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#1f2937;">Welcome, ${displayName} 👋</h1>
      <p style="margin:0 0 20px;color:#6b7280;line-height:1.6;">You just got access to 100+ design templates that make AI-generated websites look <em>actually good</em>.</p>
      <p style="margin:0 0 24px;color:#6b7280;line-height:1.6;">Pick a template, copy the prompt, paste it into Cursor, v0, Bolt, or any AI tool — and stop building generic sites.</p>
      <div style="text-align:center;margin:32px 0;">
        <a href="https://codebonito.com/browse" style="background:#f97316;color:#fff;text-decoration:none;padding:14px 32px;border-radius:8px;font-weight:700;font-size:16px;display:inline-block;">Browse Templates →</a>
      </div>
      <p style="margin:0 0 8px;color:#9ca3af;font-size:13px;">Use code <strong style="color:#1f2937;">PRODUCTHUNT</strong> for a free template — valid for 14 days.</p>
    </div>
    <div style="padding:20px 40px;border-top:1px solid #f3f4f6;background:#fafafa;">
      <p style="margin:0;color:#9ca3af;font-size:12px;text-align:center;">codebonito.com · <a href="https://codebonito.com" style="color:#9ca3af;">Unsubscribe</a></p>
    </div>
  </div>
</body>
</html>`;
}

// POST /api/email/welcome — called by Supabase Auth webhook on new signup
// Body: { user_id, email, name }
export async function POST(req: NextRequest) {
  try {
    const { user_id, email, name } = await req.json();
    if (!email) return NextResponse.json({ error: "email required" }, { status: 400 });

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Welcome to Code Bonito — your templates are ready 🎨",
      html: welcomeHtml(name),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    // Mark welcome sent in profiles table (optional, future-proofing)
    const admin = createAdminClient();
    await admin.from("profiles").update({ welcome_sent: true } as never).eq("id", user_id).select();

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Welcome email error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
