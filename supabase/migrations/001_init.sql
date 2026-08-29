-- Project Home Calc — run this in the Supabase SQL editor once.
-- Then: Authentication → add your admin user, then insert that email into admin_emails.

create extension if not exists pgcrypto;

create table if not exists public.admin_emails (
  email text primary key,
  created_at timestamptz not null default now()
);

create table if not exists public.categories (
  slug text primary key,
  name text not null,
  description text not null default '',
  sort_order int not null default 0
);

create table if not exists public.tools (
  slug text primary key,
  category_slug text not null references public.categories (slug) on update cascade,
  name text not null,
  short_description text not null default '',
  intro text not null default '',
  synonyms text[] not null default '{}',
  formula_explanation text[] not null default '{}',
  methodology text not null default '',
  worked_example jsonb not null default '{"title":"","steps":[]}',
  faq jsonb not null default '[]',
  related_tools text[] not null default '{}',
  related_guides text[] not null default '{}',
  status text not null default 'published' check (status in ('draft', 'published')),
  updated_at date not null default current_date
);

create table if not exists public.guides (
  slug text primary key,
  title text not null,
  description text not null default '',
  intro text not null default '',
  sections jsonb not null default '[]',
  faq jsonb not null default '[]',
  related_tools text[] not null default '{}',
  status text not null default 'published' check (status in ('draft', 'published')),
  updated_at date not null default current_date
);

create table if not exists public.site_pages (
  slug text primary key,
  title text not null,
  body text not null default '',
  updated_at date not null default current_date
);

create table if not exists public.site_settings (
  key text primary key,
  value jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_email text,
  action text not null,
  entity_type text not null,
  entity_id text not null,
  detail text,
  created_at timestamptz not null default now()
);

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.admin_emails
    where lower(email) = lower(coalesce(auth.jwt() ->> 'email', ''))
  );
$$;

alter table public.categories enable row level security;
alter table public.tools enable row level security;
alter table public.guides enable row level security;
alter table public.site_pages enable row level security;
alter table public.site_settings enable row level security;
alter table public.audit_log enable row level security;
alter table public.admin_emails enable row level security;

drop policy if exists "public read categories" on public.categories;
create policy "public read categories" on public.categories for select using (true);

drop policy if exists "public read published tools" on public.tools;
create policy "public read published tools" on public.tools for select using (status = 'published');

drop policy if exists "public read published guides" on public.guides;
create policy "public read published guides" on public.guides for select using (status = 'published');

drop policy if exists "public read pages" on public.site_pages;
create policy "public read pages" on public.site_pages for select using (true);

drop policy if exists "admin all categories" on public.categories;
create policy "admin all categories" on public.categories for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin all tools" on public.tools;
create policy "admin all tools" on public.tools for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin all guides" on public.guides;
create policy "admin all guides" on public.guides for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin all pages" on public.site_pages;
create policy "admin all pages" on public.site_pages for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin read settings" on public.site_settings;
create policy "admin read settings" on public.site_settings for select using (public.is_admin());

drop policy if exists "admin write settings" on public.site_settings;
create policy "admin write settings" on public.site_settings for all using (public.is_admin()) with check (public.is_admin());

drop policy if exists "admin read audit" on public.audit_log;
create policy "admin read audit" on public.audit_log for select using (public.is_admin());

drop policy if exists "admin insert audit" on public.audit_log;
create policy "admin insert audit" on public.audit_log for insert with check (public.is_admin());

drop policy if exists "admin read allowlist" on public.admin_emails;
create policy "admin read allowlist" on public.admin_emails for select using (public.is_admin());

grant execute on function public.is_admin() to anon, authenticated;
