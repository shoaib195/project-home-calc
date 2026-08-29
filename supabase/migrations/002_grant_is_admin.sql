-- Safe to run if 001 was applied earlier without this grant.
grant execute on function public.is_admin() to anon, authenticated;
