'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Flame } from 'lucide-react';

const links = [
  { name: 'Inicio', href: '/' },
  { name: 'Menú', href: '/menu' },
  { name: 'Historia', href: '/historia' },
  { name: 'Nosotros', href: '/nosotros' },
  { name: 'Sucursales', href: '/sucursales' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-clay-50/95 backdrop-blur-md shadow-sm border-b border-charcoal-200/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container-base">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className={`relative transition-colors duration-300 ${scrolled ? 'text-ember-600' : 'text-ember-400'}`}>
              <Flame size={32} strokeWidth={1.5} className="group-hover:animate-glow" />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-display font-semibold tracking-tight ${scrolled ? 'text-charcoal-950' : 'text-white'}`}>
                El Brasero
              </span>
              <span className={`text-xs font-mono tracking-widest ${scrolled ? 'text-charcoal-500' : 'text-clay-200'}`}>
                DESDE 1987
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${
                  scrolled
                    ? 'text-charcoal-700 hover:text-ember-600 hover:bg-ember-50'
                    : 'text-white hover:text-ember-200 hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/reservar"
              className={`ml-4 px-6 py-2.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
                scrolled
                  ? 'bg-ember-600 text-white hover:bg-ember-700 shadow-sm'
                  : 'bg-white text-charcoal-950 hover:bg-clay-100 shadow-lg'
              }`}
            >
              Reservar Mesa
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-charcoal-900 hover:bg-charcoal-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-clay-50/98 backdrop-blur-lg border-b border-charcoal-200/20"
          >
            <div className="container-base py-6 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-charcoal-700 hover:text-ember-600 hover:bg-ember-50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/reservar"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 bg-ember-600 text-white text-center rounded-lg font-medium hover:bg-ember-700 transition-colors mt-4"
              >
                Reservar Mesa
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
