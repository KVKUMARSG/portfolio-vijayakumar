import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
            <div className="container mx-auto flex h-16 items-center px-4">

                {/* Logo */}
                <Link to="/" className="mr-6 flex items-center space-x-2">
                    <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                        VIJAYAKUMAR K
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex flex-1 items-center justify-start space-x-2">
                    {portfolioData.menuItems.map((item) => {
                        const isActive = location.pathname === item.path;
                        return (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium transition-colors ${isActive
                                        ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                                        : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="inline-flex items-center justify-center rounded-md md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t">
                    <nav className="grid gap-2 p-4">
                        {portfolioData.menuItems.map((item) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`flex w-full items-center rounded-md p-3 text-sm font-medium ${isActive
                                            ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white'
                                            : 'hover:bg-gray-100 text-gray-700'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
