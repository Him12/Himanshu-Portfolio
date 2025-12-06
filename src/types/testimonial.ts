export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  photo_url?: string;
  period?: string;       // Q2 2025 – Q3 2025
  category?: string;     // ACE Review / Manager Review / Client Appreciation
}
