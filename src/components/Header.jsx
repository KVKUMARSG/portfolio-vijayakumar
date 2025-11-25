import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-extrabold tracking-tight">
                        <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent drop-shadow-sm">
                            VIJAYAKUMAR K
                        </span>
                    </Link>

                    <nav className="hidden lg:flex items-center gap-2">
                        {portfolioData.menuItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`
                  px-5 py-2.5 rounded-lg font-semibold text-sm tracking-wide
                  transition-all duration-300
                  ${location.pathname === item.path
                                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg shadow-blue-500/30'
                                        : 'bg-gradient-to-r from-blue-50 to-green-50 text-gray-700 hover:from-blue-100 hover:to-green-100'
                                    }
                  border border-blue-200
                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>

                    <button
                        className="lg:hidden text-white bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg"
                        onClick={toggleMenu}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg border-b border-gray-200 shadow-xl py-4 px-4">
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
                                        : 'bg-gradient-to-r from-blue-50 to-green-50 text-gray-700'
                                    }
                  border border-blue-200
                `}
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
