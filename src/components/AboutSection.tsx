import React from 'react';
import { Check, Shield, Flame, Zap, Award, ArrowUpRight } from 'lucide-react';

interface AboutSectionProps {
  onLearnMore: () => void;
  onClaimPass: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onClaimPass }) => {
  const pillars = [
    {
      index: "01",
      title: "Competition-Grade Heavy Iron",
      desc: "No plastic-wrapped weights or broken pulleys. We provide genuine Eleiko competition bars, IPF-spec calibrated discs, and urethane dumbbells up to 150 lbs.",
    },
    {
      index: "02",
      title: "Evidence-Based Coaching",
      desc: "Our trainers hold university degrees in exercise science and NSCA-CSCS credentials. We prescribe progressive overload and sustainable nutritional strategies.",
    },
    {
      index: "03",
      title: "Contrast Therapy Recovery Suite",
      desc: "Training hard is only half the battle. Rebuild muscle fibers with our 195°F cedar Finnish dry sauna and twin 48°F cold plunge immersion tubs.",
    },
    {
      index: "04",
      title: "Capped Membership & Zero Waiting",
      desc: "We cap active memberships to guarantee you never have to stand in line for a squat rack or dumbbell pair during peak training hours.",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#09090b] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              The King Fitness Advantage
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              ENGINEERED FOR LIFTERS <br />
              <span className="gold-gradient-text">WHO DEMAND REAL RESULTS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            We built King Fitness Center because local athletes deserve better than overcrowded franchise gyms with broken machines and uninterested staff.
          </p>
        </div>

        {/* 2-COLUMN STORY & PILLARS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: EDITORIAL STORY CARD */}
          <div className="lg:col-span-5 bg-[#121215] border border-white/[0.08] rounded-xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-orange-500/0 rounded-full blur-2xl pointer-events-none" />
            
            <div className="text-xs uppercase tracking-widest text-zinc-500 font-semibold mb-3">
              Our Philosophy
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              A serious gym for serious intent.
            </h3>
            
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>
                At King Fitness Center, whether you are stepping under a barbell for the very first time or chasing a 500-pound deadlift, you are treated like an athlete.
              </p>
              <p>
                Our facility is kept spotless, our equipment is inspected daily, and our community shares a mutual respect for the grind. Here, you leave excuses at the door.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-center justify-between">
              <div>
                <div className="font-bold text-white text-base">Murlidhar Kaldate</div>
                <div className="text-xs text-zinc-500">Founder & Head of Operations</div>
              </div>
              <button
                type="button"
                onClick={onClaimPass}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300"
              >
                <span>Try Us Free</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* RIGHT: 4 PILLARS LIST */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="card-dark rounded-xl p-6 transition-all duration-300 hover:translate-y-[-2px] group"
              >
                <div className="text-xs font-mono font-bold text-amber-500 mb-3 tracking-widest">
                  {pillar.index}
                </div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
