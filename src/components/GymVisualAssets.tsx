import React from 'react';

// Hero Visual: Athlete mid deadlift, moody dark gym, single warm gold rim light, heavy shadows
export const HeroVisual: React.FC<{ className?: string }> = ({ className = "w-full h-full object-cover" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#0a0a0c] select-none ${className}`}>
      <svg
        viewBox="0 0 1920 1088"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Athlete performing deadlift in a dark gym with warm gold rim light"
      >
        <defs>
          {/* Gold to ember rim lighting gradient */}
          <linearGradient id="goldRimGrad" x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor="#FFF2A3" />
            <stop offset="35%" stopColor="#F6BE22" />
            <stop offset="70%" stopColor="#F05A22" />
            <stop offset="100%" stopColor="#0B0B0E" />
          </linearGradient>

          <linearGradient id="steelBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#737373" />
            <stop offset="50%" stopColor="#D4D4D4" />
            <stop offset="100%" stopColor="#404040" />
          </linearGradient>

          <radialGradient id="goldSpotlight" cx="62%" cy="38%" r="48%">
            <stop offset="0%" stopColor="#F6BE22" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#F05A22" stopOpacity="0.18" />
            <stop offset="85%" stopColor="#0A0A0C" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="floorGrad" x1="50%" y1="65%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#141418" />
            <stop offset="40%" stopColor="#111114" />
            <stop offset="100%" stopColor="#08080A" />
          </linearGradient>

          {/* Chalk dust particles filter */}
          <filter id="chalkGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Deep charcoal/black environment base */}
        <rect width="1920" height="1088" fill="#0A0A0C" />

        {/* 2. Low-key industrial background silhouettes (Power racks & beams) */}
        <g opacity="0.25">
          {/* Vertical steel pillars */}
          <rect x="220" y="80" width="44" height="850" fill="#202026" />
          <rect x="520" y="40" width="36" height="890" fill="#1C1C22" />
          <rect x="1420" y="100" width="40" height="830" fill="#222228" />
          <rect x="1740" y="60" width="48" height="870" fill="#1A1A20" />

          {/* Crossbars and pullup bar lines */}
          <line x1="200" y1="240" x2="600" y2="240" stroke="#2B2B33" strokeWidth="12" />
          <line x1="1380" y1="260" x2="1800" y2="260" stroke="#2B2B33" strokeWidth="12" />

          {/* Background dumbbell rack silhouette */}
          <path d="M 120 720 L 450 720 L 430 840 L 100 840 Z" fill="#17171C" />
        </g>

        {/* 3. Strong Directional Warm Gold Overhead Spotlight */}
        <ellipse cx="1200" cy="420" rx="680" ry="520" fill="url(#goldSpotlight)" />

        {/* 4. Textured Rubber Training Platform Floor */}
        <polygon points="0,820 1920,820 1920,1088 0,1088" fill="url(#floorGrad)" />
        <line x1="0" y1="820" x2="1920" y2="820" stroke="#27272F" strokeWidth="3" opacity="0.6" />
        {/* Floor rubber seams */}
        <line x1="480" y1="820" x2="320" y2="1088" stroke="#1F1F24" strokeWidth="4" />
        <line x1="960" y1="820" x2="960" y2="1088" stroke="#1F1F24" strokeWidth="4" />
        <line x1="1440" y1="820" x2="1600" y2="1088" stroke="#1F1F24" strokeWidth="4" />

        {/* 5. Golden Floor Reflection Scrim */}
        <ellipse cx="1180" cy="880" rx="340" ry="40" fill="#F6BE22" opacity="0.12" />

        {/* 6. ATHLETE SILHOUETTE MID-DEADLIFT (Back & shoulders tense, gripping barbell) */}
        <g id="athlete" transform="translate(420, 20)">
          {/* Athlete dark core shadow body */}
          {/* Head & neck angled down, laser-focused */}
          <path
            d="M 760 380 
               C 740 370, 715 385, 710 410 
               C 705 435, 720 455, 745 460 
               C 775 465, 800 440, 795 410 
               C 790 390, 778 385, 760 380 Z"
            fill="#0F0F12"
          />

          {/* Muscular back, traps, lats, and spine */}
          <path
            d="M 740 455 
               C 690 480, 650 540, 640 620 
               C 630 700, 670 760, 720 800 
               L 810 800 
               C 850 760, 880 690, 870 610 
               C 860 530, 800 475, 740 455 Z"
            fill="#121216"
          />

          {/* Left arm extended gripping the knurled bar */}
          <path
            d="M 645 560 
               C 630 610, 620 670, 610 730 
               L 615 780 
               L 638 780 
               C 645 725, 660 660, 675 600 Z"
            fill="#14141A"
          />

          {/* Right arm gripping bar with muscular tricep/bicep definition */}
          <path
            d="M 855 550 
               C 865 605, 875 665, 885 728 
               L 885 780 
               L 860 780 
               C 850 720, 835 655, 825 595 Z"
            fill="#16161D"
          />

          {/* Powerful quads and hamstrings in deep hinge stance */}
          <path
            d="M 710 790 
               C 670 820, 645 870, 630 930 
               L 655 930 
               C 675 885, 705 845, 745 825 Z"
            fill="#101014"
          />
          <path
            d="M 820 790 
               C 855 820, 880 870, 895 930 
               L 870 930 
               C 850 885, 825 845, 785 825 Z"
            fill="#121217"
          />

          {/* GOLD RIM LIGHT ACCENTS (The signature warm glow outlining the athlete) */}
          {/* Trap & shoulder rim highlight */}
          <path
            d="M 750 380 
               C 770 385, 792 405, 795 425 
               C 798 445, 840 480, 862 530 
               C 880 575, 888 640, 892 725"
            stroke="url(#goldRimGrad)"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Subtle secondary left rim accent */}
          <path
            d="M 718 395 
               C 708 415, 706 438, 715 455 
               C 680 485, 650 540, 642 610"
            stroke="url(#goldRimGrad)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.8"
          />

          {/* Right tricep & forearm rim light */}
          <path
            d="M 872 580 L 892 730"
            stroke="#F6BE22"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* 7. KNURLED STEEL BARBELL & OLYMPIC BUMPER PLATES */}
          {/* Barbell shaft passing through hands */}
          <rect x="360" y="770" width="780" height="18" rx="3" fill="url(#steelBarGrad)" />
          {/* Knurling highlights */}
          <rect x="520" y="771" width="140" height="16" fill="#A3A3A3" opacity="0.4" />
          <rect x="840" y="771" width="140" height="16" fill="#A3A3A3" opacity="0.4" />

          {/* Left Olympic Bumper Plates stack */}
          <rect x="310" y="650" width="46" height="260" rx="6" fill="#1C1C22" stroke="#2B2B33" strokeWidth="2" />
          <rect x="260" y="660" width="44" height="240" rx="6" fill="#18181E" stroke="#26262F" strokeWidth="2" />
          <rect x="210" y="675" width="44" height="210" rx="6" fill="#141418" stroke="#202026" strokeWidth="2" />
          {/* Left collar */}
          <rect x="358" y="765" width="18" height="28" rx="2" fill="#E5E5E5" />

          {/* Right Olympic Bumper Plates stack (Catching gold rim highlight) */}
          {/* Collar */}
          <rect x="1124" y="765" width="18" height="28" rx="2" fill="#E5E5E5" />
          <rect x="1144" y="650" width="46" height="260" rx="6" fill="#1C1C22" stroke="url(#goldRimGrad)" strokeWidth="3" />
          <rect x="1196" y="660" width="44" height="240" rx="6" fill="#18181E" stroke="#F6BE22" strokeWidth="2" opacity="0.8" />
          <rect x="1246" y="675" width="44" height="210" rx="6" fill="#141418" stroke="#F05A22" strokeWidth="1.5" opacity="0.6" />

          {/* Chalk dust suspended in the beam of warm gold light */}
          <g filter="url(#chalkGlow)" opacity="0.85">
            <circle cx="680" cy="740" r="3" fill="#FFFFFF" opacity="0.7" />
            <circle cx="710" cy="710" r="2" fill="#F6BE22" opacity="0.8" />
            <circle cx="750" cy="735" r="4" fill="#FFFFFF" opacity="0.9" />
            <circle cx="820" cy="720" r="2.5" fill="#FFE082" opacity="0.8" />
            <circle cx="870" cy="750" r="3.5" fill="#FFFFFF" opacity="0.75" />
            <circle cx="890" cy="705" r="1.5" fill="#FFFFFF" opacity="0.6" />
            <circle cx="920" cy="740" r="3" fill="#F6BE22" opacity="0.7" />
          </g>
        </g>
      </svg>
    </div>
  );
};

