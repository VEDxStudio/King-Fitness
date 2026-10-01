import React, { useState } from 'react';
import { KingLogo } from './KingLogo';
import { X, CheckCircle, QrCode, Sparkles, Shield, Calendar, ArrowRight, Printer, Share2 } from 'lucide-react';
import { MEMBERSHIP_PLANS } from '../data/gymData';

interface VIPPassModalProps {
  isOpen: boolean;
  initialPlanId?: string | null;
  onClose: () => void;
}

export const VIPPassModal: React.FC<VIPPassModalProps> = ({
  isOpen,
  initialPlanId,
  onClose,
}) => {
  const [step, setStep] = useState<'form' | 'success'>('form');
  const [selectedPlan, setSelectedPlan] = useState<string>(initialPlanId || 'pro');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitDate: new Date().toISOString().split('T')[0],
    experience: 'intermediate',
    primaryGoal: 'strength',
  });
  const [passCode, setPassCode] = useState<string>('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;
    const randomCode = `KFC-${Math.floor(100000 + Math.random() * 900000)}`;
    setPassCode(randomCode);
    setStep('success');
  };

  const currentPlan = MEMBERSHIP_PLANS.find((p) => p.id === selectedPlan) || MEMBERSHIP_PLANS[1];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#121216] border border-amber-500/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-zinc-400 hover:text-white rounded-md transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <KingLogo className="h-8 w-auto" />
            </div>

            <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-1">
              CLAIM YOUR ACCESS PASS.
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Experience King Fitness Center for a full day or finalize your membership enrollment with zero initiation fees.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* PLAN SELECTION TABS */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1.5">
                  Selected Tier or Pass
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('pass')}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-all ${
                      selectedPlan === 'pass'
                        ? 'bg-amber-500 text-black border-amber-500 font-extrabold'
                        : 'bg-black/40 text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    1-Day Free Pass
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('pro')}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-all ${
                      selectedPlan === 'pro'
                        ? 'bg-amber-500 text-black border-amber-500 font-extrabold'
                        : 'bg-black/40 text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    Pro Athletic
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('elite-vip')}
                    className={`py-2 px-2 text-xs font-bold rounded-lg border text-center transition-all ${
                      selectedPlan === 'elite-vip'
                        ? 'bg-amber-500 text-black border-amber-500 font-extrabold'
                        : 'bg-black/40 text-zinc-400 border-white/10 hover:text-white'
                    }`}
                  >
                    King Elite VIP
                  </button>
                </div>
              </div>

              {/* NAME & PHONE */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-[#18181f] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    Phone (for SMS pass) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#18181f] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your.email@example.com"
                  className="w-full bg-[#18181f] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              {/* DATE & GOAL */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    Target Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full bg-[#18181f] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                    Primary Goal
                  </label>
                  <select
                    value={formData.primaryGoal}
                    onChange={(e) => setFormData({ ...formData, primaryGoal: e.target.value })}
                    className="w-full bg-[#18181f] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="strength">Heavy Strength & Powerlifting</option>
                    <option value="muscle">Hypertrophy & Muscle Gain</option>
                    <option value="fatloss">Fat Loss & Conditioning</option>
                    <option value="recovery">Athletic Longevity & Recovery</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-md transition-all shadow-lg shadow-amber-500/20 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Generate Instant Digital Pass</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-center text-zinc-500 flex items-center justify-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>No credit card required. Instant check-in upon arrival.</span>
              </div>
            </form>
          </div>
        ) : (
          /* SUCCESS: DIGITAL VIP PASS CARD */
          <div className="text-center space-y-5 animate-in zoom-in-95 duration-200">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="font-heading text-3xl font-bold uppercase tracking-tight text-white mb-1">
                PASS CONFIRMED & ACTIVE.
              </h3>
              <p className="text-xs text-zinc-400">
                Show this digital pass to the King Fitness front desk when you arrive.
              </p>
            </div>

            {/* HIGH-TECH DIGITAL PASS TICKET */}
            <div className="bg-gradient-to-br from-[#1c1c24] to-[#111116] border-2 border-amber-500/50 rounded-xl p-6 text-left relative shadow-2xl overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />

              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <KingLogo className="h-7 w-auto" />
                <span className="text-[10px] font-mono uppercase tracking-wider text-black bg-amber-400 font-extrabold px-2 py-0.5 rounded">
                  {selectedPlan === 'pass' ? '1-DAY VIP PASS' : 'MEMBERSHIP PASS'}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs mb-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Pass Holder</div>
                  <div className="font-bold text-white text-sm">{formData.name}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Valid Date</div>
                  <div className="font-mono text-amber-400 font-bold">{formData.visitDate}</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs pb-4 border-b border-white/10 mb-4">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Facility Access</div>
                  <div className="text-zinc-200 font-medium">All 5 Training Zones + Sauna</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-wider">Digital Pass ID</div>
                  <div className="font-mono text-white font-extrabold">{passCode}</div>
                </div>
              </div>

              {/* SIMULATED BARCODE */}
              <div className="flex flex-col items-center justify-center pt-1">
                <div className="flex gap-1 h-10 w-full max-w-xs items-center justify-center opacity-80">
                  {[4, 2, 6, 2, 5, 1, 3, 2, 6, 1, 4, 3, 2, 5, 2, 4, 2, 6, 3, 1, 4, 2, 5, 3].map((w, i) => (
                    <div
                      key={i}
                      style={{ width: `${w}px` }}
                      className="h-full bg-white rounded-none"
                    />
                  ))}
                </div>
                <div className="text-[10px] font-mono text-zinc-400 tracking-[0.25em] mt-1">
                  {passCode}
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => window.print()}
                className="w-1/2 py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-zinc-300 hover:text-white bg-white/10 hover:bg-white/15 rounded-md flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Save / Print</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-orange-500 rounded-md transition-all shadow-md cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
