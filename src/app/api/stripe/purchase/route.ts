import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { templateId } = await request.json();

    if (!templateId) {
      return NextResponse.json(
        { error: "templateId is required" },
        { status: 400 }
      );
    }

    const appUrl = "https://codebonito.com";

    const session = await getStripe().checkout.sessions.create({
      customer_email: user.email,
      line_items: [
        {
          price_data: {
            currency: "mxn",
            product_data: {
              name: "Code Bonito Template",
              description: `One-time purchase — Template ${templateId}`,
            },
            unit_amount: 4000,
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
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Purchase checkout error:", msg);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
