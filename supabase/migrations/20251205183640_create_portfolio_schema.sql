/*
  # Portfolio Database Schema
  
  ## Overview
  This migration creates the complete database schema for Himanshu Kumar's portfolio website.
  
  ## New Tables
  
  ### 1. projects
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `image_url` (text)
  - `tech_stack` (text[])
  - `live_url` (text, nullable)
  - `github_url` (text, nullable)
  - `category` (text) - 'client', 'freelance', 'startup', 'personal'
  - `featured` (boolean)
  - `order_index` (integer)
  - `created_at` (timestamptz)
  
  ### 2. startups
  - `id` (uuid, primary key)
  - `name` (text)
  - `logo_url` (text, nullable)
  - `vision` (text)
  - `problem` (text)
  - `features` (text[])
  - `screenshots` (text[])
  - `website_url` (text, nullable)
  - `achievements` (text[])
  - `roadmap` (text[])
  - `customer_impact` (text)
  - `order_index` (integer)
  - `created_at` (timestamptz)
  
  ### 3. skills
  - `id` (uuid, primary key)
  - `name` (text)
  - `category` (text) - 'technical', 'functional', 'tools', 'soft'
  - `proficiency` (integer) - 0-100
  - `icon` (text, nullable)
  - `order_index` (integer)
  
  ### 4. experiences
  - `id` (uuid, primary key)
  - `company` (text)
  - `logo_url` (text, nullable)
  - `role` (text)
  - `responsibilities` (text[])
  - `tech_used` (text[])
  - `achievements` (text[])
  - `start_date` (date)
  - `end_date` (date, nullable)
  - `order_index` (integer)
  
  ### 5. achievements
  - `id` (uuid, primary key)
  - `title` (text)
  - `description` (text)
  - `image_url` (text, nullable)
  - `date` (date)
  - `featured` (boolean)
  - `order_index` (integer)
  
  ### 6. testimonials
  - `id` (uuid, primary key)
  - `name` (text)
  - `role` (text)
  - `company` (text)
  - `photo_url` (text, nullable)
  - `content` (text)
  - `rating` (integer) - 1-5
  - `order_index` (integer)
  - `created_at` (timestamptz)
  
  ### 7. blog_posts
  - `id` (uuid, primary key)
  - `title` (text)
  - `slug` (text, unique)
  - `excerpt` (text)
  - `content` (text)
  - `image_url` (text, nullable)
  - `tags` (text[])
  - `published` (boolean)
  - `created_at` (timestamptz)
  - `updated_at` (timestamptz)
  
  ### 8. gallery_images
  - `id` (uuid, primary key)
  - `url` (text)
  - `caption` (text, nullable)
  - `category` (text) - 'travel', 'events', 'professional', 'startup'
  - `order_index` (integer)
  - `created_at` (timestamptz)
  
  ### 9. contact_submissions
  - `id` (uuid, primary key)
  - `name` (text)
  - `email` (text)
  - `subject` (text, nullable)
  - `message` (text)
  - `created_at` (timestamptz)
  
  ## Security
  - Enable RLS on all tables
  - Public read access for portfolio content (projects, startups, skills, etc.)
  - Authenticated admin access for managing content
  - Contact submissions are write-only for public, read-only for admin
*/

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text DEFAULT '',
  tech_stack text[] DEFAULT '{}',
  live_url text,
  github_url text,
  category text DEFAULT 'personal',
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create startups table
CREATE TABLE IF NOT EXISTS startups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  logo_url text,
  vision text NOT NULL,
  problem text NOT NULL,
  features text[] DEFAULT '{}',
  screenshots text[] DEFAULT '{}',
  website_url text,
  achievements text[] DEFAULT '{}',
  roadmap text[] DEFAULT '{}',
  customer_impact text DEFAULT '',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE startups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view startups"
  ON startups FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  proficiency integer DEFAULT 70,
  icon text,
  order_index integer DEFAULT 0
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view skills"
  ON skills FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create experiences table
CREATE TABLE IF NOT EXISTS experiences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company text NOT NULL,
  logo_url text,
  role text NOT NULL,
  responsibilities text[] DEFAULT '{}',
  tech_used text[] DEFAULT '{}',
  achievements text[] DEFAULT '{}',
  start_date date NOT NULL,
  end_date date,
  order_index integer DEFAULT 0
);

ALTER TABLE experiences ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view experiences"
  ON experiences FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create achievements table
CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  image_url text,
  date date DEFAULT CURRENT_DATE,
  featured boolean DEFAULT false,
  order_index integer DEFAULT 0
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view achievements"
  ON achievements FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text NOT NULL,
  photo_url text,
  content text NOT NULL,
  rating integer DEFAULT 5,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view testimonials"
  ON testimonials FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  tags text[] DEFAULT '{}',
  published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  url text NOT NULL,
  caption text,
  category text DEFAULT 'professional',
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can view gallery images"
  ON gallery_images FOR SELECT
  TO anon, authenticated
  USING (true);

-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);