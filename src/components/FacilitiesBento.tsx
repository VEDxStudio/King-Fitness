import React, { useState } from 'react';
import { FACILITY_ZONES } from '../data/gymData';
import { FacilityZone } from '../types';
import { Dumbbell, Activity, HeartPulse, Sparkles, UserCheck, ArrowRight, CheckCircle2, ChevronRight, X } from 'lucide-react';

interface FacilitiesBentoProps {
  onOpenPassModal: () => void;
}

export const FacilitiesBento: React.FC<FacilitiesBentoProps> = ({ onOpenPassModal }) => {
  const [selectedZone, setSelectedZone] = useState<FacilityZone | null>(null);

  const getZoneIcon = (id: string) => {
    switch (id) {
      case 'strength-iron':
        return Dumbbell;
      case 'turf-conditioning':
        return Activity;
      case 'cardio-endurance':
        return HeartPulse;
      case 'recovery-wellness':
        return Sparkles;
      case 'coaching-studio':
        return UserCheck;
      default:
        return Dumbbell;
    }
  };

  return (
    <section id="facilities" className="py-20 lg:py-28 bg-[#0d0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              World-Class Equipment & Campus
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              FIVE PURPOSE-BUILT <br />
              <span className="gold-gradient-text">TRAINING ZONES.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Every square foot is engineered for peak human output. No compromises, no cheap knockoff equipment.
          </p>
        </div>

        {/* ASYMMETRIC BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* ZONE 1: HEAVY IRON (MARQUEE 8 COLS) */}
          <div className="md:col-span-8 card-dark rounded-xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between group">
            {/* Ambient metallic sheen */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-amber-500/10 via-transparent to-transparent pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-amber-500 tracking-widest">
                  ZONE {FACILITY_ZONES[0].zoneNumber}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 bg-white/[0.05] px-2.5 py-1 rounded">
                  {FACILITY_ZONES[0].subtitle}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                {FACILITY_ZONES[0].title}
              </h3>

              <p className="text-sm text-zinc-300 max-w-2xl leading-relaxed mb-6">
                {FACILITY_ZONES[0].description}
              </p>

              {/* Key equipment highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {FACILITY_ZONES[0].keyEquipment.slice(0, 4).map((item, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-5 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-xs text-amber-400/90 font-medium">
                ★ {FACILITY_ZONES[0].highlight}
              </span>
              <button
                type="button"
                onClick={() => setSelectedZone(FACILITY_ZONES[0])}
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white hover:text-amber-400 transition-colors cursor-pointer"
              >
                <span>Full Spec Sheet</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ZONE 2: TURF & SPRINT TRACK (4 COLS) */}
          <div className="md:col-span-4 card-dark rounded-xl p-7 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-600/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-orange-500 tracking-widest">
                  ZONE {FACILITY_ZONES[1].zoneNumber}
                </span>
                <Activity className="w-5 h-5 text-orange-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {FACILITY_ZONES[1].title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {FACILITY_ZONES[1].description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-zinc-400">60-ft Seamless Track</span>
              <button
                type="button"
                onClick={() => setSelectedZone(FACILITY_ZONES[1])}
                className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ZONE 3: RECOVERY & SAUNA (4 COLS) */}
          <div className="md:col-span-4 card-dark rounded-xl p-7 flex flex-col justify-between group relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-amber-500 tracking-widest">
                  ZONE {FACILITY_ZONES[3].zoneNumber}
                </span>
                <Sparkles className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {FACILITY_ZONES[3].title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {FACILITY_ZONES[3].description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-zinc-400">195°F Sauna & 48°F Plunge</span>
              <button
                type="button"
                onClick={() => setSelectedZone(FACILITY_ZONES[3])}
                className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ZONE 4: CARDIO & ENDURANCE (4 COLS) */}
          <div className="md:col-span-4 card-dark rounded-xl p-7 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-yellow-500 tracking-widest">
                  ZONE {FACILITY_ZONES[2].zoneNumber}
                </span>
                <HeartPulse className="w-5 h-5 text-yellow-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                {FACILITY_ZONES[2].title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {FACILITY_ZONES[2].description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-zinc-400">Woodway & Concept2</span>
              <button
                type="button"
                onClick={() => setSelectedZone(FACILITY_ZONES[2])}
                className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* ZONE 5: COACHING & BIOMETRICS (4 COLS) */}
          <div className="md:col-span-4 card-dark rounded-xl p-7 flex flex-col justify-between group relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold text-amber-500 tracking-widest">
                  ZONE {FACILITY_ZONES[4].zoneNumber}
                </span>
                <UserCheck className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                {FACILITY_ZONES[4].title}
              </h3>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                {FACILITY_ZONES[4].description}
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
              <span className="text-[11px] text-zinc-400">InBody 570 Composition</span>
              <button
                type="button"
                onClick={() => setSelectedZone(FACILITY_ZONES[4])}
                className="text-xs font-bold uppercase tracking-wider text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Details</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM TOUR TRIGGER BANNER */}
        <div className="mt-12 bg-gradient-to-r from-amber-500/10 via-zinc-900 to-orange-500/10 border border-amber-500/20 rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400 font-bold mb-1">
              Want to see it in person?
            </div>
            <div className="text-lg sm:text-xl font-bold text-white">
              Come in for a private tour and test out the equipment for a full day.
            </div>
          </div>
          <button
            type="button"
            onClick={onOpenPassModal}
            className="shrink-0 px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-md transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
          >
            Claim Free Day Pass
          </button>
        </div>

      </div>

      {/* DETAIL MODAL */}
      {selectedZone && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#141418] border border-amber-500/30 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedZone(null)}
              className="absolute top-5 right-5 p-1 text-zinc-400 hover:text-white rounded-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono font-bold text-amber-500 mb-1">
              ZONE {selectedZone.zoneNumber} SPECIFICATIONS
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              {selectedZone.title}
            </h3>
            <p className="text-sm text-zinc-300 mb-6 leading-relaxed">
              {selectedZone.description}
            </p>

            <div className="mb-6">
              <div className="text-xs uppercase tracking-wider font-semibold text-zinc-400 mb-3">
                Full Equipment Roster:
              </div>
              <ul className="space-y-2.5">
                {selectedZone.keyEquipment.map((eq, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{eq}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-3.5 bg-black/40 border border-white/10 rounded-lg text-xs text-amber-300/90 mb-6">
              <span className="font-semibold text-white">Facility Standard: </span>
              {selectedZone.highlight}
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedZone(null);
                  onOpenPassModal();
                }}
                className="w-full py-2.5 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-orange-500 rounded-md"
              >
                Experience This Zone Free
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
