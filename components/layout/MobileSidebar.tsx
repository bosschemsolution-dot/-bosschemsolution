'use client';

import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface NavLink {
  href: string;
  label: string;
  isHash?: boolean;
}

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const iconMap: Record<string, string> = {
  Home: 'home',
  Products: 'box',
  'About Us': 'info-circle',
  Benefits: 'star',
  Contact: 'envelope',
};

const DURATION = 400; // ms — must match CSS transition below

export default function MobileSidebar({ isOpen, onClose, navLinks, onNavClick }: MobileSidebarProps) {
  // `mounted` keeps the element in the DOM during the exit animation
  const [mounted, setMounted] = useState(isOpen);
  // `visible` drives the CSS transition classes
  const [visible, setVisible] = useState(isOpen);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (isOpen) {
      setMounted(true);                           // mount first
      requestAnimationFrame(() => {               // then trigger enter on next frame
        requestAnimationFrame(() => setVisible(true));
      });
    } else {
      setVisible(false);                          // trigger exit animation
      timerRef.current = setTimeout(() => {
        setMounted(false);                        // unmount after animation
      }, DURATION);
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 lg:hidden"
        style={{
          zIndex: 200,
          backgroundColor: 'rgba(0,0,0,0.30)',
          opacity: visible ? 1 : 0,
          transition: `opacity ${DURATION}ms ease-in-out`,
          pointerEvents: visible ? 'auto' : 'none',
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar panel */}
      <aside
        className="fixed top-0 right-0 bottom-0 bg-white shadow-2xl flex flex-col lg:hidden"
        style={{
          zIndex: 201,
          width: '20rem',
          maxWidth: '85vw',
          transform: visible ? 'translateX(0)' : 'translateX(100%)',
          transition: `transform ${DURATION}ms cubic-bezier(0.4, 0, 0.2, 1)`,
        }}
        aria-label="Mobile navigation"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-gray-200 shrink-0">
          <div className="relative w-28 h-10">
            <Image
              src="/images/logo.png"
              alt="Boss Chem Solution"
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col p-5 flex-1 overflow-y-auto">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={link.isHash ? (e) => onNavClick(e, link.href) : onClose}
              className="flex items-center gap-3 px-4 py-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 text-gray-700 hover:text-blue-600 font-semibold transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <i
                className={`fas fa-${iconMap[link.label] ?? 'circle'} text-blue-600 group-hover:scale-110 transition-transform`}
              />
              <span>{link.label}</span>
            </Link>
          ))}

          {/* CTA */}
          <a
            href="tel:+918980211051"
            className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <i className="fas fa-phone" />
            <span>Call +91 8980211051</span>
          </a>
        </nav>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 shrink-0">
          <p className="text-sm text-gray-600 text-center">
            <i className="fas fa-clock mr-2" />
            Mon - Sat: 9:00 AM - 6:00 PM
          </p>
        </div>
      </aside>
    </>
  );
}
