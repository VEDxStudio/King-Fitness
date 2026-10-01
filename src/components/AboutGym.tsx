import React from 'react';
import { FacilityVisual } from './GymVisualAssets';
import { Check } from 'lucide-react';

export const AboutGym: React.FC = () => {
  const checklist = [
    "Certified, friendly trainers",
    "Clean, well-maintained equipment",
    "Programs for men and women",
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: FACILITY PHOTO (1024x768 aspect, lazy-loaded) */}
          <div className="lg:col-span-6 relative">
            <div className="border border-[var(--border)] rounded-sm overflow-hidden shadow-2xl relative aspect-[4/3] bg-[var(--charcoal)]">
              <FacilityVisual className="w-full h-full" />
              <div className="absolute inset-0 border border-white/[0.05] pointer-events-none rounded-sm" />
            </div>
            {/* Subtle gold accent frame bar */}
            <div className="absolute -bottom-3 -right-3 w-32 h-32 bg-gradient-brand opacity-15 blur-2xl pointer-events-none" />
          </div>

          {/* RIGHT: COPY */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="eyebrow">About Us</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-3">
                Where Local Strength Is Built
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--foreground)]/80 leading-relaxed font-normal">
              At King Fitness Center, we believe true strength belongs to everyone. Whether you are stepping onto the gym floor for your very first workout or preparing for competitive powerlifting, our community provides the equipment, expert guidance, and supportive atmosphere you need to break barriers and build lasting discipline.
            </p>

            <p className="text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed font-normal">
              We take pride in being a locally owned, community-driven training center. Our floor is never overcrowded, our machines are inspected daily, and our coaches treat your fitness journey with genuine dedication.
            </p>

            {/* THREE-ITEM CHECKLIST WITH GOLD CHECK ICONS */}
            <div className="pt-2 space-y-3.5">
              {checklist.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-sm bg-gradient-brand flex items-center justify-center text-black shrink-0 font-bold">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="font-heading text-base sm:text-lg uppercase tracking-wide text-[var(--foreground)] font-semibold">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
