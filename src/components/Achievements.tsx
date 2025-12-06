import { useState, useEffect } from "react";
import { Award, Star, Trophy } from "lucide-react";
import { AchievementType } from "../types/achievement";

export function Achievements() {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const response = await fetch("/achievements.json");
      const data = await response.json();

      // Sort by date DESC
      const sorted = data
  .sort((a: AchievementType, b: AchievementType) => {
    // Priority first
    if (a.priority !== undefined && b.priority !== undefined) {
      return a.priority - b.priority;
    }
    if (a.priority !== undefined) return -1;
    if (b.priority !== undefined) return 1;

    // Otherwise sort by date
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });


      setAchievements(sorted);
    } catch (error) {
      console.error("Error loading achievements:", error);
    } finally {
      setLoading(false);
    }
  };

  const featuredAchievement = achievements.find((a) => a.featured);
  const regularAchievements = achievements.filter((a) => !a.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Milestones, awards, and certifications along my journey
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : achievements.length === 0 ? (
          <div className="text-center py-20">
            <Trophy className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Achievement details coming soon!
            </p>
          </div>
        ) : (
          <div className="space-y-12">

            {/* Featured Achievement */}
            {featuredAchievement && (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-1 animate-fade-in">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-10">

                  <div className="flex justify-center mb-4">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full">
                      <Star className="text-white" size={40} />
                    </div>
                  </div>

                  <div className="text-center mb-4">
                    <span className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold mb-3">
                      Featured Achievement
                    </span>

                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {featuredAchievement.title}
                    </h3>

                    <p className="text-blue-600 dark:text-cyan-400 font-semibold mb-3">
                      {formatDate(featuredAchievement.date)}
                    </p>

                    <p className="text-gray-600 dark:text-gray-400 text-lg mb-6 max-w-2xl mx-auto">
                      {featuredAchievement.description}
                    </p>

                    {/* PDF Button */}
                    {featuredAchievement.file_url && (
                      <a
                        href={featuredAchievement.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all"
                      >
                        View Certificate (PDF)
                      </a>
                    )}
                  </div>

                  {/* Featured Image */}
                  {featuredAchievement.image_url && (
                    <div className="max-w-3xl mx-auto">
                      <img
                        src={featuredAchievement.image_url}
                        alt={featuredAchievement.title}
                        className="w-full rounded-2xl shadow-xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Regular Achievements */}
            {regularAchievements.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularAchievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 120}ms` }}
                  >

                    {/* Image */}
                    {achievement.image_url && (
                      <div className="mb-4 rounded-xl overflow-hidden shadow-md bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950">
                        <img
                          src={achievement.image_url}
                          alt={achievement.title}
                          className="w-full h-40 object-cover"
                        />
                      </div>
                    )}

                    {/* Icon + Date */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                        <Award className="text-white" size={24} />
                      </div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {formatDate(achievement.date)}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-1">
                      {achievement.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                      {achievement.description}
                    </p>

                    {/* PDF Button */}
                    {achievement.file_url && (
                      <a
                        href={achievement.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 mt-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow hover:shadow-xl transition-all"
                      >
                        View Certificate (PDF)
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
