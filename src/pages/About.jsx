import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Award, Briefcase, Lightbulb, Zap, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const About = () => {
    const highlights = [
        { icon: Briefcase, title: "15+ Years", subtitle: "Experience", gradient: "from-blue-500 to-cyan-500" },
        { icon: Award, title: "22+", subtitle: "Certifications", gradient: "from-purple-500 to-pink-500" },
        { icon: Users, title: "50+", subtitle: "Teams Coached", gradient: "from-green-500 to-emerald-500" },
        { icon: Lightbulb, title: "100+", subtitle: "Projects Delivered", gradient: "from-orange-500 to-yellow-500" },
    ];

    const expertise = [
        { icon: Target, name: "Product Strategy", color: "bg-blue-500" },
        { icon: Users, name: "Agile Coaching", color: "bg-purple-500" },
        { icon: TrendingUp, name: "Growth & Analytics", color: "bg-green-500" },
        { icon: Heart, name: "User Research", color: "bg-pink-500" },
        { icon: Zap, name: "Digital Transformation", color: "bg-yellow-500" },
        { icon: Briefcase, name: "Stakeholder Management", color: "bg-indigo-500" },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <div className="relative inline-block mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300"
                        alt="Professional"
                        className="relative w-40 h-40 rounded-full border-4 border-blue-500 shadow-2xl object-cover mx-auto"
                    />
                </div>
                <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {portfolioData.personalInfo.name}
                    </span>
                </h1>
                <p className="text-2xl text-gray-300 mb-6">{portfolioData.personalInfo.title}</p>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                    {portfolioData.personalInfo.summary}
                </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
                {highlights.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative group"
                    >
                        <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
                        <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-transparent transition-all">
                            <item.icon className="w-12 h-12 mx-auto mb-3 text-blue-400" />
                            <h3 className="text-3xl font-extrabold text-white mb-1">{item.title}</h3>
                            <p className="text-gray-400 text-sm">{item.subtitle}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-12 mb-20">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Lightbulb className="text-yellow-400" size={32} />
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                            My Philosophy
                        </span>
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                        {portfolioData.personalInfo.bio}
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                        I thrive at the intersection of technology, business, and human behavior. My approach combines data-driven decision making with empathy-led design thinking to create products that users love and businesses value.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                        <Zap className="text-blue-400" size={32} />
                        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Core Expertise
                        </span>
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {expertise.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.05 }}
                                className="flex items-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-gray-500 transition-all group"
                            >
                                <div className={`${skill.color} p-2 rounded-lg group-hover:scale-110 transition-transform`}>
                                    <skill.icon size={20} className="text-white" />
                                </div>
                                <span className="text-sm font-semibold text-gray-200">{skill.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-3xl p-12 border border-gray-700"
            >
                <h2 className="text-3xl font-bold text-center mb-12">
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                        What Drives Me
                    </span>
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: Heart, title: "User-Centric", desc: "Every decision starts with understanding user needs and pain points" },
                        { icon: TrendingUp, title: "Impact-Driven", desc: "Focus on metrics that matter and outcomes that create business value" },
                        { icon: Users, title: "Collaborative", desc: "Building high-performing teams through coaching and empowerment" }
                    ].map((value, index) => (
                        <div key={index} className="text-center">
                            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                                <value.icon size={36} className="text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{value.title}</h3>
                            <p className="text-gray-400">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default About;