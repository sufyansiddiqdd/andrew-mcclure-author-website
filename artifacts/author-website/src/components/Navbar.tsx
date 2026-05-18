import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'wouter';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/book', label: 'About the Book' },
  { href: '/reviews', label: 'Reviews' },
  { href: '/author', label: 'About the Author' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500 border-b border-transparent',
          scrolled ? 'bg-black/60 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="font-display text-2xl tracking-widest text-background hover:text-primary transition-colors">
            A. McCLURE
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-sm font-sans tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300',
                  location === link.href ? 'text-primary after:scale-x-100' : 'text-background/80 hover:text-background'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-background p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-[#1E1515] flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-y-0' : '-translate-y-full'
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'font-display text-2xl tracking-widest transition-colors duration-300',
              location === link.href ? 'text-primary' : 'text-background/80 hover:text-background'
            )}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </>
  );
};
