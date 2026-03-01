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
    templates: 5,
    description: "Access 5 free templates",
  },
  pro: {
    name: "Pro",
    price: 5,
    templates: Infinity,
    description: "Unlimited access to all templates",
  },
} as const;
