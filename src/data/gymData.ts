import { MembershipPlan, FacilityZone, Trainer, TransformationStory, GymClass, GalleryItem } from '../types';

export const GYM_INFO = {
  name: "King Fitness Center",
  tagline: "Build Your Stronger Self.",
  subtext: "Train harder. Get stronger. Become the best version of yourself at King Fitness Center.",
  trustKicker: "Your Local Fitness Destination",
  address: "742 Ironworks Boulevard, West District",
  city: "Metro City, MC 90210",
  phone: "+1 (555) 948-5464",
  whatsapp: "+1 (555) 948-5464",
  email: "info@kingfitnesscenter.com",
  operatingHours: {
    weekdays: "5:00 AM – 11:00 PM",
    saturday: "6:00 AM – 9:00 PM",
    sunday: "7:00 AM – 8:00 PM",
    holidays: "7:00 AM – 6:00 PM"
  },
  stats: [
    { value: "500+", label: "Active Members", context: "Consistent community" },
    { value: "15+", label: "Expert Coaches", context: "Nationally certified" },
    { value: "10,000+", label: "Transformations", context: "Documented results" },
    { value: "10,000", label: "Sq. Ft. Facility", context: "Multi-zone campus" },
    { value: "100%", label: "Dedication", context: "Zero compromises" },
  ]
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "standard",
    name: "Standard Iron",
    tagline: "Ideal for independent lifters seeking pure strength & cardio equipment.",
    monthlyPrice: 49,
    annualPricePerMonth: 39,
    isPopular: false,
    ctaLabel: "Select Standard",
    features: [
      "Full access to Heavy Iron & Dumbbell zone (up to 150 lbs)",
      "Standard cardio & endurance machine deck access",
      "Spacious locker rooms & hot pressure showers",
      "Complimentary fitness assessment upon signup",
      "Free high-speed WiFi & mobile locker keys",
    ],
    notIncluded: [
      "Access to recovery sauna & cold plunge suite",
      "Group athletic conditioning classes",
      "Monthly 1-on-1 personal coaching session"
    ]
  },
  {
    id: "pro",
    name: "Pro Athletic",
    tagline: "Our most chosen tier for serious progress, class access, and recovery.",
    monthlyPrice: 79,
    annualPricePerMonth: 64,
    isPopular: true,
    ctaLabel: "Join Pro Athletic",
    features: [
      "24/7 keycard access to all training zones",
      "Unlimited access to Heavy Iron, Turf & Cardio zones",
      "Unlimited Group Functional & HIIT conditioning classes",
      "Cedar dry sauna & cold plunge recovery suite access",
      "InBody 570 monthly body composition scans",
      "2 complimentary personal training sessions per month",
      "1 free guest pass per month",
    ],
    notIncluded: [
      "Dedicated VIP locker & laundry service",
    ]
  },
  {
    id: "elite-vip",
    name: "King Elite VIP",
    tagline: "The all-inclusive bespoke athletic experience for maximum results.",
    monthlyPrice: 129,
    annualPricePerMonth: 109,
    isPopular: false,
    ctaLabel: "Get King Elite VIP",
    features: [
      "All Pro Athletic benefits with 24/7 prioritized access",
      "Weekly 1-on-1 personalized strength & conditioning coaching",
      "Custom sports nutrition and macronutrient programming",
      "Unlimited recovery lounge: Sauna, Cold Plunge & Hyperice boots",
      "Permanent reserved VIP locker & complimentary towel service",
      "Unlimited guest passes (bring a training partner anytime)",
      "Quarterly bloodwork & metabolic panel review guidance",
    ]
  }
];

