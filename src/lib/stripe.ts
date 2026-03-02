import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe() {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2026-02-25.clover",
      typescript: true,
    });
  }
  return _stripe;
}

export const PLANS = {
  free: {
    name: "Free",
    price: 0,
    templates: 1,
    description: "1 plantilla gratis al mes (requiere registro)",
  },
  pro: {
    name: "Premium",
    price: 2,
    templates: Infinity,
    description: "Compra cualquier plantilla individualmente por $2",
  },
} as const;
