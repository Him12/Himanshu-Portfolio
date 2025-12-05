import { Code2, Rocket, Target, Lightbulb, Award, Heart } from 'lucide-react';

export function About() {
  const timeline = [
    {
      year: '2024',
      title: 'Senior NetSuite Consultant',
      description: 'Leading complex ERP implementations and customizations',
      icon: Award,
    },
    {
      year: '2022',
      title: 'Startup Founder',
      description: 'Launched multiple SaaS products',
      icon: Rocket,
    },
    {
      year: '2020',
      title: 'NetSuite Developer',
      description: 'Started journey in ERP development',
      icon: Code2,
    },
  ];

  const highlights = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Building solutions that make a real impact',
    },
    {
      icon: Lightbulb,
      title: 'Innovation First',
      description: 'Always exploring cutting-edge technologies',
    },
    {
      icon: Heart,
      title: 'User-Centric',
      description: 'Designing experiences that users love',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building the future, one solution at a time
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                My Journey
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                I'm a passionate technologist with a unique blend of technical expertise and business acumen.
                My journey in the tech world began with a fascination for solving complex problems, and it has
                evolved into a career dedicated to building innovative solutions that transform businesses.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                As a NetSuite Developer and Techno-Functional Consultant, I specialize in creating custom
                SuiteScripts, building microservices architectures, and implementing complex business processes
                in ERP systems. My expertise spans across SuiteScript 2.0/2.1, RESTful APIs, React, Node.js,
                and modern cloud technologies.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Beyond consulting, I'm an entrepreneur at heart. I've founded multiple startups, each aimed
                at solving real-world problems through technology. My passion lies in turning innovative ideas
                into scalable products that make a difference.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-1">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-1">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950 dark:to-cyan-950 rounded-xl">
                <div className="text-3xl font-bold text-blue-600 dark:text-cyan-400 mb-1">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Startups Founded</div>
              </div>
            </div>
          </div>

          <div className="space-y-8 animate-slide-in-right">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              What Drives Me
            </h3>

            <div className="space-y-4">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-800 hover:shadow-lg transition-all"
                  >
                    <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Tech Stack Highlights</h4>
              <div className="flex flex-wrap gap-2">
                {['NetSuite', 'SuiteScript', 'React', 'Node.js', 'TypeScript', 'Docker',
                  'Microservices', 'REST APIs', 'SvelteKit', 'PostgreSQL'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 animate-fade-in-up">
          <h3 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12">
            Career Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 to-cyan-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } flex-col`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} mb-4 md:mb-0`}>
                      <div className="inline-block p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all">
                        <div className="text-blue-600 dark:text-cyan-400 font-bold text-lg mb-2">
                          {item.year}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={28} />
                      </div>
                    </div>

                    <div className="flex-1"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
