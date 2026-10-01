import React from 'react';
import { HeroVisual, FacilityVisual, TrainerVisual } from './GymVisualAssets';

export const GymGallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-14">
          <span className="eyebrow">Gallery</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-3">
            Inside The Gym
          </h2>
          <p className="mt-3 text-base text-[var(--foreground)]/70 max-w-2xl font-normal">
            Take a visual tour through our raw iron platforms, conditioning floor, and private coaching spaces.
          </p>
        </div>

        {/* ASYMMETRIC GRID: TWO WIDE 16:9 TILES, TWO SQUARE TILES */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* TILE 1: WIDE 16:9 (MD: COL-SPAN-8) */}
          <div className="md:col-span-8 border border-[var(--border)] rounded-sm overflow-hidden aspect-[16/9] relative group bg-[var(--charcoal)]">
            <HeroVisual className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="font-heading text-xs uppercase tracking-widest text-[var(--gold)]">
                  Heavy Iron & Platforms
                </span>
                <div className="font-heading text-xl uppercase tracking-wider text-white font-bold">
                  Deadlift & Olympic Lifting Bay
                </div>
              </div>
            </div>
          </div>

          {/* TILE 2: SQUARE (MD: COL-SPAN-4) */}
          <div className="md:col-span-4 border border-[var(--border)] rounded-sm overflow-hidden aspect-square relative group bg-[var(--charcoal)]">
            <FacilityVisual className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="font-heading text-xs uppercase tracking-widest text-[var(--gold)]">
                  Free Weights
                </span>
                <div className="font-heading text-xl uppercase tracking-wider text-white font-bold">
                  Calibrated Dumbbell Racks
                </div>
              </div>
            </div>
          </div>

          {/* TILE 3: SQUARE (MD: COL-SPAN-4) */}
          <div className="md:col-span-4 border border-[var(--border)] rounded-sm overflow-hidden aspect-square relative group bg-[var(--charcoal)]">
            <TrainerVisual className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="font-heading text-xs uppercase tracking-widest text-[var(--gold)]">
                  Mentorship
                </span>
                <div className="font-heading text-xl uppercase tracking-wider text-white font-bold">
                  1-on-1 Spotting & Form Check
                </div>
              </div>
            </div>
          </div>

          {/* TILE 4: WIDE 16:9 (MD: COL-SPAN-8) */}
          <div className="md:col-span-8 border border-[var(--border)] rounded-sm overflow-hidden aspect-[16/9] relative group bg-[var(--charcoal)]">
            <FacilityVisual className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
              <div>
                <span className="font-heading text-xs uppercase tracking-widest text-[var(--gold)]">
                  Performance Campus
                </span>
                <div className="font-heading text-xl uppercase tracking-wider text-white font-bold">
                  Power Racks & Squat Cages
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
