import { NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase/admin";
import { MOCK_TEMPLATES } from "@/lib/mock-data";

export async function POST(request: Request) {
  // Guard: require SEED_SECRET to prevent unauthorized seeding in production
  const authHeader = request.headers.get("authorization");
  const seedSecret = process.env.SEED_SECRET;
  if (!seedSecret || authHeader !== `Bearer ${seedSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createAdminClient();

  // Map mock templates to the DB schema:
  // DB columns: id (uuid), name, slug, description, category, style,
  //             platforms, is_pro, downloads, preview_url, created_at
  const rows = MOCK_TEMPLATES.map((t) => ({
    
    name: t.name,
    slug: t.slug,
    description: t.description,
    category: t.category,
    style: t.style,
    platforms: t.platforms,
    is_pro: t.price_tier === "pro",
    downloads: t.downloads_count,
    preview_url: t.preview_url,
  }));

  // Upsert on slug so re-running the seed is idempotent
  const { data, error } = await supabase
    .from("templates")
    .upsert(rows, { onConflict: "slug" })
    .select();

  if (error) {
    console.error("Seed error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    message: `Upserted ${data.length} templates`,
    count: data.length,
  });
}
