import React from 'react';
import { motion } from 'framer-motion';
import { Mic, Users, Calendar, MapPin, Award } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Speaking = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 px-6 py-3 rounded-full border border-orange-500/30 mb-6">
                        <Mic className="text-orange-400" size={24} />
                        <span className="text-orange-300 font-semibold">Public Speaking & Workshops</span>
                    </div>
                    <h1 className="text-5xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                            Speaking Engagements
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Sharing knowledge and insights at conferences, workshops, and community events
                    </p>
                </div>

                <div className="space-y-8">
                    {portfolioData.speaking.map((talk, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-all">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="md:w-2/3">
                                        <h3 className="text-3xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                                            {talk.title}
                                        </h3>
                                        <p className="text-gray-300 text-lg mb-4">{talk.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {talk.topics.map((topic, i) => (
                                                <span key={i} className="bg-orange-500/20 text-orange-300 text-sm px-4 py-1.5 rounded-full border border-orange-500/30">
                                                    {topic}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="md:w-1/3 flex flex-col gap-4">
                                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Users className="text-blue-400" size={20} />
                                                <span className="text-sm font-semibold text-gray-400">Event</span>
                                            </div>
                                            <p className="text-white font-bold">{talk.event}</p>
                                        </div>
                                        <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                                            <div className="flex items-center gap-3 mb-2">
                                                <Calendar className="text-green-400" size={20} />
                                                <span className="text-sm font-semibold text-gray-400">Date</span>
                                            </div>
                                            <p className="text-white font-bold">{talk.date}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-3xl p-12 border border-orange-500/30">
                    <Award className="w-16 h-16 mx-auto mb-6 text-orange-400" />
                    <h2 className="text-3xl font-bold mb-4 text-white">Want me to speak at your event?</h2>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        I'm always excited to share insights on product management, agile transformation, and digital innovation.
                    </p>
                    <a
                        href="/contact"
                        className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full font-bold hover:from-orange-700 hover:to-red-700 transition-all shadow-lg shadow-orange-500/30"
                    >
                        Get In Touch
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default Speaking;
