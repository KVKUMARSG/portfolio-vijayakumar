import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Certifications = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="section-title text-center mb-8">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioData.certifications.map((cert, idx) => (
                    <motion.div
                        key={cert.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{cert.name}</h3>
                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