export const FACILITY_ZONES: FacilityZone[] = [
  {
    id: "strength-iron",
    zoneNumber: "01",
    title: "Heavy Iron & Olympic Platforms",
    subtitle: "Calibrated Competition Equipment",
    description: "Built for serious lifters. Custom Eleiko bumper plates, Texas Power bars, 8 dedicated Olympic deadlift platforms, and precision urethane dumbbells ranging from 5 lbs up to 150 lbs.",
    keyEquipment: [
      "8 Custom Olympic Lifting Platforms with oak inserts",
      "Eleiko IPF-certified calibrated steel and competition bumper plates",
      "Hammer Strength ISO-lateral chest, shoulder & leg machines",
      "Full dumbbell run from 5 to 150 lbs in 5 lb increments",
      "Rogue Monster Lite power racks with safety straps & band pegs"
    ],
    highlight: "Reinforced 45mm impact rubber flooring and zero-slip chalk stations.",
    accentColor: "#FFB800"
  },
  {
    id: "turf-conditioning",
    zoneNumber: "02",
    title: "Sprint Turf & Athletic Conditioning",
    subtitle: "Explosive Power & Functional Output",
    description: "60-foot seamless indoor sprint turf designed for sled pushes, speed drills, kettlebell complexes, and high-intensity metabolic conditioning.",
    keyEquipment: [
      "60-foot premium nylon agility and sled push turf track",
      "Rogue Dog Sleds and heavy prowlers with multiple grip attachments",
      "Cast-iron competition kettlebells from 8 kg to 48 kg",
      "Assault AirBikes, Concept2 Rowers, and SkiErgs",
      "Heavy battle ropes, plyometric soft boxes, and slam balls"
    ],
    highlight: "Calibrated speed lane markers for sprint drills and agility profiling.",
    accentColor: "#FF8A00"
  },
  {
    id: "cardio-endurance",
    zoneNumber: "03",
    title: "Endurance & Biometric Cardio Deck",
    subtitle: "Low-Impact Engine Building",
    description: "State-of-the-art cardiovascular suite engineered for aerobic threshold training, active recovery, and stamina building with real-time heart rate tracking.",
    keyEquipment: [
      "Woodway 4Front motorized and curved self-powered treadmills",
      "StairMaster 10G Gauntlet stepmills with OverDrive training modes",
      "Keiser M3i indoor cycle bikes with magnetic eddy resistance",
      "WaterRower dual-tank natural resistance rowing machines"
    ],
    highlight: "Individual high-velocity cooling fans and integrated ANT+/Bluetooth telemetry.",
    accentColor: "#EAB308"
  },
  {
    id: "recovery-wellness",
    zoneNumber: "04",
    title: "Recovery Lounge & Thermal Therapy",
    subtitle: "Accelerated Muscle Repair",
    description: "Rebuild tissue faster. Contrast therapy with a custom Finnish cedar dry sauna heating to 195°F and dual medical-grade cold plunge tubs kept at a crisp 48°F.",
    keyEquipment: [
      "Custom 12-person Nordic cedarwood dry sauna (up to 195°F)",
      "Dual stainless steel automated cold plunge tubs (controlled 46°F–50°F)",
      "Hyperice Normatec 3 compression boots recovery station",
      "Percussive massage therapy guns & high-density mobility rollers"
    ],
    highlight: "Contrast therapy protocol cards designed by sports physiotherapists.",
    accentColor: "#FF6F00"
  },
  {
    id: "coaching-studio",
    zoneNumber: "05",
    title: "Private Assessment & Coaching Bay",
    subtitle: "Precision Metrics & Form Correction",
    description: "Dedicated assessment studio equipped with medical-grade InBody 570 body composition scanners and video motion-capture analysis for lifting mechanics.",
    keyEquipment: [
      "InBody 570 multi-frequency bioelectrical impedance analyzer",
      "Dual high-speed 120fps cameras for biomechanics breakdown",
      "Functional movement screening grid & goniometers",
      "Private mobility & rehabilitation consultation zone"
    ],
    highlight: "Detailed monthly progress reports tracking lean mass and visceral fat.",
    accentColor: "#FFB800"
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Head Strength Coach & Director",
    experience: "12+ Years Coaching",
    certifications: ["CSCS (NSCA)", "USAW Level 2", "B.S. Exercise Science"],
    specialties: ["Powerlifting", "Olympic Weightlifting", "Maximum Hypertrophy"],
    quote: "True strength isn't just about weight on the bar; it's about disciplined habits built every single morning.",
  },
  {
    id: "elena-rostova",
    name: "Elena Rostova",
    role: "Performance & Conditioning Specialist",
    experience: "8+ Years Coaching",
    certifications: ["NASM-PES", "EXOS Athletic Specialist", "FMS Certified"],
    specialties: ["Athletic Conditioning", "HIIT & Speed", "Functional Movement"],
    quote: "We don't train to be tired; we train to build resilient, injury-free bodies that perform anywhere.",
  },
  {
    id: "damon-reed",
    name: "Damon Reed",
    role: "Body Transformation & Nutrition Coach",
    experience: "10+ Years Coaching",
    certifications: ["ACE-CPT", "Precision Nutrition L2", "CrossFit L2"],
    specialties: ["Rapid Fat Loss", "Metabolic Conditioning", "Dietary Strategy"],
    quote: "Sustainable transformation happens when science meets daily consistency. No fad diets, just execution.",
  },
  {
    id: "maya-chen",
    name: "Maya Chen",
    role: "Mobility & Post-Rehab Specialist",
    experience: "7+ Years Coaching",
    certifications: ["DPT Candidate", "FRCms (Functional Range Conditioning)", "NASM-CES"],
    specialties: ["Joint Health", "Postural Restoration", "Core Stability"],
    quote: "Lifting heavy requires moving well. Fix your movement patterns, and your strength will double.",
  }
];

