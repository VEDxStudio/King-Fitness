import React, { useState } from 'react';
import { MEMBERSHIP_PLANS } from '../data/gymData';
import { Check, X, ShieldCheck, Zap, Sparkles, HelpCircle } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
  onOpenPassModal: () => void;
}

export const MembershipPlans: React.FC<MembershipPlansProps> = ({
  onSelectPlan,
  onOpenPassModal,
}) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="memberships" className="py-20 lg:py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
            Transparent Pricing · No Hidden Fees
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white">
            INVEST IN YOUR{' '}
            <span className="gold-gradient-text">STRONGEST BODY.</span>
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base text-balance">
            Every membership includes full equipment access, pristine locker rooms, free fitness assessments, and zero initiation lock-in.
          </p>

          {/* BILLING CYCLE SELECTOR */}
          <div className="mt-8 inline-flex items-center p-1 bg-[#15151a] border border-white/10 rounded-lg">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all whitespace-nowrap cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-md transition-all flex items-center gap-2 whitespace-nowrap cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-black/30 text-white">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* PRICING CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {MEMBERSHIP_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPricePerMonth : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`rounded-xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.isPopular
                    ? 'bg-[#141418] border-2 border-amber-500/80 shadow-2xl shadow-amber-500/10 lg:-translate-y-2'
                    : 'card-dark'
                }`}
              >
                {/* POPULAR BADGE */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 text-black text-[11px] font-extrabold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-zinc-400 min-h-[32px] leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* PRICE DISPLAY */}
                  <div className="my-6 pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-zinc-400">$</span>
                      <span className="text-5xl font-extrabold text-white tabular-nums tracking-tight font-heading">
                        {price}
                      </span>
                      <span className="text-zinc-400 text-sm font-medium">/ month</span>
                    </div>
                    <div className="text-[11px] text-zinc-500 mt-1">
                      {billingCycle === 'annual'
                        ? 'Billed annually · Save $180/year'
                        : 'Billed monthly · Cancel anytime'}
                    </div>
                  </div>

                  {/* FEATURES LIST */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      What's Included:
                    </div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 space-y-2 opacity-40">
                        {plan.notIncluded.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400 line-through">
                            <X className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* ACTION CTA */}
                <div className="pt-6 border-t border-white/[0.08]">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan.id)}
                    className={`w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider rounded-md transition-all cursor-pointer whitespace-nowrap ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black shadow-lg shadow-amber-500/20 active:scale-[0.98]'
                        : 'bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-amber-400/40'
                    }`}
                  >
                    {plan.ctaLabel}
                  </button>

                  <div className="mt-3 text-center">
                    <button
                      type="button"
                      onClick={onOpenPassModal}
                      className="text-[11px] text-zinc-400 hover:text-amber-400 transition-colors underline underline-offset-2"
                    >
                      or try a 1-day pass first
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* TRUST GUARANTEE BAR */}
        <div className="mt-12 p-5 bg-[#121215] border border-white/[0.08] rounded-xl flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-amber-400" />
            <span className="font-semibold text-zinc-300">14-Day Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span>
            <span>Zero Sneaky Maintenance Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span>
            <span>Free Membership Freezes Up To 60 Days</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span>
            <span>Complimentary Towels & Lockers</span>
          </div>
        </div>

      </div>
    </section>
  );
};
