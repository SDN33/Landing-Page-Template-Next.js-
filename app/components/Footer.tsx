import React from 'react';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#1e1f2e] text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <Link
              href="/mentions-legales"
              className="text-sm hover:text-[#40F8B5] transition-colors"
            >
              Mentions légales
            </Link>
            <Link
              href="/confidentialite"
              className="text-sm hover:text-[#40F8B5] transition-colors"
            >
              Politique de confidentialité
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm">
              © {currentYear} Team Backlink. Tous droits réservés.
            </span>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <Link
            href="https://still-inov.com"
            className="text-sm hover:text-[#40F8B5] transition-colors"
          >
            Site réalisé avec ❤️ par Still-inov Agency 🚀
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
