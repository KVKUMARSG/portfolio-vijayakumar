
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
                        <h2 className="section-title">Featured Case Studies</h2>
                        <p className="text-gray-400 text-lg">Real-world product teardowns and strategic analyses</p>
                    </div>
                    <Link to="/pm-showcase" className="hidden md:flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-semibold">
                        View All <ArrowRight size={20} />

