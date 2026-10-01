import React, { useState } from 'react';
import { GYM_INFO, FAQS } from '../data/gymData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, ChevronDown, HelpCircle, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onOpenPassModal: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenPassModal }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: 'membership',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Get In Touch & Visit Us
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              YOUR LOCAL <br />
              <span className="gold-gradient-text">HEADQUARTERS.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Conveniently located with dedicated private member parking, extended operational hours, and an open-door policy for all questions.
          </p>
        </div>

        {/* 2-COLUMN CONTACT & MAP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
          
          {/* LEFT: LOCATION INFO & HOURS (5 COLS) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* ADDRESS & HOURS CARD */}
            <div className="card-dark rounded-xl p-6 sm:p-8 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Gym Location</span>
                </div>
                <div className="text-lg font-bold text-white">
                  {GYM_INFO.address}
                </div>
                <div className="text-sm text-zinc-400 mt-0.5">
                  {GYM_INFO.city} (Directly opposite West Foundry Park)
                </div>
                <div className="text-xs text-amber-400/90 mt-2 font-medium">
                  ✓ 85 Dedicated On-Site Parking Spots
                </div>
              </div>

              {/* HOURS */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-3">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>Operating Hours</span>
                </div>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Monday – Friday</span>
                    <span className="text-white font-mono font-semibold">{GYM_INFO.operatingHours.weekdays}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Saturday</span>
                    <span className="text-white font-mono font-semibold">{GYM_INFO.operatingHours.saturday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Sunday</span>
                    <span className="text-white font-mono font-semibold">{GYM_INFO.operatingHours.sunday}</span>
                  </div>
                </div>
              </div>

              {/* DIRECT CONTACT BUTTONS */}
              <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 gap-3">
                <a
                  href={`tel:${GYM_INFO.phone}`}
                  className="py-2.5 px-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-md text-xs font-bold uppercase tracking-wider text-white text-center flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>Call Front Desk</span>
                </a>
                <button
                  type="button"
                  onClick={onOpenPassModal}
                  className="py-2.5 px-3 bg-gradient-to-r from-amber-400 to-orange-500 rounded-md text-xs font-bold uppercase tracking-wider text-black text-center transition-all shadow-md"
                >
                  1-Day VIP Pass
                </button>
              </div>
            </div>

            {/* STYLIZED DARK MAP CARD */}
            <div className="card-dark rounded-xl p-5 relative overflow-hidden h-52 flex flex-col justify-between bg-[#111115]">
              {/* Stylized dark grid map background */}
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)] bg-[size:24px_24px]" />
              
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">
                  LAT: 34.0522° N, LON: 118.2437° W
                </span>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Open Now
                </span>
              </div>

              <div className="relative z-10 flex items-center gap-3 bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10">
                <div className="w-8 h-8 rounded-full bg-amber-500 text-black flex items-center justify-center font-bold text-xs shrink-0">
                  K
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">
                    King Fitness Center
                  </div>
                  <div className="text-[11px] text-zinc-400 truncate">
                    742 Ironworks Blvd · West District
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: INTERACTIVE FORM (7 COLS) */}
          <div className="lg:col-span-7 card-dark rounded-xl p-6 sm:p-10 relative">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Have a question regarding corporate rates, personal coaching availability, or equipment? Fill out the form below and our management team will reply within 4 business hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 px-6 text-center space-y-4 bg-black/40 border border-emerald-500/30 rounded-xl animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-white">Inquiry Received</h4>
                <p className="text-xs sm:text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>! Our head membership advisor will reach you at <span className="text-white font-mono">{formData.phone}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', inquiryType: 'membership', message: '' });
                  }}
                  className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-amber-400 hover:underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Stone"
                      className="w-full bg-[#18181e] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#18181e] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@example.com"
                      className="w-full bg-[#18181e] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                      Inquiry Subject
                    </label>
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full bg-[#18181e] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="membership">Membership Plans & Pricing</option>
                      <option value="coaching">1-on-1 Personal Training</option>
                      <option value="tour">Facility Tour & Free Pass</option>
                      <option value="corporate">Corporate & Team Memberships</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                    Your Message / Specific Goals
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your fitness history, specific strength goals, or questions..."
                    className="w-full bg-[#18181e] border border-white/15 rounded-lg px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry to Front Desk</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="pt-12 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Common Questions
            </div>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white">
              FREQUENTLY ASKED QUESTIONS.
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="card-dark rounded-xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed border-t border-white/[0.06] animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
