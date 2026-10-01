import React, { useState, useEffect } from 'react';
import { KingBrandLogo } from './KingBrandLogo';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onJoinClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onJoinClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Membership Plans', href: '#membership-plans' },
    { label: 'Trainers', href: '#trainers' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[var(--background)]/95 backdrop-blur-md py-2 border-b border-[var(--border)] shadow-xl'
            : 'bg-transparent py-4 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* LOGO (drops from 56px to 44px on scroll past 40px) */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--gold)] rounded-sm"
              aria-label="King Fitness Center Home"
            >
              <KingBrandLogo
                size={scrolled ? 44 : 56}
                className="transition-all duration-300"
              />
              <span className="sr-only">King Fitness Center</span>
            </a>

            {/* NAV LINKS (centre-right) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-heading text-sm uppercase tracking-widest text-[var(--foreground)]/80">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-[var(--gold)] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-brand hover:after:w-full after:transition-all after:duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* RIGHT: GOLD "JOIN NOW" CTA + HAMBURGER */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onJoinClick}
                className="btn-primary px-4 sm:px-6 py-2.5 text-xs sm:text-sm inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <span>Join Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[var(--foreground)] hover:text-[var(--gold)] bg-white/5 hover:bg-white/10 rounded-sm border border-[var(--border)] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* FULL-WIDTH MOBILE DROPDOWN PANEL */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[var(--charcoal)] border-b border-[var(--border)] px-4 py-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="max-w-7xl mx-auto flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-heading text-lg uppercase tracking-wider text-[var(--foreground)] hover:text-[var(--gold)] py-2 px-3 rounded-sm hover:bg-white/5 transition-colors border-b border-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onJoinClick();
                  }}
                  className="btn-primary w-full py-3 text-sm text-center justify-center flex items-center gap-2"
                >
                  <span>Join King Fitness Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
