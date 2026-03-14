import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error && data.user) {
      // Send welcome email on first login (profile created_at within last 60s)
      try {
        const admin = createAdminClient();
        const { data: profile } = await admin
          .from("profiles")
          .select("id, email, name, created_at")
          .eq("id", data.user.id)
          .maybeSingle();

        if (profile) {
          const ageMs = Date.now() - new Date(profile.created_at).getTime();
          const isNew = ageMs < 60_000; // first 60 seconds = new signup
          if (isNew) {
            // Fire-and-forget welcome email
            fetch(`${origin}/api/email/welcome`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ user_id: profile.id, email: profile.email, name: profile.name }),
            }).catch(() => {});

            // Schedule day 3 and day 7 follow-up emails
            const now = new Date();
            const day3 = new Date(now.getTime() + 3 * 24 * 60 * 60 * 1000);
            const day7 = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

            void (async () => {
              const { error: queueError } = await admin.from("email_queue").insert([
                {
                  user_id: profile.id,
                  email: profile.email,
                  name: profile.name,
                  email_type: "day3_upsell",
                  scheduled_for: day3.toISOString(),
                },
                {
                  user_id: profile.id,
                  email: profile.email,
                  name: profile.name,
                  email_type: "day7_pro_push",
                  scheduled_for: day7.toISOString(),
                },
              ]);
              if (queueError) console.error("email_queue insert error:", queueError);
            })();
          }
        }
      } catch { /* non-blocking */ }

      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  return NextResponse.redirect(`${origin}/login?error=auth`);
}
