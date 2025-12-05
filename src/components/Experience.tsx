import { useState, useEffect } from 'react';
import { Calendar, MapPin, Download } from 'lucide-react';
import { supabase, Experience as ExperienceType } from '../lib/supabase';

export function Experience() {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    try {
      const { data, error } = await supabase
        .from('experiences')
        .select('*')
        .order('start_date', { ascending: false });

      if (error) throw error;
      setExperiences(data || []);
    } catch (error) {
      console.error('Error fetching experiences:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            My professional journey and contributions
          </p>

          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : experiences.length === 0 ? (
          <div className="text-center py-20">
            <Calendar className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Experience details coming soon!
            </p>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={exp.id}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  } items-center animate-fade-in-up`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10"></div>

                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'} mb-8 md:mb-0 w-full`}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                          <div className="flex items-center mb-2 space-x-2">
                            <Calendar className="text-blue-600 dark:text-cyan-400" size={18} />
                            <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                              {formatDate(exp.start_date)} - {exp.end_date ? formatDate(exp.end_date) : 'Present'}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-1">
                            {exp.role}
                          </h3>
                          <p className="text-lg text-blue-600 dark:text-cyan-400 font-semibold mb-2">
                            {exp.company}
                          </p>
                        </div>
                        {exp.logo_url && (
                          <img
                            src={exp.logo_url}
                            alt={exp.company}
                            className="w-16 h-16 rounded-lg object-contain bg-white"
                          />
                        )}
                      </div>

                      {exp.responsibilities.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Key Responsibilities
                          </h4>
                          <ul className={`space-y-2 text-gray-600 dark:text-gray-400 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            {exp.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start">
                                <span className="mr-2">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.achievements.length > 0 && (
                        <div className="mb-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-lg">
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                            Achievements
                          </h4>
                          <ul className={`space-y-1 text-gray-600 dark:text-gray-400 text-sm ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>• {achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.tech_used.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">
                            Technologies Used
                          </h4>
                          <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                            {exp.tech_used.map((tech, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-cyan-400 text-xs font-semibold rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 md:hidden"></div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
