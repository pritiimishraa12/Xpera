-- RUN THIS SNIPPET IN YOUR NEW SUPABASE PROJECT SQL EDITOR TO INITIALIZE THE DATABASE

-- Create a table for public profiles
create table profiles (
  id uuid references auth.users not null primary key,
  full_name text,
  email text,
  role text,
  college text,
  organization_name text,
  organization_type text,
  xp integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Turn on Row Level Security
alter table profiles enable row level security;

-- Policies for profiles

-- Everyone can read profiles
create policy "Public profiles are viewable by everyone." on profiles
  for select using (true);

-- Users can insert their own profile
create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

-- Users can update own profile
create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Ensure a trigger sets up the updated_at timestamp properly (Optional but typical)
