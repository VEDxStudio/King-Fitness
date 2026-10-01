import React from 'react';
import { KingBrandLogo } from './KingBrandLogo';

export const MainFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--background)] border-t border-[var(--border)] py-14 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* CENTRED 80PX LOGO */}
        <div className="mb-6">
          <KingBrandLogo size={80} className="shadow-2xl mx-auto" />
        </div>

        {/* BRAND TITLE & TAGLINE */}
        <div className="font-heading text-2xl uppercase tracking-widest text-[var(--foreground)] font-bold mb-1">
          King Fitness Center
        </div>
        <div className="text-xs uppercase tracking-widest text-[var(--gold)] font-heading mb-6">
          Your Local Fitness Destination
        </div>

        {/* QUICK ANCHOR LINKS */}
        <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-wider text-[var(--foreground)]/60 font-heading mb-8">
          <a href="#home" className="hover:text-[var(--gold)] transition-colors">Home</a>
          <a href="#about" className="hover:text-[var(--gold)] transition-colors">About</a>
          <a href="#facilities" className="hover:text-[var(--gold)] transition-colors">Facilities</a>
          <a href="#membership-plans" className="hover:text-[var(--gold)] transition-colors">Membership Plans</a>
          <a href="#trainers" className="hover:text-[var(--gold)] transition-colors">Trainers</a>
          <a href="#gallery" className="hover:text-[var(--gold)] transition-colors">Gallery</a>
          <a href="#contact" className="hover:text-[var(--gold)] transition-colors">Contact</a>
        </div>

        {/* COPYRIGHT */}
        <div className="text-xs text-[var(--foreground)]/50 font-normal">
          © {currentYear} King Fitness Center. All rights reserved.
        </div>

      </div>
    </footer>
  );
};