export const TRANSFORMATIONS: TransformationStory[] = [
  {
    id: "t1",
    name: "Marcus T.",
    age: 34,
    duration: "6 Months",
    achievement: "+16 lbs Lean Muscle, -7% Body Fat",
    metric: "Squat: 225 lbs → 365 lbs",
    quote: "King Fitness isn't like big commercial chains. The atmosphere pushes you to show up and give everything. Having coaches who actually watch your form made all the difference.",
    program: "Pro Athletic & Strength Coaching"
  },
  {
    id: "t2",
    name: "Priya S.",
    age: 29,
    duration: "8 Months",
    achievement: "-28 lbs Body Fat, Chronic Back Pain Eliminated",
    metric: "Body Fat: 33% → 22%",
    quote: "I was intimidated by free weights for years. The coaches here took time to teach me compound movements safely. Now deadlifting is my favorite part of the week!",
    program: "Strength Foundations & Nutrition"
  },
  {
    id: "t3",
    name: "David K.",
    age: 42,
    duration: "1 Year",
    achievement: "Total Body Recomposition, PR Deadlift",
    metric: "Deadlift: 245 lbs → 455 lbs",
    quote: "At 42, I am in the best physical condition of my life. The equipment quality is unmatched—no waiting for racks, real steel, and the cold plunge after heavy squats is game-changing.",
    program: "King Elite VIP Coaching"
  }
];

export const GYM_CLASSES: GymClass[] = [
  { id: "c1", name: "Iron Hour (Strength)", instructor: "Marcus Vance", time: "06:00 AM", day: "Monday", duration: "55m", intensity: "High", category: "Strength", capacity: "12 / 14 booked" },
  { id: "c2", name: "Turf MetCon (HIIT)", instructor: "Elena Rostova", time: "07:30 AM", day: "Monday", duration: "45m", intensity: "High", category: "HIIT", capacity: "14 / 16 booked" },
  { id: "c3", name: "Barbell Foundations", instructor: "Marcus Vance", time: "12:00 PM", day: "Tuesday", duration: "50m", intensity: "Medium", category: "Strength", capacity: "8 / 12 booked" },
  { id: "c4", name: "Prowler & Core Burn", instructor: "Elena Rostova", time: "05:30 PM", day: "Tuesday", duration: "45m", intensity: "High", category: "Conditioning", capacity: "15 / 16 booked" },
  { id: "c5", name: "Mobility & Hip Reset", instructor: "Maya Chen", time: "06:30 PM", day: "Wednesday", duration: "45m", intensity: "All Levels", category: "Recovery", capacity: "10 / 15 booked" },
  { id: "c6", name: "Deadlift Club", instructor: "Marcus Vance", time: "06:00 AM", day: "Thursday", duration: "60m", intensity: "High", category: "Strength", capacity: "10 / 12 booked" },
  { id: "c7", name: "Saturday Team Gauntlet", instructor: "Elena & Damon", time: "09:00 AM", day: "Saturday", duration: "75m", intensity: "High", category: "Conditioning", capacity: "18 / 20 booked" },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "g1", title: "Heavy Dumbbell Rack (5-150 lbs)", category: "strength", description: "Precision urethane dumbbells racked on double-tier steel frames.", specs: "Eleiko & Hammer Strength" },
  { id: "g2", title: "Olympic Deadlift Platforms", category: "strength", description: "Multi-layered oak center inserts flanked by dense vibration-absorbing rubber.", specs: "8 Independent Stations" },
  { id: "g3", title: "60ft Sprint Turf & Sled Track", category: "conditioning", description: "High-density nylon fiber turf for loaded prowler pulls and sprint starts.", specs: "60 ft x 15 ft Track" },
  { id: "g4", title: "Nordic Cedar Dry Sauna", category: "recovery", description: "Hand-finished cedar sauna engineered to maintain 190°F to 200°F dry thermal heat.", specs: "Capacity: 12 Athletes" },
  { id: "g5", title: "Chilled Cold Plunge Tubs", category: "recovery", description: "Automated circulation and ozonation system held precisely at 48°F.", specs: "Twin Stainless Tanks" },
  { id: "g6", title: "Private 1-on-1 Coaching Studio", category: "coaching", description: "Biomechanical video playback and InBody 570 composition screening suite.", specs: "Full Privacy Suite" },
];

export const FAQS = [
  {
    q: "Can I try King Fitness Center before committing to a membership?",
    a: "Yes! We offer a complimentary 1-Day VIP Pass for all local residents. You can claim your pass directly online, and our front desk will set you up with full access to the gym, locker rooms, and an optional 15-minute facility tour."
  },
  {
    q: "Are personal training sessions included in the membership?",
    a: "Our Pro Athletic plan includes 2 complimentary personal training sessions per month, while the King Elite VIP membership provides weekly dedicated 1-on-1 sessions with custom nutrition coaching. Additional individual or package sessions can also be booked with any coach."
  },
  {
    q: "What equipment brands do you feature?",
    a: "We never compromise on iron. We feature IPF-calibrated Eleiko barbells and discs, heavy-gauge Rogue Monster Lite racks, ISO-lateral Hammer Strength machinery, Woodway curved treadmills, and Concept2 rowers and SkiErgs."
  },
  {
    q: "Can I freeze or cancel my membership if I travel?",
    a: "Absolutely. All King Fitness memberships have zero lock-in contracts on monthly plans. You can pause or freeze your membership for up to 60 days per calendar year with 7 days written notice to our front desk."
  },
  {
    q: "Is there free parking on-site?",
    a: "Yes, we provide 85 dedicated, well-lit parking spaces directly in front of the center with 24/7 security monitoring, reserved exclusively for King Fitness members."
  }
];
