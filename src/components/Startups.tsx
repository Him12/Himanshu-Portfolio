import { useState, useEffect } from "react";
import { Rocket, Target, TrendingUp, Users, ExternalLink } from "lucide-react";
import { Startup } from "../types/startup";

export function Startups() {
  const [startups, setStartups] = useState<Startup[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStartups();
  }, []);

  // Load startups from public/startups.json
  const fetchStartups = async () => {
    try {
      const response = await fetch("/startups.json");
      const data = await response.json();

      const sorted = data.sort(
        (a: Startup, b: Startup) => a.order_index - b.order_index
      );

      setStartups(sorted);
    } catch (error) {
      console.error("Error loading startups:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="startups" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            My Startups
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building innovative solutions for real-world problems
          </p>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          </div>
        ) : startups.length === 0 ? (
          <div className="text-center py-20">
            <Rocket className="mx-auto mb-4 text-gray-400" size={48} />
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Startup details coming soon!
            </p>
          </div>
        ) : (
          
          /* Startup Cards */
          <div className="space-y-16">
            {startups.map((startup, index) => (
              <div
                key={startup.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 items-center animate-fade-in-up`}
              >
                
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex items-center space-x-4">
                    {startup.logo_url && (
                      <img
                        src={startup.logo_url}
                        alt={startup.name}
                        className="w-16 h-16 rounded-xl"
                      />
                    )}
                    <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                      {startup.name}
                    </h3>
                  </div>

                  {/* Vision + Problem */}
                  <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-2xl">
                    <div className="flex items-start space-x-3 mb-4">
                      <Target className="text-blue-600 dark:text-cyan-400 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                          Vision
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{startup.vision}</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <TrendingUp className="text-blue-600 dark:text-cyan-400 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                          Problem Solving
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">{startup.problem}</p>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  {startup.features.length > 0 && (
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">
                        Key Features
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {startup.features.map((feature: string, i: number) => (
                          <div
                            key={i}
                            className="flex items-center space-x-2 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {startup.achievements.length > 0 && (
                    <div className="p-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl text-white">
                      <h4 className="font-bold mb-2 flex items-center">
                        <TrendingUp size={20} className="mr-2" />
                        Achievements
                      </h4>
                      <ul className="space-y-1">
                        {startup.achievements.map((achievement: string, i: number) => (
                          <li key={i} className="text-sm opacity-90">
                            • {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Customer Impact */}
                  {startup.customer_impact && (
                    <div className="p-4 bg-white dark:bg-gray-800 rounded-xl border-2 border-blue-200 dark:border-blue-800">
                      <div className="flex items-start space-x-3">
                        <Users className="text-blue-600 dark:text-cyan-400 mt-1" size={24} />
                        <div>
                          <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">
                            Customer Impact
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {startup.customer_impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Website Button */}
                  {startup.website_url && (
                    <a
                      href={startup.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      <span>Visit Website</span>
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Screenshots Section */}
                <div className="flex-1">
                  {startup.screenshots.length > 0 ? (
                    <div className="grid grid-cols-2 gap-4">
                      {startup.screenshots.slice(0, 4).map((s, i) => (
                        <div
                          key={i}
                          className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:scale-105"
                        >
                          <img
                            src={s}
                            alt={`${startup.name} screenshot ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-950 dark:to-cyan-950 rounded-xl flex items-center justify-center">
                      <Rocket className="text-blue-600 dark:text-cyan-400" size={64} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        )}
      </div>
    </section>
  );
}
