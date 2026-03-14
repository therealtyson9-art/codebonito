import { createClient } from "@/lib/supabase/server";

export async function getUserProStatus(): Promise<boolean> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return false;

  const { data } = await supabase
    .from("subscriptions")
    .select("status, current_period_end")
    .eq("user_id", user.id)
    .eq("status", "active")
    .single();

  if (!data) return false;

  // Check if subscription is still valid
  if (data.current_period_end) {
    return new Date(data.current_period_end) > new Date();
  }

  return data.status === "active";
}

export async function getUserProStatusClient(
  userId: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabaseClient: any
): Promise<boolean> {
  const { data } = await supabaseClient
    .from("subscriptions")
    .select("status, current_period_end")
    .eq("user_id", userId)
    .eq("status", "active")
    .single();

  if (!data) return false;
  if (data.current_period_end) {
    return new Date(data.current_period_end) > new Date();
  }
  return data.status === "active";
}
