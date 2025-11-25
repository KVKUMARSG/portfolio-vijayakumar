import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Linkedin, Mail, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, url: portfolioData.personalInfo.linkedin, label: "LinkedIn", color: "bg-blue-600" },
    { icon: Twitter, url: "https://twitter.com/vijaykm", label: "Twitter", color: "bg-sky-500" },
    { icon: Mail, url: `mailto:${portfolioData.personalInfo.email}`, label: "Email", color: "bg-red-500" },
    { icon: Globe, url: portfolioData.personalInfo.notion, label: "Portfolio", color: "bg-purple-600" },
  ];

  return (
    <footer className="bg-white border-t border-gray-200 py-12 mt-20">
      <div className="container mx-auto px-6">
        {/* Social Media Icons */}
        <div className="text-center mb-10">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Let's Connect
          </h3>
          <div className="flex justify-center items-center gap-12 md:gap-16 lg:gap-24 flex-wrap">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${social.color} p-4 rounded-full text-white hover:scale-110 transition-all shadow-lg`}
                aria-label={social.label}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-200 pt-6">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold gradient-text">
              {portfolioData.personalInfo.name}
            </h3>
            <p className="text-gray-600 text-sm">
              {portfolioData.personalInfo.title}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-xs mt-1">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
