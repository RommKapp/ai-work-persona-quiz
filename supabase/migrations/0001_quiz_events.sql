create table if not exists public.quiz_events (
  id          bigserial primary key,
  session_id  uuid        not null,
  event_name  text        not null,
  persona_id  text,
  question_id text,
  option_id   text,
  device_type text,
  meta        jsonb,
  created_at  timestamptz not null default now()
);

create index if not exists quiz_events_event_name_idx on public.quiz_events (event_name);
create index if not exists quiz_events_session_id_idx on public.quiz_events (session_id);
create index if not exists quiz_events_created_at_idx on public.quiz_events (created_at desc);

alter table public.quiz_events enable row level security;

drop policy if exists "anon can insert events" on public.quiz_events;
create policy "anon can insert events"
  on public.quiz_events
  for insert
  to anon
  with check (true);
