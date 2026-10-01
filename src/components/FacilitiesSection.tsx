import React from 'react';
import { Dumbbell, Activity, UserCheck, Clock } from 'lucide-react';

export const FacilitiesSection: React.FC = () => {
  const facilities = [
    {
      icon: Dumbbell,
      title: "Strength Zone",
      desc: "Heavy Olympic barbells, calibrated steel plates, squat racks, and dumbbells up to 150 lbs.",
    },
    {
      icon: Activity,
      title: "Cardio Zone",
      desc: "Commercial treadmills, Concept2 rowers, SkiErgs, assault bikes, and stairmasters.",
    },
    {
      icon: UserCheck,
      title: "Personal Training",
      desc: "Dedicated 1-on-1 coaching with custom programming tailored to your unique physique goals.",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      desc: "Open 6 AM to 10 PM daily every single day of the week to fit your busy lifestyle.",
    },
  ];

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[var(--charcoal)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-14">
          <span className="eyebrow">Facilities</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-3">
            Everything You Need
          </h2>
        </div>

        {/* FOUR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="bg-[var(--card)] border border-[var(--border)] rounded-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[var(--gold)] group hover:-translate-y-1"
              >
                <div>
                  {/* GOLD ICON TILE */}
                  <div className="w-12 h-12 rounded-sm bg-gradient-brand flex items-center justify-center text-black mb-6 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 stroke-[2.5]" />
                  </div>

                  {/* TITLE */}
                  <h3 className="font-heading text-2xl uppercase tracking-wider text-[var(--foreground)] font-bold mb-3 group-hover:text-[var(--gold)] transition-colors">
                    {fac.title}
                  </h3>

                  {/* ONE-LINE DESCRIPTION */}
                  <p className="text-sm text-[var(--foreground)]/70 leading-relaxed font-normal">
                    {fac.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs font-heading uppercase tracking-widest text-[var(--gold)] flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>King Standard</span>
                  <span>→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
