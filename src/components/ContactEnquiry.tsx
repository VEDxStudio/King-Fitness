import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ListFilter, Trash2 } from 'lucide-react';

interface StoredEnquiry {
  id: string;
  name: string;
  phone: string;
  plan: string;
  timestamp: string;
}

interface ContactEnquiryProps {
  initialPlan?: string;
}

export const ContactEnquiry: React.FC<ContactEnquiryProps> = ({ initialPlan = "Quarterly (₹4,000 / 3 mos)" }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [plan, setPlan] = useState(initialPlan);
  const [submitted, setSubmitted] = useState(false);
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [showEnquiriesList, setShowEnquiriesList] = useState(false);

  // Sync plan if changed from parent
  useEffect(() => {
    if (initialPlan) {
      if (initialPlan.toLowerCase().includes('monthly')) setPlan('Monthly (₹1,500 / mo)');
      else if (initialPlan.toLowerCase().includes('quarterly')) setPlan('Quarterly (₹4,000 / 3 mos)');
      else if (initialPlan.toLowerCase().includes('yearly')) setPlan('Yearly (₹12,000 / yr)');
      else if (initialPlan.toLowerCase().includes('free')) setPlan('Free Trial Session');
      else setPlan(initialPlan);
    }
  }, [initialPlan]);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('king_fitness_enquiries');
      if (saved) {
        setEnquiries(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const newEnquiry: StoredEnquiry = {
      id: `ENQ-${Date.now().toString().slice(-6)}`,
      name: name.trim(),
      phone: phone.trim(),
      plan,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', month: 'short', day: 'numeric' }),
    };

    const updated = [newEnquiry, ...enquiries];
    setEnquiries(updated);
    try {
      localStorage.setItem('king_fitness_enquiries', JSON.stringify(updated));
    } catch {
      // ignore
    }

    setSubmitted(true);
  };

  const handleClearEnquiries = () => {
    setEnquiries([]);
    localStorage.removeItem('king_fitness_enquiries');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[var(--charcoal)] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-14">
          <span className="eyebrow">Contact</span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[var(--foreground)] mt-3">
            Start Your Journey Today
          </h2>
        </div>

        {/* TWO COLUMNS: DETAILS LEFT, ENQUIRY CARD RIGHT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: LOCATION & DETAILS */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base sm:text-lg text-[var(--foreground)]/80 leading-relaxed font-normal">
              Have questions or want to tour the facility? Our team is ready to welcome you. Visit us in person during opening hours or drop an enquiry and we will contact you directly.
            </p>

            <div className="space-y-6">
              {/* ADDRESS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center text-black shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-heading text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-1">
                    Gym Location
                  </div>
                  <div className="text-base font-bold text-[var(--foreground)]">
                    742 Ironworks Boulevard, West District
                  </div>
                  <div className="text-sm text-[var(--foreground)]/70">
                    Near West Foundry Park, Pune 411038
                  </div>
                </div>
              </div>

              {/* PHONE */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center text-black shrink-0 mt-0.5">
                  <Phone className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-heading text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-1">
                    Direct Phone / WhatsApp
                  </div>
                  <a
                    href="tel:+919822054641"
                    className="text-base font-bold text-[var(--foreground)] hover:text-[var(--gold)] transition-colors font-heading tracking-wider"
                  >
                    +91 98220 54641
                  </a>
                  <div className="text-xs text-[var(--foreground)]/60">
                    Call front desk for immediate inquiries
                  </div>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center text-black shrink-0 mt-0.5">
                  <Mail className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-heading text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-1">
                    Email Desk
                  </div>
                  <a
                    href="mailto:contact@kingfitnesscenter.com"
                    className="text-base font-medium text-[var(--foreground)] hover:text-[var(--gold)] transition-colors"
                  >
                    contact@kingfitnesscenter.com
                  </a>
                </div>
              </div>

              {/* HOURS */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm bg-gradient-brand flex items-center justify-center text-black shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <div className="font-heading text-xs uppercase tracking-widest text-[var(--gold)] font-semibold mb-1">
                    Operating Hours
                  </div>
                  <div className="text-base font-bold text-[var(--foreground)] font-heading tracking-wide">
                    Mon–Sun · 6 AM – 10 PM
                  </div>
                  <div className="text-xs text-[var(--foreground)]/60">
                    Open all 7 days including holidays
                  </div>
                </div>
              </div>
            </div>

            {/* STORED ENQUIRIES REVIEW TOGGLE */}
            {enquiries.length > 0 && (
              <div className="pt-4 border-t border-[var(--border)]">
                <button
                  type="button"
                  onClick={() => setShowEnquiriesList(!showEnquiriesList)}
                  className="text-xs font-heading uppercase tracking-wider text-[var(--gold)] hover:underline inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  <span>View Stored Enquiries ({enquiries.length})</span>
                </button>
              </div>
            )}
          </div>

          {/* RIGHT: ENQUIRY CARD */}
          <div className="lg:col-span-7 bg-[var(--card)] border border-[var(--border)] rounded-sm p-8 sm:p-10 shadow-2xl relative">
            <div className="mb-6">
              <h3 className="font-heading text-2xl sm:text-3xl uppercase tracking-wider text-[var(--foreground)] font-bold mb-2">
                Send an Enquiry
              </h3>
              <p className="text-sm text-[var(--foreground)]/70 font-normal">
                Leave your details below and our head coach will call you back within 2 hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-10 px-6 text-center space-y-4 bg-[var(--background)]/60 border border-[var(--gold)]/40 rounded-sm animate-in fade-in">
                <div className="w-12 h-12 rounded-sm bg-gradient-brand text-black mx-auto flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="font-heading text-2xl uppercase tracking-wider text-[var(--foreground)] font-bold">
                  Enquiry Stored & Sent!
                </h4>
                <p className="text-sm text-[var(--foreground)]/80 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="text-[var(--gold)] font-bold">{name}</span>! Your enquiry for the{' '}
                  <span className="text-white font-medium">{plan}</span> has been recorded. Our front desk will call you at{' '}
                  <span className="text-[var(--gold)] font-mono">{phone}</span> shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                    }}
                    className="btn-ghost px-5 py-2 text-xs"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-[var(--foreground)]/80 mb-2 font-medium">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[var(--background)] border border-[var(--input)] rounded-sm px-4 py-3 text-sm text-[var(--foreground)] placeholder-white/20 focus:outline-none focus:border-[var(--gold)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-[var(--foreground)]/80 mb-2 font-medium">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98000 00000"
                    className="w-full bg-[var(--background)] border border-[var(--input)] rounded-sm px-4 py-3 text-sm text-[var(--foreground)] placeholder-white/20 focus:outline-none focus:border-[var(--gold)] transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-heading text-xs uppercase tracking-widest text-[var(--foreground)]/80 mb-2 font-medium">
                    Select Plan or Request
                  </label>
                  <select
                    value={plan}
                    onChange={(e) => setPlan(e.target.value)}
                    className="w-full bg-[var(--background)] border border-[var(--input)] rounded-sm px-4 py-3 text-sm text-[var(--foreground)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                  >
                    <option value="Quarterly (₹4,000 / 3 mos)">Quarterly (₹4,000 / 3 mos) — Most Popular</option>
                    <option value="Monthly (₹1,500 / mo)">Monthly (₹1,500 / month)</option>
                    <option value="Yearly (₹12,000 / yr)">Yearly (₹12,000 / year) — Best Value</option>
                    <option value="Free Trial Session">Book a Free 1-Day Trial Session</option>
                    <option value="Personal Coaching Enquiry">1-on-1 Personal Coaching Enquiry</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-primary w-full py-4 text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-glow"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </div>

                <div className="text-[11px] text-[var(--foreground)]/50 text-center">
                  We respect your privacy. No promotional spam, only direct assistance.
                </div>
              </form>
            )}

            {/* STORED ENQUIRIES DRAWER */}
            {showEnquiriesList && (
              <div className="mt-8 pt-6 border-t border-[var(--border)] animate-in fade-in">
                <div className="flex items-center justify-between mb-3">
                  <div className="font-heading text-xs uppercase tracking-widest text-[var(--gold)] font-bold">
                    Stored Enquiries (Locally Saved):
                  </div>
                  <button
                    type="button"
                    onClick={handleClearEnquiries}
                    className="text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Clear All</span>
                  </button>
                </div>
                <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                  {enquiries.map((enq) => (
                    <div key={enq.id} className="p-2.5 bg-[var(--background)] border border-white/5 rounded-sm text-xs flex justify-between items-center">
                      <div>
                        <span className="font-bold text-white">{enq.name}</span>
                        <span className="text-[var(--foreground)]/50 mx-1.5">·</span>
                        <span className="font-mono text-[var(--gold)]">{enq.phone}</span>
                        <div className="text-[10px] text-[var(--foreground)]/60">{enq.plan}</div>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--foreground)]/40">{enq.timestamp}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
