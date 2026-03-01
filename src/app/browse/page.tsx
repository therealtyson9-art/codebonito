import { createClient } from "@/lib/supabase/server";
import { MOCK_TEMPLATES } from "@/lib/mock-data";
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
      templates = data as Template[];
    }
  } catch {
    // Supabase unavailable — fall back to mock data
  }

  return <BrowseClient templates={templates} />;
}
