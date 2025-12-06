import { Mail, Phone, MapPin, MessageSquare, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Let's discuss your next project or collaboration
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">

          {/* Email */}
          <a
            href="mailto:himanshudubey120@gmail.com"
            className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Email</h4>
              <p className="text-gray-600 dark:text-gray-400">himanshudubey120@gmail.com</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+918377861214"
            className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all group"
          >
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg group-hover:scale-110 transition-transform">
              <Phone className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Phone</h4>
              <p className="text-gray-600 dark:text-gray-400">+91 8377861214</p>
            </div>
          </a>

          {/* Location */}
          <div className="flex items-start space-x-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg">
              <MapPin className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Location</h4>
              <p className="text-gray-600 dark:text-gray-400">Delhi, India</p>
            </div>
          </div>

          {/* WhatsApp */}
          <a
            href="https://wa.me/+918377861214"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg hover:shadow-2xl transition-all group text-white"
          >
            <div className="p-3 bg-white/20 rounded-lg group-hover:scale-110 transition-transform">
              <MessageSquare className="text-white" size={24} />
            </div>
            <div>
              <h4 className="font-semibold mb-1">WhatsApp</h4>
              <p className="opacity-90">Click to chat</p>
            </div>
          </a>

          {/* Social Profiles */}
          <div className="p-6 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl text-white">
            <h4 className="text-xl font-bold mb-4">Connect on Social Media</h4>
            <div className="flex space-x-4">

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/himanshu-kumar-93518b173/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/kumarhimanshu8371/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Instagram size={24} />
              </a>

              {/* Twitter */}
              <a
                href="https://x.com/Himanshu837786"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Twitter size={24} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100004304493332"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-all transform hover:scale-110"
              >
                <Facebook size={24} />
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
