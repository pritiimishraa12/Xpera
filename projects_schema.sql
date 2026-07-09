-- Projects Table Definition

CREATE TABLE projects (
  id uuid default gen_random_uuid() primary key,
  organization_id uuid references profiles(id) not null,
  title text not null,
  description text,
  type text,
  status text default 'Active',
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Policies

-- Everyone can view active projects
CREATE POLICY "Anyone can view projects" ON projects
  FOR SELECT USING (true);

-- Organizations can insert their own projects
CREATE POLICY "Organizations can insert their own projects" ON projects
  FOR INSERT WITH CHECK (auth.uid() = organization_id);

-- Organizations can update their own projects
CREATE POLICY "Organizations can update their own projects" ON projects
  FOR UPDATE USING (auth.uid() = organization_id);

-- Organizations can delete their own projects
CREATE POLICY "Organizations can delete their own projects" ON projects
  FOR DELETE USING (auth.uid() = organization_id);
