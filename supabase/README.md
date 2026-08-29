# Supabase setup (admin CMS)

The public site works without Supabase (built-in catalog). Admin editing needs a project.

1. Create a project at [supabase.com](https://supabase.com).
2. SQL editor: run `001_init.sql`, `002_grant_is_admin.sql`, `003_admin_email.sql`, then `004_seo.sql`.
3. SQL editor: run `supabase/seed_admin.sql` once. That creates the Auth login for `shoaib.octachat@gmail.com` (password is in that file). If Auth → Users already has that email, the script resets the password instead of duplicating the user.

4. Project Settings → API: copy URL and anon key into `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

5. Restart `npm run dev`, open `/admin/login`, then Overview → **Copy built-in catalog into Supabase**.

Do not put the service role key in the Next.js client. Visitor analytics stay in Google Analytics / Search Console, not in these tables.

Privacy, Terms, About, and Contact can be edited in Admin → Pages (meta tags, keywords, publish, index). Admin URLs are never indexed.
