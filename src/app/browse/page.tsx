import { createClient } from "@/lib/supabase/server";
import { getUserProStatus } from "@/lib/pro";
import { MOCK_TEMPLATES, getDemoUrl } from "@/lib/mock-data";
import type { Template } from "@/types/database";
import { BrowseClient } from "./browse-client";

export default async function BrowsePage() {
  let templates: Template[] = MOCK_TEMPLATES;

  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("templates")
      .select("*")
      .eq("status", "published")
      .order("downloads_count", { ascending: false });

    if (!error && data && data.length > 0) {
      // Map DB rows to Template shape and attach demo_url
      templates = (data as Template[]).map((t) => ({
        ...t,
        demo_url: getDemoUrl(t.slug),
      }));
    }
  } catch {
    // Supabase unavailable — fall back to mock data
  }

  // Ensure mock templates also have demo_url set
  templates = templates.map((t) => ({
    ...t,
    demo_url: t.demo_url ?? getDemoUrl(t.slug),
  }));

  // Check if user has Pro subscription
  let isPro = false;
  try {
    isPro = await getUserProStatus();
  } catch {
    // Not logged in or error — treat as free
  }

  return <BrowseClient templates={templates} isPro={isPro} />;
}
