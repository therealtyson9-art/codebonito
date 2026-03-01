import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

// TODO: Replace with your real Stripe Price ID from the dashboard
// Create a Product "Code Bonito Pro" with a $5/month recurring price
const STRIPE_PRO_PRICE_ID = process.env.STRIPE_PRO_PRICE_ID || "price_REPLACE_ME";

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const session = await getStripe().checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price: STRIPE_PRO_PRICE_ID,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/pricing?checkout=canceled`,
      metadata: {
        user_id: user.id,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
