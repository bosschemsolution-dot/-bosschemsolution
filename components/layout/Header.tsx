'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
    closeMobileMenu();
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About Us' },
    { href: '#benefits', label: 'Benefits', isHash: true },
    { href: '#contact', label: 'Contact', isHash: true },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm shadow-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-50 group">
            <div className="relative w-28 md:w-36 h-12 md:h-14 transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/images/logo.png" 
                alt="Boss Chem Solution" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={link.isHash ? (e) => handleNavClick(e, link.href) : undefined}
                className="relative font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            
            {/* CTA Button */}
            <a 
              href="tel:+918980211051"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <i className="fas fa-phone"></i>
              <span>Call Now</span>
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={28} className="text-gray-900" />
            ) : (
              <Menu size={28} className="text-gray-900" />
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} onClick={closeMobileMenu}>
          <div 
            className={`absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ${
              mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="relative w-28 h-12">
                <Image 
                  src="/images/logo.png" 
                  alt="Boss Chem Solution" 
                  fill
                  className="object-contain"
                />
              </div>
              <button 
                onClick={closeMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            {/* Mobile Menu Links */}
            <div className="flex flex-col p-6 space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={link.isHash ? (e) => handleNavClick(e, link.href) : closeMobileMenu}
                  className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <i className={`fas fa-${
                    link.label === 'Home' ? 'home' :
                    link.label === 'Products' ? 'box' :
                    link.label === 'About Us' ? 'info-circle' :
                    link.label === 'Benefits' ? 'star' :
                    'envelope'
                  } text-blue-600 group-hover:scale-110 transition-transform`}></i>
                  <span>{link.label}</span>
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <a 
                href="tel:+918980211051"
                className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <i className="fas fa-phone"></i>
                <span>Call +91 8980211051</span>
              </a>
            </div>
            
            {/* Mobile Menu Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 bg-gray-50">
              <p className="text-sm text-gray-600 text-center">
                <i className="fas fa-clock mr-2"></i>
                Mon - Sat: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
