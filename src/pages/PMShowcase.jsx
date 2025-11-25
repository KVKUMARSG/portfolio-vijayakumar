import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolioData';

const PmShowcase = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="section-title text-center mb-8">PM Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.caseStudies.map((project, index) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="card h-full overflow-hidden hover:shadow-xl hover:shadow-blue-500/10"
                    >
                        <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
                            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="bg-blue-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                        <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                        <div className="pt-4 border-t border-gray-700">
                            <p className="text-sm text-blue-400 font-medium flex items-center gap-2">
                                <span>{project.outcome}</span>
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default PmShowcase;
