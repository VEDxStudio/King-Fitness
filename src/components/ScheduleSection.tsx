import React, { useState } from 'react';
import { GYM_CLASSES } from '../data/gymData';
import { Clock, Users, Flame, Calendar, ArrowRight } from 'lucide-react';

interface ScheduleSectionProps {
  onReserveClass: (className: string) => void;
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({ onReserveClass }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDay, setSelectedDay] = useState<string>('Monday');

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const categories = ['All', 'Strength', 'HIIT', 'Conditioning', 'Recovery'];

  // Hourly occupancy pattern simulation for local members to choose best time
  const hourlyData = [
    { hour: '5 AM', level: 25, label: 'Quiet' },
    { hour: '6 AM', level: 75, label: 'High' },
    { hour: '7 AM', level: 85, label: 'Peak' },
    { hour: '8 AM', level: 60, label: 'Moderate' },
    { hour: '9 AM', level: 40, label: 'Moderate' },
    { hour: '11 AM', level: 20, label: 'Quiet' },
    { hour: '1 PM', level: 35, label: 'Moderate' },
    { hour: '3 PM', level: 30, label: 'Quiet' },
    { hour: '5 PM', level: 90, label: 'Peak' },
    { hour: '6 PM', level: 95, label: 'Peak' },
    { hour: '7 PM', level: 80, label: 'High' },
    { hour: '9 PM', level: 35, label: 'Quiet' },
    { hour: '10 PM', level: 15, label: 'Quiet' },
  ];

  const filteredClasses = GYM_CLASSES.filter((c) => {
    const matchCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchDay = selectedDay === 'All' || c.day === selectedDay;
    return matchCategory && matchDay;
  });

  return (
    <section className="py-20 lg:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Timetable & Gym Traffic
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              GYM PEAK HOURS & <br />
              <span className="gold-gradient-text">CLASS SCHEDULE.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Plan your workouts around your ideal floor density. Small group athletic classes included with Pro and Elite tiers.
          </p>
        </div>

        {/* PEAK / QUIET TRAFFIC METER */}
        <div className="card-dark rounded-xl p-6 sm:p-8 mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/[0.08] gap-3">
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-400 font-bold mb-1">
                Typical Daily Floor Traffic
              </div>
              <div className="text-sm font-semibold text-white">
                Best quiet lifting windows: 5:00 AM – 6:00 AM & 10:30 AM – 3:30 PM
              </div>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Gym Floor: Moderate Density Right Now</span>
            </div>
          </div>

          <div className="grid grid-cols-6 sm:grid-cols-13 gap-2 items-end h-32 pt-4">
            {hourlyData.map((slot) => {
              const isPeak = slot.level >= 80;
              const isModerate = slot.level >= 45 && slot.level < 80;
              return (
                <div key={slot.hour} className="flex flex-col items-center gap-1.5 h-full justify-end group">
                  <span className="text-[10px] text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                    {slot.level}%
                  </span>
                  <div
                    style={{ height: `${slot.level}%` }}
                    className={`w-full max-w-[28px] rounded-t transition-all ${
                      isPeak
                        ? 'bg-gradient-to-t from-orange-600 to-amber-500'
                        : isModerate
                        ? 'bg-amber-500/60'
                        : 'bg-zinc-700/60'
                    }`}
                  />
                  <span className="text-[10px] font-mono text-zinc-400 whitespace-nowrap mt-1">
                    {slot.hour}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* CLASS TIMETABLE SECTION */}
        <div>
          {/* DAY SELECTOR BAR */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {days.map((day) => (
              <button
                key={day}
                type="button"
                onClick={() => setSelectedDay(day)}
                className={`px-4 py-2 text-xs font-bold uppercase rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedDay === day
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-[#151519] text-zinc-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* CATEGORY FILTER */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mr-2">
              Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white/15 text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* CLASSES LIST */}
          {filteredClasses.length === 0 ? (
            <div className="card-dark rounded-xl p-8 text-center text-zinc-400 text-sm">
              No scheduled group classes on {selectedDay} in {selectedCategory}. Open gym floor and recovery suite operate on standard hours.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredClasses.map((item) => (
                <div
                  key={item.id}
                  className="card-dark rounded-xl p-5 flex flex-col justify-between group hover:border-amber-500/30 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-zinc-400 mb-2">
                      <div className="flex items-center gap-1 font-mono text-amber-400 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{item.time} ({item.duration})</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-white/5 text-zinc-300">
                        {item.intensity}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-1 group-hover:text-amber-400 transition-colors">
                      {item.name}
                    </h4>

                    <div className="text-xs text-zinc-400 mb-4">
                      Coach: <span className="text-zinc-200 font-medium">{item.instructor}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500 font-mono">
                      {item.capacity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onReserveClass(item.name)}
                      className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                    >
                      <span>Reserve</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
