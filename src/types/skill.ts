export interface Skill {
  id: number;
  name: string;
  category: "technical" | "functional" | "tools" | "soft";
  proficiency: number; // 0–100
  order_index: number;
}
