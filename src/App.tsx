import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsStrip } from './components/StatsStrip';
import { AboutGym } from './components/AboutGym';
import { FacilitiesSection } from './components/FacilitiesSection';
import { PricingPlans } from './components/PricingPlans';
import { CoachesSection } from './components/CoachesSection';
import { GymGallery } from './components/GymGallery';
import { ContactEnquiry } from './components/ContactEnquiry';
import { MainFooter } from './components/MainFooter';

export default function App() {
  const [selectedPlanForEnquiry, setSelectedPlanForEnquiry] = useState<string>('Quarterly (₹4,000 / 3 mos)');

  const scrollToContact = (planName?: string) => {
    if (planName) {
      setSelectedPlanForEnquiry(planName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPlans = () => {
    const plansElem = document.getElementById('membership-plans');
    if (plansElem) {
      plansElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] selection:bg-[var(--gold)] selection:text-black">
      {/* FIXED HEADER WITH SHRINK-ON-SCROLL & DROPDOWN MENU */}
      <Header onJoinClick={() => scrollToContact('Quarterly (₹4,000 / 3 mos)')} />

      <main>
        {/* HERO SECTION */}
        <HeroSection
          onViewPlans={scrollToPlans}
          onContactUs={() => scrollToContact()}
        />

        {/* STATS STRIP */}
        <StatsStrip />

        {/* ABOUT SECTION */}
        <AboutGym />

        {/* FACILITIES SECTION */}
        <FacilitiesSection />

        {/* MEMBERSHIP PLANS SECTION */}
        <PricingPlans
          onSelectPlan={(planName) => scrollToContact(planName)}
        />

        {/* TRAINERS SECTION */}
        <CoachesSection
          onBookSession={() => scrollToContact('Free Trial Session')}
        />

        {/* GALLERY SECTION */}
        <GymGallery />

        {/* CONTACT & ENQUIRY SECTION */}
        <ContactEnquiry initialPlan={selectedPlanForEnquiry} />
      </main>

      {/* FOOTER */}
      <MainFooter />
    </div>
  );
}
