-- Allow this email to use /admin after the Auth user exists.
insert into public.admin_emails (email)
values ('shoaib.octachat@gmail.com')
on conflict (email) do nothing;
