import { ArrowDown, Download, Briefcase, Mail } from 'lucide-react';

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 dark:from-gray-900 dark:via-blue-950 dark:to-gray-900">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="mb-8 inline-block animate-fade-in-down">
          <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse-slow"></div>
            <img
              src="./images/photo.jpg"
              alt="Himanshu Kumar"
              className="relative w-full h-full rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-2xl"
            />
          </div>
        </div>

        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent leading-tight">
            Himanshu Kumar
          </h1>

          <div className="space-y-2 mb-8">
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-semibold">
              Netsuite Technical Consultant
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
              NetSuite Developer | Software Engineer | Startup Builder
            </p>
            <p className="text-base md:text-lg text-gray-500 dark:text-gray-500 font-medium">
              Problem Solver | Innovator | Creator
            </p>
          </div>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
            Transforming business processes through innovative technology solutions.
            Passionate about building scalable applications and turning ideas into reality.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => scrollToSection('#contact')}
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </button>

            <button
              onClick={() => scrollToSection('#work')}
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 flex items-center space-x-2"
            >
              <Briefcase size={20} />
              <span>View Projects</span>
            </button>

            <a
              href="./Resume_Himanshu_Netsuite_Technical_Consultant.pdf"
              download
              className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('#about')}
          className="animate-bounce mt-8 inline-flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="text-blue-600 dark:text-cyan-400" size={24} />
        </button>
      </div>
    </section>
  );
}
