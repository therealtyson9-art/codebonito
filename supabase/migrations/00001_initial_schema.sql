-- Code Bonito: Initial Schema

-- Profiles table (extends Supabase auth.users)
create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  avatar_url text,
  role text not null default 'user' check (role in ('user', 'creator')),
  stripe_customer_id text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Templates table
create table public.templates (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text,
  category text not null,
  style text,
  platforms text[] default '{}',
  creator_id uuid not null references public.profiles(id) on delete cascade,
  price_tier text not null default 'free' check (price_tier in ('free', 'pro')),
  downloads_count integer not null default 0,
  preview_url text,
  preview_mobile_url text,
  manifest_json jsonb,
  tokens_json jsonb,
  status text not null default 'draft' check (status in ('draft', 'published', 'rejected')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table public.templates enable row level security;

create policy "Anyone can view published templates"
  on public.templates for select
  using (status = 'published');

create policy "Creators can manage their own templates"
  on public.templates for all
  using (auth.uid() = creator_id);

-- Subscriptions table
create table public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  stripe_subscription_id text unique,
  plan text not null default 'free' check (plan in ('free', 'pro')),
  status text not null default 'active',
  current_period_start timestamptz,
  current_period_end timestamptz
);

alter table public.subscriptions enable row level security;

create policy "Users can view their own subscription"
  on public.subscriptions for select
  using (auth.uid() = user_id);

-- Downloads table
create table public.downloads (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles(id) on delete cascade,
  template_id uuid not null references public.templates(id) on delete cascade,
  downloaded_at timestamptz not null default now()
);

alter table public.downloads enable row level security;

create policy "Users can view their own downloads"
  on public.downloads for select
  using (auth.uid() = user_id);

create policy "Users can insert their own downloads"
  on public.downloads for insert
  with check (auth.uid() = user_id);

-- Creator earnings table
create table public.creator_earnings (
  id uuid primary key default gen_random_uuid(),
  creator_id uuid not null references public.profiles(id) on delete cascade,
  template_id uuid not null references public.templates(id) on delete cascade,
  amount integer not null default 0,
  period_start timestamptz not null,
  period_end timestamptz not null,
  status text not null default 'pending' check (status in ('pending', 'paid'))
);

alter table public.creator_earnings enable row level security;

create policy "Creators can view their own earnings"
  on public.creator_earnings for select
  using (auth.uid() = creator_id);

-- Function to create profile on signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, email, name, avatar_url)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();
