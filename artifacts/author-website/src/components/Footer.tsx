import React from 'react';
import { Link } from 'wouter';
import { FaInstagram, FaTwitter, FaFacebook, FaAmazon } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="relative border-t border-primary/20 bg-gradient-to-b from-[#1E1515] to-[#0A0707] pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(107,0,15,0.1)_0,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="font-display text-3xl tracking-widest text-background">
              ANDREW McCLURE
            </Link>
            <p className="font-sans text-background/60 leading-relaxed max-w-sm">
              "Raw. Honest. Unfiltered. Poetry from the heart."
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background hover:bg-primary hover:border-primary transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background hover:bg-primary hover:border-primary transition-all duration-300">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background hover:bg-primary hover:border-primary transition-all duration-300">
                <FaFacebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-background/20 flex items-center justify-center text-background hover:bg-primary hover:border-primary transition-all duration-300">
                <FaAmazon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl text-background tracking-wider mb-2">Explore</h3>
            <Link href="/" className="font-sans text-background/60 hover:text-primary transition-colors w-fit">Home</Link>
            <Link href="/book" className="font-sans text-background/60 hover:text-primary transition-colors w-fit">About the Book</Link>
            <Link href="/reviews" className="font-sans text-background/60 hover:text-primary transition-colors w-fit">Reviews</Link>
            <Link href="/author" className="font-sans text-background/60 hover:text-primary transition-colors w-fit">About the Author</Link>
            <Link href="/contact" className="font-sans text-background/60 hover:text-primary transition-colors w-fit">Contact</Link>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-xl text-background tracking-wider mb-2">Newsletter</h3>
            <p className="font-sans text-background/60 mb-2">Join the journey. Receive exclusive updates and new poetry.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-black/40 border border-background/20 rounded-none px-4 py-3 text-background focus:outline-none focus:border-primary transition-colors flex-1 font-sans placeholder:text-background/40"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 font-display tracking-wider hover:bg-[#8A0018] transition-colors uppercase text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-background/40 text-sm">
            © 2024 Andrew McClure. All rights reserved.
          </p>
          <div className="font-sans text-background/40 text-sm">
            Published by Collingwood Press
          </div>
        </div>
      </div>
    </footer>
  );
};
