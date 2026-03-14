import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getUserProStatus } from "@/lib/pro";
import { DNAExtractor } from "@/components/dna-extractor";

export const metadata = {
  title: "Clone DNA — Code Bonito",
  description: "Extract any website's design system and turn it into an AI prompt.",
};

export default async function DNAPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login?next=/dna");
  }

  let isPro = false;
  try {
    isPro = await getUserProStatus();
  } catch {
    // treat as free
  }

  return <DNAExtractor userId={user.id} isPro={isPro} />;
}
