import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  category: string;
  featured: boolean;
  order_index: number;
}

export interface Startup {
  id: string;
  name: string;
  logo_url?: string;
  vision: string;
  problem: string;
  features: string[];
  screenshots: string[];
  website_url?: string;
  achievements: string[];
  roadmap: string[];
  customer_impact: string;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  logo_url?: string;
  role: string;
  responsibilities: string[];
  tech_used: string[];
  achievements: string[];
  start_date: string;
  end_date?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  date: string;
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  photo_url?: string;
  content: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image_url?: string;
  tags: string[];
  published: boolean;
  created_at: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  caption?: string;
  category: string;
}

export interface ContactSubmission {
  name: string;
  email: string;
  subject?: string;
  message: string;
}
