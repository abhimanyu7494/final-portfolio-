import React from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 relative overflow-hidden">
      
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full filter blur-3xl opacity-30 animate-blob top-0 left-1/4"></div>
        <div className="absolute w-72 h-72 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000 bottom-0 right-1/4"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-3">Abhimanyu</h2>
          <p className="text-gray-400">
            Creative Web & App Developer. I craft seamless experiences, clean code, and modern web designs.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:text-pink-500 transition-all duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-pink-500 transition-all duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-pink-500 transition-all duration-300">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-right">
          <h3 className="text-lg font-semibold text-white mb-3">Follow Me</h3>
          <div className="flex justify-center md:justify-end gap-5 text-3xl">
            {[{
              icon: <FaGithub />,
              link: "https://github.com/"
            },{
              icon: <FaLinkedin />,
              link: "https://www.linkedin.com/in/abhimanyu-kr-pandey-033946318?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            },{
              icon: <FaFacebook />,
              link: "https://www.facebook.com/abhimanyukumarpandey19/"
            },{
              icon: <FaInstagram />,
              link: "https://www.instagram.com/a.b_roflix19/?hl=en"
            }].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white hover:scale-125 transition-transform duration-300 drop-shadow-lg"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Abhimanyu. All rights reserved.
      </div>

      {/* Tailwind Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 8s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;