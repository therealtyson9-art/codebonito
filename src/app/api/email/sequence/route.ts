import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createAdminClient } from "@/lib/supabase/admin";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = "Code Bonito <noreply@codebonito.com>";

function day3Html(name: string | null): string {
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
      ${p("Quick math.")}
      ${p("Three individual templates at $2 each = $6.")}
      ${p("Pro plan = $6 per month.")}
      ${p(`With Pro you get all 11 Ultra Premium templates (the ones with glassmorphism, parallax, and micro-interactions that make people ask "what tool did you use for that?") plus unlimited access to the DNA Cloner and every new template we add.`)}
      ${p("If you're building more than one project, the math does itself.")}
      ${p(`<a href="https://codebonito.com/pricing" style="color:#6366f1;font-weight:600;text-decoration:none;">See what Pro includes →</a>`)}
      ${p("— Jose")}
    </div>
    <div style="padding:16px 40px 24px;border-top:1px solid #f3f4f6;background:#fafafa;">
      <p style="margin:0;color:#9ca3af;font-size:12px;">codebonito.com</p>
    </div>
  </div>
</body>
</html>`;
}

function day7Html(name: string | null): string {
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
      ${p("One week in. Quick check.")}
      ${p("If you're still on the free plan, here's what you're missing:")}
      <p style="margin:0 0 20px;color:#374151;line-height:1.8;font-size:15px;"><strong>Free plan:</strong> 1 template per month, basic library only, 3 DNA Cloner uses.</p>
      <p style="margin:0 0 20px;color:#374151;line-height:1.8;font-size:15px;"><strong>Pro ($6/month):</strong> Everything. All 11 Ultra Premium templates. Unlimited DNA Cloner. Every new template as it drops.</p>
      ${p("The Ultra Premium ones are different. Animated backgrounds, glassmorphism cards, layouts that don't look like AI built them.")}
      ${p("If you've used Code Bonito at all this week, Pro pays for itself before the month ends.")}
      ${p(`<a href="https://codebonito.com/pricing" style="color:#6366f1;font-weight:600;text-decoration:none;">codebonito.com/pricing</a>`)}
      ${p("— Jose")}
    </div>
    <div style="padding:16px 40px 24px;border-top:1px solid #f3f4f6;background:#fafafa;">
      <p style="margin:0;color:#9ca3af;font-size:12px;">codebonito.com</p>
    </div>
  </div>
</body>
</html>`;
}

// GET /api/email/sequence — Called by Vercel cron daily
// Finds pending emails scheduled for now or earlier and sends them
export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();

  // Get pending emails due now
  const { data: pending, error: fetchError } = await supabase
    .from("email_queue")
    .select("*")
    .eq("status", "pending")
    .lte("scheduled_for", new Date().toISOString())
    .limit(50);

  if (fetchError) {
    console.error("email_queue fetch error:", fetchError);
    return NextResponse.json({ error: String(fetchError) }, { status: 500 });
  }

  if (!pending?.length) {
    return NextResponse.json({ sent: 0, message: "No pending emails" });
  }

  let sent = 0;
  let failed = 0;

  for (const item of pending) {
    try {
      let subject = "";
      let html = "";

      if (item.email_type === "day3_upsell") {
        subject = "3 templates cost what Pro costs. Just saying.";
        html = day3Html(item.name as string | null);
      } else if (item.email_type === "day7_pro_push") {
        subject = "Still on the free plan?";
        html = day7Html(item.name as string | null);
      }

      if (subject && html) {
        const { error: sendError } = await resend.emails.send({
          from: FROM_EMAIL,
          to: item.email as string,
          subject,
          html,
        });

        if (sendError) throw sendError;

        await supabase
          .from("email_queue")
          .update({ status: "sent", sent_at: new Date().toISOString() })
          .eq("id", item.id);

        sent++;
      }
    } catch (err) {
      console.error(`Failed to send ${item.email_type} to ${item.email}:`, err);
      await supabase
        .from("email_queue")
        .update({ status: "failed" })
        .eq("id", item.id);
      failed++;
    }
  }

  return NextResponse.json({ sent, failed });
}
