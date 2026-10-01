import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PricingPlansProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingPlans: React.FC<PricingPlansProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: "monthly",
      name: "Monthly",
      price: "₹1,500",
      period: "/ month",
      description: "Great for testing the waters and staying flexible month-to-month.",
      featured: false,
      perks: [
        "Full access to Strength & Cardio floors",
        "Clean locker room & shower facilities",
        "Complimentary fitness assessment",
        "Open 6 AM to 10 PM daily",
      ],
    },
    {
      id: "quarterly",
      name: "Quarterly",
      price: "₹4,000",
      period: "/ 3 months",
      description: "Our most popular commitment for achieving visible, lasting physique results.",
      featured: true,
      perks: [
        "Everything in Monthly Plan",
        "Save ₹500 on total commitment",
        "1 Free 1-on-1 Personal Training Session",
        "Personalized workout routine guidance",
        "Free locker reservation",
      ],
    },
    {
      id: "yearly",
      name: "Yearly",
      price: "₹12,000",
      period: "/ year",
      description: "Maximum savings for lifters dedicated to making fitness a permanent lifestyle.",
      featured: false,
      perks: [
        "Everything in Quarterly Plan",
        "Save ₹6,000 across the full year",
        "4 Free 1-on-1 Personal Training Sessions",
        "Custom nutritional & macro breakdown",
        "2 Free Guest Passes each month",
        "Complimentary King Fitness gym bag",
      ],
    },
  ];

  return (
    <section id="membership-plans" className="py-20 lg:py-28 bg-[var(--background)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="eyebrow justify-center">Membership Plans</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-3">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--foreground)]/70">
            Straightforward pricing with zero hidden maintenance charges. Select a plan to get started today.
          </p>
        </div>

        {/* 3 PRICING CARDS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-sm p-8 sm:p-9 flex flex-col justify-between relative transition-all duration-300 ${
                plan.featured
                  ? 'bg-[var(--card)] border-2 border-[var(--gold)] shadow-glow lg:-translate-y-3'
                  : 'bg-[var(--card)] border border-[var(--border)] hover:border-white/20'
              }`}
            >
              {/* FEATURED BADGE */}
              {plan.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-0.5 bg-gradient-brand text-black font-heading text-xs uppercase tracking-widest font-bold rounded-sm shadow-md">
                  Most Popular
                </div>
              )}

              <div>
                {/* PLAN NAME & PRICE */}
                <div className="mb-6">
                  <h3 className="font-heading text-3xl uppercase tracking-wider text-[var(--foreground)] font-bold mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[var(--foreground)]/60 min-h-[32px] leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="pb-6 mb-6 border-b border-[var(--border)] flex items-baseline gap-2">
                  <span className="font-heading text-5xl sm:text-6xl font-bold tracking-tight text-gradient-brand tabular-nums">
                    {plan.price}
                  </span>
                  <span className="font-heading text-sm uppercase tracking-wider text-[var(--foreground)]/60">
                    {plan.period}
                  </span>
                </div>

                {/* CUMULATIVE PERKS */}
                <div className="space-y-3.5 mb-8">
                  <div className="font-heading text-xs uppercase tracking-widest text-[var(--gold)] font-semibold">
                    What's Included:
                  </div>
                  {plan.perks.map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-sm bg-gradient-brand flex items-center justify-center text-black shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-sm text-[var(--foreground)]/90 leading-snug font-normal">
                        {perk}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTON TO CONTACT FORM */}
              <div className="pt-4 border-t border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3.5 px-4 text-sm inline-flex items-center justify-center gap-2 cursor-pointer ${
                    plan.featured
                      ? 'btn-primary shadow-glow'
                      : 'btn-ghost'
                  }`}
                >
                  <span>Select {plan.name} Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
