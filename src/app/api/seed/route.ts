import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { MOCK_TEMPLATES } from "@/lib/mock-data";

export async function POST() {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ error: "Not allowed in production" }, { status: 403 });
  }

  const supabase = createAdminClient();

  const { data: existing } = await supabase
    .from("templates")
    .select("id")
    .limit(1);

  if (existing && existing.length > 0) {
    return NextResponse.json({
      message: "Templates table already has data, skipping seed",
      count: existing.length,
    });
  }

  const rows = MOCK_TEMPLATES.map(({ id, ...rest }) => rest);

  const { data, error } = await supabase
    .from("templates")
    .insert(rows)
    .select();

  if (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: `Seeded ${data.length} templates`,
    count: data.length,
  });
}
