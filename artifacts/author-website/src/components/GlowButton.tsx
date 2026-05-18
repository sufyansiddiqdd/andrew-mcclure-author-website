import React from 'react';
import { Link } from 'wouter';
import { cn } from '@/lib/utils';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'love' | 'hate';
  href?: string;
}

export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ className, variant = 'love', href, children, ...props }, ref) => {
    const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 text-sm font-display tracking-widest uppercase transition-all duration-500 overflow-hidden border border-white/20 hover:border-white/50 bg-black/40 backdrop-blur-sm group";
    const glowClasses = variant === 'love' 
      ? "before:absolute before:inset-0 before:bg-background/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:shadow-[0_0_20px_rgba(237,232,208,0.3)] text-background"
      : "before:absolute before:inset-0 before:bg-primary/20 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 hover:shadow-[0_0_20px_rgba(107,0,15,0.4)] text-primary-foreground";

    const content = (
      <>
        <span className="relative z-10 transition-transform duration-500 group-hover:scale-105">{children}</span>
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </>
    );

    if (href) {
      return (
        <Link href={href} className={cn(baseClasses, glowClasses, className)}>
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} className={cn(baseClasses, glowClasses, className)} {...props}>
        {content}
      </button>
    );
  }
);

GlowButton.displayName = 'GlowButton';
