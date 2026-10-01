import React from 'react';
import { ArrowRight, MapPin, Sparkles, Shield, ChevronDown } from 'lucide-react';
import { GYM_INFO } from '../data/gymData';

interface HeroProps {
  onExplorePlans: () => void;
  onContactClick: () => void;
  onClaimPass: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExplorePlans,
  onContactClick,
  onClaimPass,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#09090b]"
    >
      {/* BACKGROUND ATMOSPHERIC ATHLETIC ART */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Deep dark radiant gradient background */}
        <div className="absolute inset-0 bg-[#09090b]" />

        {/* Ambient warm amber/gold directional spotlight glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-gradient-to-b from-amber-500/15 via-orange-600/5 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] bg-amber-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-10 -left-20 w-[400px] h-[400px] bg-orange-600/10 blur-[90px] rounded-full" />

        {/* Stylized geometric dark gym silhouette mesh */}
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.06] mix-blend-screen"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="gymGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFFFFF" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gymGrid)" />
        </svg>

        {/* Diagonal subtle athletic speed slashes */}
        <div className="absolute -right-20 top-20 w-96 h-[600px] opacity-10 rotate-12 bg-gradient-to-b from-amber-400 via-orange-500 to-transparent blur-[1px]" />

        {/* Bottom dark vignette scrim for flawless legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/80 via-transparent to-[#09090b]/80" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto w-full text-center flex flex-col items-center">
        
        {/* TRUST STATEMENT / KICKER */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-amber-500/25 mb-6 text-xs sm:text-sm font-semibold tracking-wider uppercase text-amber-400 backdrop-blur-md">
          <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>{GYM_INFO.trustKicker}</span>
          <span className="text-zinc-600">·</span>
          <span className="text-zinc-300 font-normal">State-of-the-Art Training Facility</span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase leading-[0.9] max-w-4xl text-balance">
          BUILD YOUR{' '}
          <span className="gold-gradient-text inline-block relative">
            STRONGER
            {/* Athletic underline accent */}
            <svg
              className="absolute -bottom-2 left-0 w-full h-3 text-orange-500"
              viewBox="0 0 300 12"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M 2 8 C 70 2, 230 2, 298 9"
                stroke="url(#heroUnderlineGrad)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="heroUnderlineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFB800" />
                  <stop offset="100%" stopColor="#EA580C" />
                </linearGradient>
              </defs>
            </svg>
          </span>{' '}
          SELF.
        </h1>

        {/* SUPPORTING TEXT */}
        <p className="mt-7 text-base sm:text-lg md:text-xl text-zinc-300 font-normal max-w-2xl text-balance leading-relaxed">
          {GYM_INFO.subtext}
        </p>

        {/* ACTION CTA BUTTONS */}
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onExplorePlans}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 active:scale-[0.98] rounded-md shadow-xl shadow-amber-500/20 transition-all cursor-pointer"
          >
            <span>View Membership Plans</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onClaimPass}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold uppercase tracking-wider text-white hover:text-amber-400 bg-white/[0.05] hover:bg-white/[0.08] border border-white/20 hover:border-amber-400/50 rounded-md transition-all cursor-pointer"
          >
            <span>Claim Free 1-Day Pass</span>
          </button>
        </div>

        {/* TRUST BADGES ROW */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>Calibrated Eleiko & Hammer Strength</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span>Sauna & Cold Plunge Included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Zero Lock-In Contract Available</span>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <a
          href="#stats"
          className="mt-10 inline-flex flex-col items-center text-zinc-500 hover:text-amber-400 transition-colors cursor-pointer group"
          aria-label="Scroll to details"
        >
          <span className="text-[11px] uppercase tracking-widest font-semibold mb-1 text-zinc-500 group-hover:text-amber-400">
            Explore Facility
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>

      </div>
    </section>
  );
};
