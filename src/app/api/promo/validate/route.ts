import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(req: NextRequest) {
  const { code } = await req.json();

  if (!code || typeof code !== "string") {
    return NextResponse.json({ valid: false, error: "No code provided" }, { status: 400 });
  }

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("promo_codes")
    .select("*")
    .eq("code", code.toUpperCase().trim())
    .single();

  if (error || !data) {
    return NextResponse.json({ valid: false, error: "Invalid code" });
  }

  if (data.uses_remaining !== null && data.uses_remaining <= 0) {
    return NextResponse.json({ valid: false, error: "Code has been fully redeemed" });
  }

  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return NextResponse.json({ valid: false, error: "Code has expired" });
  }

  return NextResponse.json({
    valid: true,
    type: data.type, // "free" | "percent"
    discount_percent: data.discount_percent,
    description: data.description,
  });
}
