import React from 'react';

export const StatsStrip: React.FC = () => {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "10+", label: "Expert Trainers" },
    { number: "6 AM–10 PM", label: "Open Daily" },
    { number: "5000", suffix: "Sq. Ft.", label: "Floor Space" },
  ];

  return (
    <div className="bg-[var(--charcoal)] border-y border-[var(--border)] py-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/[0.08]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center px-4 ${
                idx === 0 || idx === 1 ? 'border-b border-white/[0.06] pb-4 lg:border-b-0 lg:pb-0' : ''
              }`}
            >
              <div className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient-brand tabular-nums leading-none">
                {stat.number} {stat.suffix && <span className="text-2xl sm:text-3xl">{stat.suffix}</span>}
              </div>
              <div className="font-heading text-xs sm:text-sm uppercase tracking-widest text-[var(--foreground)]/80 mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
