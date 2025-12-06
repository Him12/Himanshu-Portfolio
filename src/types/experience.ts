export interface ExperienceType {
  id: number;
  role: string;
  company: string;
  logo_url?: string;
  start_date: string;
  end_date?: string;
  responsibilities: string[];
  achievements: string[];
  tech_used: string[];
  order_index: number;
}
