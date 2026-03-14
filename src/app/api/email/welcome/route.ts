import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Code Bonito <noreply@codebonito.com>";

function welcomeHtml(name: string | null) {
  const p = (text: string) => `<p style="margin:0 0 20px;color:#374151;line-height:1.8;font-size:15px;">${text}</p>`;
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#fafafa;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <div style="max-width:560px;margin:40px auto;background:#fff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
    <div style="background:#050510;padding:24px 40px;">
      <p style="margin:0;font-size:22px;font-weight:800;color:#fff;letter-spacing:-0.5px;">{<span style="color:#f97316;">CODE BONI_TO</span>}</p>
    </div>
    <div style="padding:40px 40px 32px;">
      ${p("Hey,")}
      ${p("You just signed up for Code Bonito. Here's how it works.")}
      ${p("Every month you get one free template. No credit card. No catch.")}
      ${p(`Browse the full library: <a href="https://codebonito.com/browse" style="color:#6366f1;font-weight:600;text-decoration:none;">codebonito.com/browse</a>`)}
      ${p("A few worth checking out right now:")}
      <p style="margin:0 0 20px;color:#374151;line-height:1.8;font-size:15px;">
        — <strong>Brutalist SaaS</strong> — high contrast, bold type, nothing generic about it<br>
        — <strong>Luxury Landing</strong> — dark background, editorial spacing, looks expensive<br>
        — <strong>Playful Portfolio</strong> — color, personality, actually memorable
      </p>
      ${p("Pick one, copy the prompt for your AI tool (Cursor, v0, Bolt, Lovable, Claude Code), and paste.")}
      ${p("That's it.")}
      ${p("— Jose<br>codebonito.com")}
    </div>
    <div style="padding:16px 40px 24px;border-top:1px solid #f3f4f6;background:#fafafa;">
      <p style="margin:0;color:#9ca3af;font-size:12px;">codebonito.com</p>
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
      subject: "Your first free template is waiting",
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
