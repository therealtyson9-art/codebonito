import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { templateId, promoCode } = await request.json();

    if (!templateId) {
      return NextResponse.json(
        { error: "templateId is required" },
        { status: 400 }
      );
    }

    // --- Promo code handling ---
    if (promoCode) {
      const admin = createAdminClient();
      const { data: promo } = await admin
        .from("promo_codes")
        .select("*")
        .eq("code", promoCode.toUpperCase().trim())
        .single();

      const isValid =
        promo &&
        (promo.uses_remaining === null || promo.uses_remaining > 0) &&
        (!promo.expires_at || new Date(promo.expires_at) > new Date());

      if (isValid && promo.type === "free") {
        // Check if this user already redeemed this promo code
        const { data: existingUse } = await admin
          .from("purchases")
          .select("id")
          .eq("user_id", user.id)
          .like("stripe_session_id", `promo_${promo.code}_%`)
          .maybeSingle();

        if (existingUse) {
          return NextResponse.json({ error: "You've already used this promo code" }, { status: 400 });
        }

        // Record purchase directly, no Stripe needed
        await admin.from("purchases").insert({
          user_id: user.id,
          template_id: String(templateId),
          amount: 0,
          stripe_session_id: `promo_${promo.code}_${Date.now()}`,
          currency: "usd",
        });

        // Decrement uses_remaining if not unlimited
        if (promo.uses_remaining !== null) {
          await admin
            .from("promo_codes")
            .update({ uses_remaining: promo.uses_remaining - 1 })
            .eq("code", promo.code);
        }

        return NextResponse.json({ free: true, templateId });
      }
    }

    // --- Normal Stripe checkout ---
    const country = request.headers.get("x-vercel-ip-country") || "";
    const isMX = country === "MX";
    const currency = isMX ? "mxn" : "usd";
    const unitAmount = isMX ? 4000 : 200; // $40 MXN or $2 USD

    const appUrl = "https://codebonito.com";

    const session = await getStripe().checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency,
            product_data: {
              name: "Code Bonito Template",
              description: `One-time purchase — Template ${templateId}`,
            },
            unit_amount: unitAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${appUrl}/template/${templateId}?purchased=true`,
      cancel_url: `${appUrl}/template/${templateId}`,
      metadata: {
        templateId,
        userId: user.id,
        currency,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Purchase checkout error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
