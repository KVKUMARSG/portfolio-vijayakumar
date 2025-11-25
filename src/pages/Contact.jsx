import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="section-title text-center mb-8">Contact</h2>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md"
            >
                <p className="text-center text-gray-600 mb-6">Feel free to reach out via any of the methods below or send me a message.</p>
                <div className="flex flex-col space-y-4">
                    <a href={`mailto:${portfolioData.personalInfo.email}`} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                        <Mail className="mr-2" /> {portfolioData.personalInfo.email}
                    </a>
                    <a href={`tel:${portfolioData.personalInfo.phone}`} className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                        <Phone className="mr-2" /> {portfolioData.personalInfo.phone}
                    </a>
                    <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                        <Linkedin className="mr-2" /> LinkedIn
                    </a>
                </div>
                {/* Simple contact form (mailto) */}
                <form className="mt-8" action="mailto:kvkumarsg@gmail.com" method="POST" encType="text/plain">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input type="text" name="name" placeholder="Your Name" required className="border border-gray-300 rounded p-2" />
                        <input type="email" name="email" placeholder="Your Email" required className="border border-gray-300 rounded p-2" />
                    </div>
                    <textarea name="message" rows="4" placeholder="Your Message" required className="w-full border border-gray-300 rounded p-2 mt-4"></textarea>
                    <button type="submit" className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                        Send Message
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default Contact;
