import React from 'react';
import { TrainerVisual } from './GymVisualAssets';
import { Award, ArrowRight, ShieldCheck } from 'lucide-react';

interface CoachesSectionProps {
  onBookSession: () => void;
}

export const CoachesSection: React.FC<CoachesSectionProps> = ({ onBookSession }) => {
  return (
    <section id="trainers" className="py-20 lg:py-28 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: COPY */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="eyebrow">Trainers</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-3">
                Coaches Who Push You Further
              </h2>
            </div>

            <p className="text-base sm:text-lg text-[var(--foreground)]/80 leading-relaxed font-normal">
              Our certified coaches don't just count reps; they analyze your biomechanics, correct movement deficiencies, and program progressive overload suited to your current level. We hold ourselves accountable to your milestones.
            </p>

            <p className="text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed font-normal">
              Whether you want to master barbell squats, shed stubborn body fat, or build functional athletic stamina, you receive attentive, non-intimidating mentorship every step of the way.
            </p>

            <div className="grid grid-cols-2 gap-4 py-2 border-y border-[var(--border)]">
              <div>
                <div className="font-heading text-2xl font-bold text-gradient-brand">10+ YEARS</div>
                <div className="text-xs uppercase tracking-wider text-[var(--foreground)]/60 font-heading">Average Experience</div>
              </div>
              <div>
                <div className="font-heading text-2xl font-bold text-gradient-brand">100%</div>
                <div className="text-xs uppercase tracking-wider text-[var(--foreground)]/60 font-heading">Certified Coaches</div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onBookSession}
                className="btn-primary px-8 py-3.5 text-sm sm:text-base inline-flex items-center gap-2 cursor-pointer shadow-glow"
              >
                <span>Book a Free Session</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: TRAINER PHOTO (1024x768, lazy-loaded) */}
          <div className="lg:col-span-6 relative">
            <div className="border border-[var(--border)] rounded-sm overflow-hidden shadow-2xl relative aspect-[4/3] bg-[var(--card)]">
              <TrainerVisual className="w-full h-full" />
              <div className="absolute inset-0 border border-white/[0.05] pointer-events-none rounded-sm" />
            </div>
            {/* Subtle warm glow */}
            <div className="absolute -top-3 -left-3 w-32 h-32 bg-gradient-brand opacity-15 blur-2xl pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
};
