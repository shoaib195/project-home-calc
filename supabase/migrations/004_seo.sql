-- SEO + visibility fields. Safe to re-run.

alter table public.tools add column if not exists meta_title text not null default '';
alter table public.tools add column if not exists meta_description text not null default '';
alter table public.tools add column if not exists meta_keywords text not null default '';
alter table public.tools add column if not exists robots_index boolean not null default true;

alter table public.guides add column if not exists meta_title text not null default '';
alter table public.guides add column if not exists meta_description text not null default '';
alter table public.guides add column if not exists meta_keywords text not null default '';
alter table public.guides add column if not exists robots_index boolean not null default true;

alter table public.site_pages add column if not exists path text not null default '';
alter table public.site_pages add column if not exists meta_title text not null default '';
alter table public.site_pages add column if not exists meta_description text not null default '';
alter table public.site_pages add column if not exists meta_keywords text not null default '';
alter table public.site_pages add column if not exists robots_index boolean not null default true;
alter table public.site_pages add column if not exists status text not null default 'published';

do $$
begin
  if not exists (
    select 1 from pg_constraint where conname = 'site_pages_status_check'
  ) then
    alter table public.site_pages
      add constraint site_pages_status_check check (status in ('draft', 'published'));
  end if;
end $$;
