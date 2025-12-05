import { useState, useEffect } from 'react';
import { Code2, Briefcase, Wrench, MessageCircle } from 'lucide-react';
import { supabase, Skill } from '../lib/supabase';

export function Skills() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const { data, error } = await supabase
        .from('skills')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setSkills(data || []);
    } catch (error) {
      console.error('Error fetching skills:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { name: 'technical', label: 'Technical Skills', icon: Code2, color: 'from-blue-600 to-cyan-500' },
    { name: 'functional', label: 'Functional Skills', icon: Briefcase, color: 'from-cyan-600 to-teal-500' },
    { name: 'tools', label: 'Tools & Platforms', icon: Wrench, color: 'from-teal-600 to-emerald-500' },
    { name: 'soft', label: 'Soft Skills', icon: MessageCircle, color: 'from-emerald-600 to-green-500' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A comprehensive toolkit for building amazing solutions
          </p>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <div className="space-y-12">
            {categories.map((category, catIndex) => {
              const categorySkills = getSkillsByCategory(category.name);
              const Icon = category.icon;

              if (categorySkills.length === 0) return null;

              return (
                <div
                  key={category.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${catIndex * 100}ms` }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl mr-4`}>
                      <Icon className="text-white" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {category.label}
                    </h3>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => (
                      <div
                        key={skill.id}
                        className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
                        style={{ animationDelay: `${(catIndex * 100) + (index * 50)}ms` }}
                      >
                        <div className="flex justify-between items-center mb-3">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </h4>
                          <span className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                            {skill.proficiency}%
                          </span>
                        </div>

                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                            style={{
                              width: `${skill.proficiency}%`,
                              animation: 'slideIn 1s ease-out'
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {!loading && skills.length === 0 && (
          <div className="text-center py-20">
            <Code2 className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Skills data coming soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
