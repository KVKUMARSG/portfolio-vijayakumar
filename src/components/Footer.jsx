import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Linkedin, Mail, Twitter, Globe } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      url: portfolioData.personalInfo.linkedin,
      label: "LinkedIn",
      color: "from-blue-600 to-blue-400",
      hoverColor: "hover:from-blue-700 hover:to-blue-500"
    },
    {
      icon: Twitter,
      url: "https://twitter.com/vijaykm",
      label: "Twitter",
      color: "from-sky-500 to-cyan-400",
      hoverColor: "hover:from-sky-600 hover:to-cyan-500"
    },
    {
      icon: Mail,
      url: `mailto:${portfolioData.personalInfo.email}`,
      label: "Email",
      color: "from-red-500 to-pink-400",
      hoverColor: "hover:from-red-600 hover:to-pink-500"
    },
    {
      icon: Globe,
      url: portfolioData.personalInfo.notion,
      label: "Portfolio",
      color: "from-purple-500 to-indigo-400",
      hoverColor: "hover:from-purple-600 hover:to-indigo-500"
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 py-16 mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h3>
          <div className="flex justify-center items-center gap-16 md:gap-24 lg:gap-32 flex-wrap max-w-5xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative group bg-gradient-to-r ${social.color} ${social.hoverColor} p-5 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl`}
                aria-label={social.label}
              >
                <social.icon size={32} className="text-white" />
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                {portfolioData.personalInfo.name}
              </span>
            </h3>
            <p className="text-gray-400 max-w-md">
              {portfolioData.personalInfo.title}
            </p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} {portfolioData.personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Built with passion using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
