import React from 'react';
import { motion } from 'framer-motion';

const PlaceholderPage = ({ title, description, children }) => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="section-title">{title}</h1>
                <p className="text-gray-400 mb-8 max-w-2xl">{description}</p>
                <div className="bg-[#121212] border border-[#27272a] rounded-xl p-8 min-h-[300px] flex items-center justify-center">
                    {children ? children : <p className="text-gray-500 italic">Content coming soon...</p>}
                </div>
            </motion.div>
        </div>
    );
};

export default PlaceholderPage;
