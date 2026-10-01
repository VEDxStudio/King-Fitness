import React from 'react';
import { GYM_INFO } from '../data/gymData';
import { Users, Award, Flame, Dumbbell, Target } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [Users, Award, Flame, Dumbbell, Target];

  return (
    <section id="stats" className="relative z-20 bg-[#0d0d10] border-y border-white/[0.08] py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {GYM_INFO.stats.map((stat, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center text-center ${
                  idx === 4 ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <IconComponent className="w-4 h-4 text-amber-400" />
                  <span className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white tabular-nums">
                    {stat.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-zinc-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-zinc-500 mt-0.5">
                  {stat.context}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
