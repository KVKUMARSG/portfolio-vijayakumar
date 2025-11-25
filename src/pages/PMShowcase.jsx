import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const PMShowcase = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">PM Show Case</h1>
                <p className="text-gray-400 mb-12 max-w-2xl">
                    Detailed teardowns and case studies showcasing product strategy, user experience analysis, and business outcomes.
                </p>

                <div className="grid grid-cols-1 gap-12">
                    {portfolioData.pmShowcase.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="card p-0 overflow-hidden flex flex-col md:flex-row"
                        >
                            <div className="md:w-1/2 h-64 md:h-auto relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-8 md:w-1/2 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                                <p className="text-gray-400 mb-6 text-lg">{project.description}</p>

                                <div className="mb-6">
                                    <h4 className="text-sm uppercase tracking-wider text-gray-500 font-semibold mb-2">Key Outcome</h4>
                                    <p className="text-blue-400 font-medium text-lg">{project.outcome}</p>
                                </div>

                                <button className="self-start border border-white/20 hover:bg-white/5 text-white px-6 py-2 rounded-lg transition-colors">
                                    Read Full Case Study
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default PMShowcase;
