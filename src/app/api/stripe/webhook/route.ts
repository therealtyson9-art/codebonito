import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";
import Stripe from "stripe";

export async function POST(request: Request) {
  const body = await request.text();
  const headersList = await headers();
  const signature = headersList.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "No signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createAdminClient();

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;

      if (session.mode === "payment") {
        // One-time template purchase
        const userId = session.metadata?.userId;
        const templateId = session.metadata?.templateId;

        if (userId && templateId) {
          await supabase.from("purchases").insert({
            user_id: userId,
            template_id: templateId,
            stripe_session_id: session.id,
            amount: session.amount_total ?? 200,
          });
        }
      } else if (session.mode === "subscription") {
        // Pro subscription
        const userId = session.metadata?.user_id;

        if (userId && session.subscription) {
          const subscription = await getStripe().subscriptions.retrieve(
            session.subscription as string
          );

          const item = subscription.items.data[0];
          const periodStart = item?.current_period_start;
          const periodEnd = item?.current_period_end;

          await supabase.from("subscriptions").upsert({
            user_id: userId,
            stripe_subscription_id: subscription.id,
            plan: "pro",
            status: subscription.status,
            current_period_start: periodStart
              ? new Date(periodStart * 1000).toISOString()
              : null,
            current_period_end: periodEnd
              ? new Date(periodEnd * 1000).toISOString()
              : null,
          });

          await supabase
            .from("profiles")
            .update({ stripe_customer_id: session.customer as string })
            .eq("id", userId);
        }
      }
      break;
    }

    case "customer.subscription.updated": {
      const subscription = event.data.object as Stripe.Subscription;
      const item = subscription.items.data[0];
      const periodStart = item?.current_period_start;
      const periodEnd = item?.current_period_end;

      await supabase
        .from("subscriptions")
        .update({
          status: subscription.status,
          plan: subscription.status === "active" ? "pro" : "free",
          current_period_start: periodStart
            ? new Date(periodStart * 1000).toISOString()
            : null,
          current_period_end: periodEnd
            ? new Date(periodEnd * 1000).toISOString()
            : null,
        })
        .eq("stripe_subscription_id", subscription.id);
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      await supabase
        .from("subscriptions")
        .update({
          status: "canceled",
          plan: "free",
        })
        .eq("stripe_subscription_id", subscription.id);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
