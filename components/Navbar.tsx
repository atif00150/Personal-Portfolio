'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'PROJECTS', href: '#projects' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('home');
        return;
      }

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-4 z-50 w-full font-lato mb-0">
      {/* Balanced Wide Container (Fills Wide Screens Cleanly) */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Floating Pill Container */}
        <div className="w-full py-3 px-6 sm:px-8 rounded-full bg-[#eaeaea]/90 border border-black/10 shadow-md backdrop-blur-md flex items-center justify-between transition-all">
          
          {/* Brand Logo (Far Left inside pill) */}
          <a 
            href="#home" 
            onClick={() => setActiveSection('home')}
            className="flex items-center gap-1 group shrink-0"
          >
            <span className="text-base sm:text-xl font-black tracking-tight text-gray-900 font-lato">
              MUHAMMAD ATIF<span className="text-terracotta font-black">.</span>
            </span>
          </a>

          {/* Right-Aligned Navigation Links & Premium Hire Me Button */}
          <div className="flex items-center gap-5 lg:gap-7">
            
            {/* Nav Links */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-7">
              {navLinks.map((link) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setActiveSection(sectionId)}
                    className={`text-xs sm:text-sm font-black tracking-wider uppercase transition-colors relative py-0.5 ${
                      isActive
                        ? 'text-gray-900'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-terracotta rounded-full"></span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Premium HIRE ME Pill CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gray-900 text-white hover:bg-terracotta text-xs font-black tracking-widest uppercase transition-all shadow-sm hover:shadow shrink-0 font-lato"
            >
              HIRE ME
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-gray-700"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Drawer Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden w-full max-w-sm mx-auto mt-2 p-3.5 rounded-2xl bg-[#eaeaea]/95 border border-black/10 shadow-md backdrop-blur-md space-y-2 font-lato">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-1.5 text-sm font-black text-gray-800 hover:text-terracotta"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 mt-1 text-xs font-black tracking-wider uppercase text-white bg-gray-900 rounded-full"
            >
              HIRE ME
            </a>
          </div>
        )}

      </div>
    </header>
  );
}
