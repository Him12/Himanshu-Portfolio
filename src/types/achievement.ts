export interface AchievementType {
  id: string;
  title: string;
  description: string;
  date: string;
  featured?: boolean;
  image_url?: string;
  file_url?: string;

  /** NEW FIELD FOR SORTING */
  priority?: number;
}
