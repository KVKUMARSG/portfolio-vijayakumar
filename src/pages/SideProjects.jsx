import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const SideProjects = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="section-title text-center mb-8">Side Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioData.sideProjects.map((proj, idx) => (
                    <motion.div
                        key={proj.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                    >
                        <div className="text-4xl mb-4">{proj.emoji}</div>
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{proj.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{proj.description}</p>
                        <a href={proj.link} className="inline-block mt-2 text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Learn More</a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default SideProjects;