// Facility Visual: The training floor: squat racks, dumbbell rack, warm low light
export const FacilityVisual: React.FC<{ className?: string }> = ({ className = "w-full h-full object-cover" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#0d0d10] select-none rounded-sm ${className}`}>
      <svg
        viewBox="0 0 1024 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Training floor with power racks and dumbbell rack in warm ambient light"
      >
        <defs>
          <linearGradient id="facSpot" x1="50%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor="#F6BE22" stopOpacity="0.25" />
            <stop offset="60%" stopColor="#141418" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B0B0E" />
          </linearGradient>

          <linearGradient id="steelUpright" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2A2A33" />
            <stop offset="40%" stopColor="#4A4A58" />
            <stop offset="70%" stopColor="#2A2A33" />
            <stop offset="100%" stopColor="#15151A" />
          </linearGradient>
        </defs>

        {/* Background & Floor */}
        <rect width="1024" height="768" fill="#0E0E12" />
        <rect x="0" y="440" width="1024" height="328" fill="#141418" />
        <ellipse cx="512" cy="300" rx="420" ry="280" fill="url(#facSpot)" />

        {/* 1. Heavy Power Rack 1 (Left) */}
        <rect x="140" y="120" width="30" height="520" rx="3" fill="url(#steelUpright)" />
        <rect x="290" y="120" width="30" height="520" rx="3" fill="url(#steelUpright)" />
        {/* Top crossbar */}
        <rect x="140" y="140" width="180" height="24" fill="#202028" />
        {/* Safety pins & J-hooks */}
        <rect x="140" y="320" width="180" height="14" fill="#F6BE22" opacity="0.9" />
        <rect x="140" y="480" width="180" height="16" fill="#33333F" />
        {/* Upright pinholes */}
        {[...Array(14)].map((_, i) => (
          <circle key={i} cx="155" cy={180 + i * 28} r="3" fill="#000000" />
        ))}
        {[...Array(14)].map((_, i) => (
          <circle key={i} cx="305" cy={180 + i * 28} r="3" fill="#000000" />
        ))}

        {/* 2. Heavy Power Rack 2 (Center) */}
        <rect x="420" y="90" width="34" height="550" rx="3" fill="url(#steelUpright)" />
        <rect x="600" y="90" width="34" height="550" rx="3" fill="url(#steelUpright)" />
        <rect x="420" y="115" width="214" height="26" fill="#252530" />
        <rect x="420" y="290" width="214" height="16" fill="#F05A22" opacity="0.85" />
        <rect x="420" y="460" width="214" height="18" fill="#33333F" />
        {[...Array(15)].map((_, i) => (
          <circle key={i} cx="437" cy={160 + i * 28} r="3.5" fill="#000000" />
        ))}
        {[...Array(15)].map((_, i) => (
          <circle key={i} cx="617" cy={160 + i * 28} r="3.5" fill="#000000" />
        ))}
        {/* Olympic Bar resting on J-hooks */}
        <rect x="360" y="282" width="330" height="12" rx="2" fill="#E5E5E5" />
        {/* Plates loaded on bar */}
        <rect x="330" y="235" width="28" height="106" rx="4" fill="#181820" stroke="#333" strokeWidth="1" />
        <rect x="692" y="235" width="28" height="106" rx="4" fill="#181820" stroke="#F6BE22" strokeWidth="1.5" />

        {/* 3. Multi-tier Dumbbell Rack (Right) */}
        <polygon points="740,640 1010,560 1024,768 740,768" fill="#111116" />
        {/* Top tier rail */}
        <line x1="750" y1="460" x2="1020" y2="400" stroke="#3A3A48" strokeWidth="14" strokeLinecap="round" />
        {/* Bottom tier rail */}
        <line x1="750" y1="560" x2="1020" y2="500" stroke="#2D2D38" strokeWidth="16" strokeLinecap="round" />

        {/* Urethane dumbbells stacked in perspective */}
        {[0, 1, 2, 3, 4].map((idx) => {
          const x = 770 + idx * 56;
          const y = 445 - idx * 12;
          return (
            <g key={idx}>
              <rect x={x} y={y - 18} width="16" height="36" rx="3" fill="#181820" stroke="#444" strokeWidth="1" />
              <rect x={x + 16} y={y - 5} width="18" height="10" fill="#B0B0B0" />
              <rect x={x + 34} y={y - 18} width="16" height="36" rx="3" fill="#181820" stroke="#F6BE22" strokeWidth="0.8" />
            </g>
          );
        })}

        {/* Warm Gold Floor Linear Glow */}
        <line x1="0" y1="440" x2="1024" y2="440" stroke="#F6BE22" strokeWidth="2" opacity="0.3" />
      </svg>
    </div>
  );
};

