'use client';

import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import MobileSidebar from './MobileSidebar';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About Us' },
  { href: '#benefits', label: 'Benefits', isHash: true },
  { href: '#contact', label: 'Contact', isHash: true },
];

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      if (window.location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    closeMobileMenu();
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 md:py-4 py-3 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-lg' : 'shadow-md'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="group">
              <div className="relative w-28 md:w-36 h-10 md:h-12 transition-transform duration-300 group-hover:scale-105">
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
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              {/* CTA */}
              <a
                href="tel:+918980211051"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <i className="fas fa-phone" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={28} className="text-gray-900" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar — rendered outside <nav> via fragment */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navLinks={navLinks}
        onNavClick={handleNavClick}
      />
    </>
  );
}

export default Header;
