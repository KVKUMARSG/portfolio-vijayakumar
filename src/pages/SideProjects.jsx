import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, GitBranch, Rocket } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const SideProjects = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold mb-4">
                        <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Side Projects
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Passion projects, experiments, and tools I've built to solve problems and explore new ideas
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {portfolioData.sideProjects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                            <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all h-full flex flex-col">
                                <div className="text-6xl mb-4">{project.icon}</div>
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-6 flex-grow">{project.description}</p>
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold"
                                >
                                    <ExternalLink size={18} />
                                    View Project
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Vibe Coding Section */}
                <div className="mt-20 bg-gradient-to-r from-purple-900/20 via-pink-900/20 to-orange-900/20 rounded-3xl p-12 border border-purple-500/30">
                    <div className="flex items-center gap-4 mb-8">
                        <Code className="text-purple-400" size={40} />
                        <h2 className="text-4xl font-bold">
                            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Vibe Coding
                            </span>
                        </h2>
                    </div>
                    <p className="text-gray-300 text-lg mb-8">{portfolioData.vibeCoding.description}</p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {portfolioData.vibeCoding.projects.map((proj, index) => (
                            <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                                <div className="flex items-start gap-4">
                                    <div className="bg-purple-500/20 p-3 rounded-lg">
                                        <Rocket className="text-purple-400" size={24} />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
                                        <p className="text-gray-400 mb-4">{proj.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {proj.tech.map((tech, i) => (
                                                <span key={i} className="bg-purple-500/20 text-purple-300 text-xs px-3 py-1 rounded-full border border-purple-500/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default SideProjects;
