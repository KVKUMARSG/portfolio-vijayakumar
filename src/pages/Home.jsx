
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award, Users, TrendingUp, Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const Home = () => {
    const stats = [
        { label: "Years of Experience", value: "15+", icon: TrendingUp },
        { label: "Certifications", value: "22+", icon: Award },
        { label: "Teams Coached", value: "50+", icon: Users },
    ];

    return (
        <div className="container mx-auto px-4">
            {/* Hero Section */}
            <section className="min-h-[85vh] flex flex-col lg:flex-row justify-between items-center py-12 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:w-1/2"
                >
                    <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full mb-6 border border-blue-500/20">
                        <span className="text-sm font-semibold tracking-wider uppercase">Product Manager & Agile Coach</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        Building Products<br />
                        <span className="gradient-text">That Matter</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                        {portfolioData.personalInfo.summary}
                    </p>

                    {/* Contact Links */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <a href={`mailto:${portfolioData.personalInfo.email} `} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                            <Mail size={18} />
                            <span className="text-sm">{portfolioData.personalInfo.email}</span>
                        </a>
                        <a href={`tel:${portfolioData.personalInfo.phone} `} className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                            <Phone size={18} />
                            <span className="text-sm">{portfolioData.personalInfo.phone}</span>
                        </a>
                        <a href={portfolioData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
                            <Linkedin size={18} />
                            <span className="text-sm">LinkedIn</span>
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <Link to="/pm-showcase" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/30">
                            View My Work <ArrowRight size={20} />
                        </Link>
                        <Link to="/contact" className="border-2 border-gray-600 hover:border-blue-500 text-gray-200 px-8 py-4 rounded-full font-semibold transition-all">
                            Get In Touch
                        </Link>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="lg:w-1/2"
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800"
                            alt="Product Management"
                            className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="py-16 border-t border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="text-center p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-all"
                        >
                            <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                            <h3 className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text">{stat.value}</h3>
                            <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Featured Work */}
            <section className="py-20">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="section-title">Featured Case Studies</h2>
                        <p className="text-gray-400 text-lg">Real-world product teardowns and strategic analyses</p>
                    </div>
                    <Link to="/pm-showcase" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                        View All <ArrowRight size={20} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {portfolioData.pmShowcase.slice(0, 4).map((project, index) => (
                        <Link to={`/ pm - showcase`} key={project.id} className="group">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="card h-full overflow-hidden hover:shadow-xl hover:shadow-blue-500/10"
                            >
                                <div className="h-28 overflow-hidden rounded-lg mb-6 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                                        {project.tags?.map(tag => (
                                            <span key={tag} className="bg-blue-500/90 text-white text-xs px-3 py-1 rounded-full font-semibold">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                                <div className="pt-4 border-t border-gray-700">
                                    <p className="text-sm text-blue-400 font-medium flex items-center gap-2">
                                        <TrendingUp size={16} />
                                        {project.outcome}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Link to="/pm-showcase" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                        View All Case Studies <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Skills/Expertise Section */}
            <section className="py-20 border-t border-gray-800">
                <h2 className="section-title text-center mb-12">Core Expertise</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {["Product Strategy", "Agile Coaching", "User Research", "Stakeholder Management",
                        "Product Discovery", "Fintech", "Digital Transformation", "Team Leadership"].map((skill, index) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all"
                            >
                                <p className="font-semibold text-gray-200">{skill}</p>
                            </motion.div>
                        ))}
                </div>
            </section>
        </div>
    );
};

export default Home;

