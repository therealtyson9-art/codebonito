import { createClient } from "@/lib/supabase/server";

export async function hasPurchased(templateId: string): Promise<boolean> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return false;

  const { data } = await supabase
    .from("purchases")
    .select("id")
    .eq("user_id", user.id)
    .eq("template_id", templateId)
    .limit(1)
    .maybeSingle();

  return !!data;
}
