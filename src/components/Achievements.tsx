import { useState, useEffect } from 'react';
import { Award, Star, Trophy } from 'lucide-react';
import { supabase, Achievement as AchievementType } from '../lib/supabase';

export function Achievements() {
  const [achievements, setAchievements] = useState<AchievementType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAchievements();
  }, []);

  const fetchAchievements = async () => {
    try {
      const { data, error } = await supabase
        .from('achievements')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      setAchievements(data || []);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    } finally {
      setLoading(false);
    }
  };

  const featuredAchievement = achievements.find(a => a.featured);
  const regularAchievements = achievements.filter(a => !a.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  };

  return (
    <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Milestones and certifications along the journey
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
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
            {featuredAchievement && (
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 p-1 animate-fade-in">
                <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12">
                  <div className="flex items-center justify-center mb-6">
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full">
                      <Star className="text-white" size={40} />
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <span className="inline-block px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold mb-4">
                      Featured Achievement
                    </span>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {featuredAchievement.title}
                    </h3>
                    <p className="text-blue-600 dark:text-cyan-400 font-semibold">
                      {formatDate(featuredAchievement.date)}
                    </p>
                  </div>

                  <p className="text-center text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto mb-8">
                    {featuredAchievement.description}
                  </p>

                  {featuredAchievement.image_url && (
                    <div className="max-w-2xl mx-auto">
                      <img
                        src={featuredAchievement.image_url}
                        alt={featuredAchievement.title}
                        className="w-full rounded-2xl shadow-2xl"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {regularAchievements.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularAchievements.map((achievement, index) => (
                  <div
                    key={achievement.id}
                    className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                        <Award className="text-white" size={24} />
                      </div>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                        {formatDate(achievement.date)}
                      </span>
                    </div>

                    {achievement.image_url && (
                      <div className="mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 aspect-video">
                        <img
                          src={achievement.image_url}
                          alt={achievement.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}

                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {achievement.title}
                    </h3>

                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {achievement.description}
                    </p>
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
