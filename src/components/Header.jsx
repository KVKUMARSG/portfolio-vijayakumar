import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-opacity-95 backdrop-blur-lg bg-[#0a0a5a] border-b border-blue-500/30 shadow-lg shadow-blue-500/10">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
                            VIJAYAKUMAR K
                        </span>
                    </Link>

                    {/* Desktop Menu - Horizontal Row */}
                    <nav className="hidden lg:flex items-center gap-2">
                        {portfolioData.menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                  px-5 py-2.5 rounded-lg font-semibold text-sm tracking-wide
                  transition-all duration-300
                  ${location.pathname === item.path
                                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-gradient-to-r from-blue-500/20 to-green-500/20 text-gray-200 hover:from-blue-600/40 hover:to-green-600/40'
                                    }
                  border border-blue-400/30
                  relative
                  embossed-text
                `}
                                style={{
                                    textShadow: location.pathname === item.path
                                        ? '0 1px 0 rgba(0,0,0,0.3), 0 -1px 0 rgba(255,255,255,0.2)'
                                        : '0 1px 2px rgba(0,0,0,0.5)'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation - Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0a0a5a]/98 backdrop-blur-lg border-b border-blue-500/30 shadow-xl py-4 px-4">
                    <div className="flex flex-col gap-2">
                        {portfolioData.menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`
                  px-6 py-3 rounded-lg font-semibold text-base
                  transition-all duration-300
                  ${location.pathname === item.path
                                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg'
                                        : 'bg-gradient-to-r from-blue-500/20 to-green-500/20 text-gray-200'
                                    }
                  border border-blue-400/30
                `}
                                style={{
                                    textShadow: '0 1px 2px rgba(0,0,0,0.5)'
                                }}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
