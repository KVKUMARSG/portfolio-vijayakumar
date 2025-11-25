import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">Certifications</h1>
                <p className="text-gray-400 mb-12 max-w-2xl">
                    Continuous learning is at the core of my professional journey. Here are the certifications I've earned to stay ahead in the industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {portfolioData.certifications.map((cert, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="card flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                                <p className="text-sm text-gray-500">{cert.issuer}</p>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#27272a]">
                                <span className="text-xs font-semibold text-blue-500 bg-blue-500/10 px-3 py-1 rounded-full">
                                    Verified
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Certifications;
