import React, { useState, useEffect } from 'react';
import { KingLogo } from './KingLogo';
import { Menu, X, Phone, Clock, ArrowRight, ShieldCheck } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface NavbarProps {
  onOpenJoinModal: (planId?: string) => void;
  onOpenPassModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal, onOpenPassModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Plans', href: '#memberships' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#09090b]/95 backdrop-blur-md py-2.5 border-b border-white/[0.08] shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#09090b]/90 via-[#09090b]/60 to-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* ZONE 1: BRAND LOGO */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
            >
              <KingLogo className="h-10 sm:h-12 w-auto" />
            </a>

            {/* ZONE 2: DESKTOP NAV LINKS */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-amber-400 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-amber-400 after:to-orange-500 hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* ZONE 3: ACTIONS & CTA */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <button
                type="button"
                onClick={onOpenPassModal}
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-white bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-md transition-colors"
              >
                <span>Free 1-Day Pass</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenJoinModal()}
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 active:scale-[0.98] rounded-md shadow-md shadow-amber-500/20 transition-all whitespace-nowrap"
              >
                <span>Join Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-[#101014] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl pt-24">
            <div>
              <div className="pb-4 mb-6 border-b border-white/10 flex items-center justify-between">
                <KingLogo className="h-9 w-auto" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col space-y-3.5">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-base font-semibold text-zinc-200 hover:text-amber-400 transition-colors py-1.5 px-2 rounded-md hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPassModal();
                }}
                className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 border border-amber-500/30 rounded-md hover:bg-amber-500/20 transition-colors"
              >
                Claim Free 1-Day Pass
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-2.5 text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 rounded-md transition-all shadow-lg shadow-amber-500/20"
              >
                Join King Fitness Now
              </button>

              <div className="pt-2 text-xs text-zinc-400 flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero Lock-In Contract Option</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
