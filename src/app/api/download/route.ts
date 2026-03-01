import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const { templateId } = await request.json();

    if (!templateId) {
      return NextResponse.json(
        { error: "templateId is required" },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const admin = createAdminClient();

    // Fetch the template
    const { data: template } = await admin
      .from("templates")
      .select("id, price_tier, name")
      .eq("id", templateId)
      .single();

    if (!template) {
      return NextResponse.json(
        { error: "Template not found" },
        { status: 404 }
      );
    }

    // If template is pro, check subscription
    if (template.price_tier === "pro") {
      const { data: subscription } = await admin
        .from("subscriptions")
        .select("plan, status")
        .eq("user_id", user.id)
        .eq("status", "active")
        .eq("plan", "pro")
        .single();

      if (!subscription) {
        return NextResponse.json(
          { error: "Pro subscription required", upgrade: true },
          { status: 403 }
        );
      }
    }

    // Record the download
    await admin.from("downloads").insert({
      user_id: user.id,
      template_id: templateId,
    });

    // Increment download counter
    await admin.rpc("increment_downloads", { tid: templateId });

    return NextResponse.json({ success: true, template: template.name });
  } catch (error) {
    console.error("Download error:", error);
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 }
    );
  }
}
