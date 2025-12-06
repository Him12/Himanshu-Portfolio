export interface Project {
  id: number;
  title: string;
  category: "client" | "startup" | "personal";
  description: string;
  tech_stack: string[];
  live_url?: string;
  github_url?: string;
  image_url?: string;
  featured?: boolean;
  order_index: number;
}
