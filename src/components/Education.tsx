import { GraduationCap, Calendar, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export interface EducationType {
  id: number;
  degree: string;
  institution: string;
  institution_url?: string;
  start_year: string;
  end_year: string;
  description?: string;
}

export function Education() {
  const [education, setEducation] = useState<EducationType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEducation();
  }, []);

  const fetchEducation = async () => {
    try {
      const response = await fetch("/education.json");
      const data = await response.json();
      setEducation(data);
    } catch (err) {
      console.error("Error loading education:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            My academic background & learning journey
          </p>
        </div>

        {loading ? (
          <div className="text-center py-10">
            <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                {/* Title row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <GraduationCap size={28} className="text-blue-600 dark:text-cyan-400" />
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                  </div>

                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={18} className="mr-1" />
                    {edu.start_year} - {edu.end_year}
                  </div>
                </div>

                {/* Institution Row */}
                <div className="flex items-center space-x-2 mb-2">
                  <p className="text-lg text-blue-600 dark:text-cyan-400 font-semibold">
                    {edu.institution}
                  </p>

                  {edu.institution_url && (
                    <a
                      href={edu.institution_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>

                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
