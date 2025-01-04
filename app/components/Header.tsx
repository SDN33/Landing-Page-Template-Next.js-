'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm border-b border-gray-700/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 text-transparent bg-clip-text">
              TEAM BACKLINK
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">
              À propos
            </a>
            <a href="#exchange" className="text-gray-300 hover:text-white transition-colors duration-200">
              Nos Tarifs
            </a>
            <a href="#credit" className="text-gray-300 hover:text-white transition-colors duration-200">
              Acheter des crédits
            </a>
            <a href="#exchange" className="text-gray-300 hover:text-white transition-colors duration-200">
              Proposer un backlink
            </a>
          </div>

          {/* Auth Buttons Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200">
              Se connecter
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-white rounded-md hover:opacity-90 transition-opacity">
              S&apos;inscrire
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                À propos
              </a>
              <a
                href="#exchange"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Nos Tarifs
              </a>
              <a
                href="#seo"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Acheter des crédits
              </a>
              <a
                href="#exchange"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                Proposer un backlink
              </a>
              <div className="pt-4 space-y-2">
                <button className="block w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200">
                  Se connecter
                </button>
                <button className="block w-full px-3 py-2 bg-gradient-to-r from-emerald-400 to-blue-500 text-white rounded-md hover:opacity-90 transition-opacity">
                  S&apos;inscrire
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
