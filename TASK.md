# Code Bonito — Workstream A: Infrastructure

Build the foundation for a design template marketplace called "Code Bonito" (codebonito.com).

## Stack
- Next.js 15 (App Router)
- Supabase (Auth + DB + Storage)
- Stripe (Checkout + Webhooks)
- Tailwind CSS
- TypeScript
- Vercel deploy

## What to build (MVP):

### 1. Next.js 15 scaffold
- App Router, TypeScript, Tailwind
- Basic layout: navbar, footer, hero
- Pages: / (landing), /browse, /template/[id], /pricing, /dashboard, /upload, /login

### 2. Supabase Auth
- Google OAuth + GitHub OAuth
- Auth middleware (protected routes: /dashboard, /upload)
- User roles: "user" (default) and "creator"

### 3. DB Schema (Supabase/Postgres)
Tables:
- `profiles` (id, email, name, avatar_url, role, stripe_customer_id, created_at)
- `templates` (id, name, slug, description, category, style, platforms[], creator_id, price_tier, downloads_count, preview_url, preview_mobile_url, manifest_json, tokens_json, status [draft/published/rejected], created_at, updated_at)
- `subscriptions` (id, user_id, stripe_subscription_id, plan [free/pro], status, current_period_start, current_period_end)
- `downloads` (id, user_id, template_id, downloaded_at)
- `creator_earnings` (id, creator_id, template_id, amount, period_start, period_end, status [pending/paid])

### 4. Stripe Integration
- Products: Free tier + Pro ($5/month)
- Checkout session creation
- Webhook handler: checkout.session.completed, customer.subscription.updated, customer.subscription.deleted
- Subscription status sync to `subscriptions` table

### 5. Browse page
- Grid of template cards with preview images
- Filter by category and style
- Search
- Free users see 5 templates, Pro see all

### 6. Template detail page
- Preview images, description, platforms supported
- Download button (checks subscription)
- Download counter

### 7. Basic Creator Dashboard (/dashboard)
- List my templates + stats (downloads)
- Upload new template (form: name, description, category, style, platforms, upload .zip)

## Design
- Dark theme, modern, clean
- Brand: "Code Bonito" — make it look premium but developer-friendly
- Use shadcn/ui components

## Environment
- Create .env.local.example with all needed vars (NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY, STRIPE_SECRET_KEY, etc.)
- Create supabase/migrations/ for the schema

## DO NOT:
- Do NOT actually connect to Supabase or Stripe (no real keys). Just write the integration code with env vars.
- Do NOT overcomplicate. MVP = functional, not perfect.

When completely finished, run: openclaw system event --text "Done: Code Bonito scaffold complete — Next.js 15 + Supabase + Stripe + Auth + DB schema + Browse + Upload" --mode now
