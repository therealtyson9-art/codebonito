export type UserRole = "user" | "creator";
export type PriceTier = "free" | "pro";
export type TemplateStatus = "draft" | "published" | "rejected";
export type SubscriptionPlan = "free" | "pro";
export type EarningStatus = "pending" | "paid";

export interface Profile {
  id: string;
  email: string;
  name: string | null;
  avatar_url: string | null;
  role: UserRole;
  stripe_customer_id: string | null;
  created_at: string;
}

export interface Template {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  category: string;
  style: string | null;
  platforms: string[];
  creator_id: string;
  price_tier: PriceTier;
  downloads_count: number;
  preview_url: string | null;
  preview_mobile_url: string | null;
  manifest_json: Record<string, unknown> | null;
  tokens_json: Record<string, unknown> | null;
  status: TemplateStatus;
  created_at: string;
  updated_at: string;
  /** URL to live demo page, if available (not stored in DB) */
  demo_url?: string | null;
}

export interface Subscription {
  id: string;
  user_id: string;
  stripe_subscription_id: string | null;
  plan: SubscriptionPlan;
  status: string;
  current_period_start: string | null;
  current_period_end: string | null;
}

export interface Download {
  id: string;
  user_id: string;
  template_id: string;
  downloaded_at: string;
}

export interface CreatorEarning {
  id: string;
  creator_id: string;
  template_id: string;
  amount: number;
  period_start: string;
  period_end: string;
  status: EarningStatus;
}
