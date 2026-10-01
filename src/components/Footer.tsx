import React from 'react';
import { KingLogo } from './KingLogo';
import { GYM_INFO } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenPassModal: () => void;
  onOpenJoinModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPassModal, onOpenJoinModal }) => {
  const currentYear = new Date().getFullYear();

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-white/[0.08] text-zinc-400 text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP ROW: LOGO & PRIMARY STATEMENT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.08]">
          
          {/* BRAND COLUMN */}
          <div className="md:col-span-5 space-y-4">
            <KingLogo className="h-12 sm:h-14 w-auto" />
            <p className="text-zinc-400 text-xs sm:text-sm max-w-sm leading-relaxed mt-4">
              King Fitness Center is Metro City's premier athletic training facility. Engineered for lifters, athletes, and anyone committed to progressive self-improvement.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-amber-400 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a href="#hero" onClick={(e) => handleSmoothScroll(e, '#hero')} className="hover:text-amber-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="hover:text-amber-400 transition-colors">
                  About King
                </a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleSmoothScroll(e, '#facilities')} className="hover:text-amber-400 transition-colors">
                  Training Zones
                </a>
              </li>
              <li>
                <a href="#memberships" onClick={(e) => handleSmoothScroll(e, '#memberships')} className="hover:text-amber-400 transition-colors">
                  Membership Plans
                </a>
              </li>
              <li>
                <a href="#trainers" onClick={(e) => handleSmoothScroll(e, '#trainers')} className="hover:text-amber-400 transition-colors">
                  Expert Coaches
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleSmoothScroll(e, '#gallery')} className="hover:text-amber-400 transition-colors">
                  Facility Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* OPERATIONS & HOURS */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Operational Hours
            </div>
            <ul className="space-y-1.5 text-zinc-400">
              <li className="text-zinc-200 font-medium">Mon – Fri:</li>
              <li className="font-mono text-xs">{GYM_INFO.operatingHours.weekdays}</li>
              <li className="text-zinc-200 font-medium pt-1">Saturday:</li>
              <li className="font-mono text-xs">{GYM_INFO.operatingHours.saturday}</li>
              <li className="text-zinc-200 font-medium pt-1">Sunday:</li>
              <li className="font-mono text-xs">{GYM_INFO.operatingHours.sunday}</li>
            </ul>
          </div>

          {/* HEADQUARTERS & ACTIONS */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase font-bold text-white tracking-wider">
              Gym Location
            </div>
            <div className="text-zinc-300">
              <p>{GYM_INFO.address}</p>
              <p>{GYM_INFO.city}</p>
              <p className="mt-2 text-zinc-400 font-mono">{GYM_INFO.phone}</p>
              <p className="text-zinc-400">{GYM_INFO.email}</p>
            </div>
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPassModal}
                className="w-full py-2.5 px-3 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-bold uppercase tracking-wider rounded-md text-xs transition-all shadow-md"
              >
                Claim Free 1-Day Pass
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: COPYRIGHT */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <div>
            © {currentYear} King Fitness Center LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-zinc-300 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-zinc-300 cursor-pointer">Membership Terms</span>
            <span>·</span>
            <span className="hover:text-zinc-300 cursor-pointer">Safety & Liability Waiver</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