// Trainer Visual: Coach spotting and mentoring a member, warm dark grade
export const TrainerVisual: React.FC<{ className?: string }> = ({ className = "w-full h-full object-cover" }) => {
  return (
    <div className={`relative overflow-hidden bg-[#0d0d10] select-none rounded-sm ${className}`}>
      <svg
        viewBox="0 0 1024 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        aria-label="Certified gym coach spotting an athlete with expert guidance"
      >
        <defs>
          <linearGradient id="coachGlow" x1="60%" y1="20%" x2="30%" y2="90%">
            <stop offset="0%" stopColor="#FFF099" />
            <stop offset="40%" stopColor="#F6BE22" />
            <stop offset="85%" stopColor="#F05A22" />
            <stop offset="100%" stopColor="#0B0B0E" />
          </linearGradient>

          <radialGradient id="coachSpot" cx="50%" cy="35%" r="45%">
            <stop offset="0%" stopColor="#F6BE22" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#0B0B0E" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0A0A0C" />
          </radialGradient>
        </defs>

        {/* Background Environment */}
        <rect width="1024" height="768" fill="#0B0B0E" />
        <ellipse cx="560" cy="320" rx="380" ry="260" fill="url(#coachSpot)" />

        {/* Bench & Upright Rack Silhouette */}
        <rect x="220" y="240" width="24" height="420" fill="#202028" />
        <rect x="680" y="240" width="24" height="420" fill="#202028" />
        {/* Bench pad */}
        <rect x="260" y="520" width="380" height="34" rx="4" fill="#1C1C24" />

        {/* ATHLETE ON BENCH (Pressing Barbell) */}
        {/* Athlete head & torso on bench */}
        <circle cx="360" cy="510" r="32" fill="#141418" />
        <rect x="380" y="490" width="180" height="48" rx="6" fill="#16161D" />
        {/* Athlete arms pressing bar */}
        <path d="M 420 500 L 440 370" stroke="#1C1C24" strokeWidth="22" strokeLinecap="round" />
        <path d="M 520 500 L 500 370" stroke="#1C1C24" strokeWidth="22" strokeLinecap="round" />

        {/* COACH SPOTTING (Standing attentive behind the bench) */}
        {/* Coach head & neck focused on bar path */}
        <path
          d="M 470 190 
             C 455 180, 440 195, 435 215 
             C 430 235, 445 255, 465 260 
             C 490 265, 510 245, 505 220 
             C 500 200, 490 190, 470 190 Z"
          fill="#16161C"
        />

        {/* Coach shoulders & athletic King Fitness staff jersey */}
        <path
          d="M 465 255 
             C 420 270, 370 310, 360 380 
             L 570 380 
             C 560 310, 510 270, 465 255 Z"
          fill="#1C1C26"
        />

        {/* Coach Left Hand ready under barbell (Spotting position) */}
        <path
          d="M 370 330 
             C 380 350, 410 365, 435 365 
             L 445 360"
          stroke="#1F1F2A"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* Coach Right Hand ready under barbell */}
        <path
          d="M 560 330 
             C 550 350, 520 365, 495 365 
             L 485 360"
          stroke="#1F1F2A"
          strokeWidth="20"
          strokeLinecap="round"
        />

        {/* SIGNATURE GOLD RIM LIGHT ON COACH & BARBELL */}
        {/* Right shoulder & arm highlight */}
        <path
          d="M 470 190 
             C 490 195, 510 215, 505 235 
             C 515 260, 555 295, 565 340"
          stroke="url(#coachGlow)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Barbell held horizontally with Olympic plates */}
        <rect x="200" y="355" width="540" height="16" rx="3" fill="#D4D4D4" />
        {/* Bar knurl grip areas */}
        <rect x="360" y="356" width="90" height="14" fill="#999" opacity="0.5" />
        <rect x="490" y="356" width="90" height="14" fill="#999" opacity="0.5" />
        {/* Gold sheen on top of barbell */}
        <line x1="220" y1="357" x2="720" y2="357" stroke="#F6BE22" strokeWidth="2" opacity="0.8" />

        {/* Left and Right Olympic Plates */}
        <rect x="180" y="280" width="34" height="166" rx="4" fill="#1C1C24" stroke="#333" strokeWidth="1.5" />
        <rect x="730" y="280" width="34" height="166" rx="4" fill="#1C1C24" stroke="#F6BE22" strokeWidth="2" />
      </svg>
    </div>
  );
};
