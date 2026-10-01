import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gymData';
import { GalleryItem } from '../types';
import { Dumbbell, Activity, Sparkles, UserCheck, Maximize2, X } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Spaces' },
    { id: 'strength', label: 'Heavy Iron' },
    { id: 'conditioning', label: 'Turf & Agility' },
    { id: 'recovery', label: 'Recovery & Sauna' },
    { id: 'coaching', label: 'Coaching Studio' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) =>
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#0d0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Virtual Facility Tour
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              INSIDE KING <br />
              <span className="gold-gradient-text">FITNESS CENTER.</span>
            </h2>
          </div>

          {/* FILTER CONTROLS */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-amber-500 text-black shadow-md'
                    : 'bg-[#15151a] text-zinc-400 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="card-dark rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 hover:border-amber-500/40 relative flex flex-col justify-between"
            >
              {/* STYLED ATHLETIC VISUAL CANVAS (Fall-back resilient) */}
              <div className="h-56 relative bg-gradient-to-br from-[#1b1b22] via-[#141418] to-black p-6 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffb800_1px,transparent_1px)] [background-size:16px_16px]" />
                
                {/* Visual Icon Badge */}
                <div className="flex items-center justify-between relative z-10">
                  <div className="w-10 h-10 rounded-lg bg-black/60 border border-white/10 flex items-center justify-center text-amber-400">
                    {item.category === 'strength' && <Dumbbell className="w-5 h-5" />}
                    {item.category === 'conditioning' && <Activity className="w-5 h-5" />}
                    {item.category === 'recovery' && <Sparkles className="w-5 h-5" />}
                    {item.category === 'coaching' && <UserCheck className="w-5 h-5" />}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20">
                    {item.specs}
                  </span>
                </div>

                {/* Atmosphere artistic typography */}
                <div className="relative z-10">
                  <div className="font-heading text-4xl font-extrabold uppercase text-white/10 tracking-widest leading-none select-none">
                    KING IRON
                  </div>
                  <div className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors mt-1">
                    {item.title}
                  </div>
                </div>

                {/* Subtle hover icon */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-5">
                <p className="text-xs text-zinc-400 leading-relaxed mb-3">
                  {item.description}
                </p>
                <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-3 border-t border-white/[0.06]">
                  <span className="capitalize">{item.category} Zone</span>
                  <span className="text-amber-400 font-semibold group-hover:underline">
                    View Specs →
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* LIGHTBOX MODAL */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#141418] border border-amber-500/30 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative animate-in fade-in zoom-in-95">
            <button
              onClick={() => setActiveItem(null)}
              className="absolute top-5 right-5 p-1 text-zinc-400 hover:text-white rounded-md"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono font-bold text-amber-500 uppercase mb-1">
              Facility Specification
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              {activeItem.title}
            </h3>
            <div className="inline-block text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 mb-4">
              {activeItem.specs}
            </div>
            <p className="text-sm text-zinc-300 leading-relaxed mb-6">
              {activeItem.description}
            </p>

            <div className="p-4 bg-black/50 border border-white/10 rounded-lg text-xs text-zinc-300 mb-6">
              <span className="font-semibold text-white">Member Access: </span>
              All members have access to this station during operational hours. Chalk stations and sanitation towels available nearby.
            </div>

            <button
              type="button"
              onClick={() => setActiveItem(null)}
              className="w-full py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-orange-500 rounded-md"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
