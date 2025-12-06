import { Linkedin, Instagram, Twitter, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/himanshu-kumar-93518b173/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/kumarhimanshu8371/', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/Himanshu837786', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100004304493332', label: 'Facebook' },
    { icon: Youtube, href: 'https://www.youtube.com/@H_for_Himanshu_vlogs', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Startups', href: '#startups' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">

          {/* --- Profile Section --- */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Himanshu Kumar
            </h3>

            <p className="text-gray-400 mb-4">
              Techno-Functional Consultant | NetSuite Developer | Software Engineer & Startup Builder
            </p>

            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-2">
              <Mail size={16} />
              <span>himanshudubey120@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone size={16} />
              <span>+91 83778 61214</span>
            </div>
          </div>

          {/* --- Quick Links --- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* --- Social Links --- */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>

            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-gray-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 transition-all transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* --- Footer Bottom --- */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Himanshu Kumar. All rights reserved.</p>
          <p className="mt-2">Built with passion and innovation</p>
        </div>

      </div>
    </footer>
  );
}
