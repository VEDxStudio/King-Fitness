import React from 'react';
import { TRANSFORMATIONS } from '../data/gymData';
import { Star, TrendingUp, Quote, CheckCircle } from 'lucide-react';

interface TransformationsSectionProps {
  onClaimPass: () => void;
}

export const TransformationsSection: React.FC<TransformationsSectionProps> = ({ onClaimPass }) => {
  return (
    <section className="py-20 lg:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Documented Client Proof
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              REAL PEOPLE. <br />
              <span className="gold-gradient-text">UNDENIABLE NUMBERS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Progress is not a coincidence. It is the natural consequence of consistent effort, structured progression, and our supportive environment.
          </p>
        </div>

        {/* PROOF CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRANSFORMATIONS.map((item) => (
            <div
              key={item.id}
              className="card-dark rounded-xl p-7 flex flex-col justify-between relative group hover:border-amber-500/30 transition-all duration-300"
            >
              <div>
                {/* 5 STARS */}
                <div className="flex items-center gap-1 mb-4 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-[11px] text-zinc-400 ml-2 font-mono">5.0 Verified</span>
                </div>

                {/* METRIC BANNER */}
                <div className="p-4 bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg mb-5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{item.duration} Transformation</span>
                  </div>
                  <div className="font-heading text-xl font-bold text-white tracking-wide">
                    {item.achievement}
                  </div>
                  <div className="text-xs text-zinc-400 font-mono mt-1">
                    {item.metric}
                  </div>
                </div>

                {/* QUOTE PROSE */}
                <blockquote className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              {/* ATTRIBUTION */}
              <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                <div>
                  <div className="font-bold text-white text-sm">
                    {item.name}, {item.age}
                  </div>
                  <div className="text-[11px] text-zinc-500">
                    Program: {item.program}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Member</span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM METRIC AGGREGATE */}
        <div className="mt-14 p-6 sm:p-8 bg-[#121215] border border-white/[0.08] rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0">
              <span className="font-heading text-2xl font-bold text-amber-400">98%</span>
            </div>
            <div>
              <div className="text-sm font-bold text-white">98.4% Member Retention & Goal Achievement</div>
              <div className="text-xs text-zinc-400">Members who train at King Fitness Center $\ge$ 3 times weekly hit their target benchmark within 90 days.</div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClaimPass}
            className="shrink-0 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-orange-500 rounded-md transition-all shadow-md shadow-amber-500/20 hover:from-amber-300 hover:to-orange-400"
          >
            Start Your Transformation
          </button>
        </div>

      </div>
    </section>
  );
};
