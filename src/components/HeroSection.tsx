import React from 'react';
import { HeroVisual } from './GymVisualAssets';
import { ArrowRight, ChevronDown } from 'lucide-react';

interface HeroSectionProps {
  onViewPlans: () => void;
  onContactUs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onViewPlans, onContactUs }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center justify-start overflow-hidden bg-[var(--background)]"
    >
      {/* 1. CINEMATIC HERO IMAGE (1920x1088 athlete mid deadlift, dark gym, warm gold rim light) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <HeroVisual className="w-full h-full" />
        {/* Left-to-right black scrim (95% -> 70% -> 25% opacity) */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Subtle vertical vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)] via-transparent to-[var(--background)]/70" />
      </div>

      {/* 2. FOREGROUND HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
        <div className="max-w-3xl">
          
          {/* Eyebrow */}
          <div className="mb-4">
            <span className="eyebrow">
              Your Local Fitness Destination
            </span>
          </div>

          {/* Headline (the word "Stronger" in gradient text, 5xl->8xl responsive) */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight text-[var(--foreground)] leading-[0.95] text-balance">
            Build Your{' '}
            <span className="text-gradient-brand">Stronger</span>{' '}
            Self.
          </h1>

          {/* Subline */}
          <p className="mt-6 text-lg sm:text-xl text-[var(--foreground)]/80 font-normal leading-relaxed max-w-2xl">
            Train harder. Get stronger. Become the best version of yourself at King Fitness Center.
          </p>

          {/* Two buttons: gold "View Membership Plans" with arrow, outlined "Contact Us" */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button
              type="button"
              onClick={onViewPlans}
              className="btn-primary px-8 py-3.5 text-sm sm:text-base inline-flex items-center justify-center gap-2 cursor-pointer shadow-glow"
            >
              <span>View Membership Plans</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onContactUs}
              className="btn-ghost px-8 py-3.5 text-sm sm:text-base inline-flex items-center justify-center cursor-pointer"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Trust markers */}
          <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-wrap items-center gap-6 sm:gap-10 text-xs font-heading uppercase tracking-wider text-[var(--foreground)]/60">
            <div>✓ Calibrated Strength Equipment</div>
            <div>✓ Certified 1-on-1 Coaches</div>
            <div>✓ No Lock-in Contracts</div>
          </div>

        </div>
      </div>

      {/* Down indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[var(--foreground)]/40 hover:text-[var(--gold)] transition-colors p-2"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};
