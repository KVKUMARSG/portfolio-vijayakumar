import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Speaking = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="section-title text-center mb-8">Speaking Engagements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {portfolioData.speaking.map((talk, idx) => (
                    <motion.div
                        key={talk.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                        className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
                    >
                        <h3 className="text-lg font-semibold mb-2 text-gray-800">{talk.title}</h3>
                        <p className="text-sm text-gray-600 mb-1"><strong>Event:</strong> {talk.event}</p>
                        <p className="text-sm text-gray-600 mb-1"><strong>Date:</strong> {talk.date}</p>
                        <p className="text-sm text-gray-600 mb-3"><strong>Topics:</strong> {talk.topics.join(', ')}</p>
                        <a href="#" className="inline-block text-blue-600 hover:underline">Request a Talk →</a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Speaking;
