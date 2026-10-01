export interface MembershipPlan {
  id: string;
  name: string;
  tagline: string;
  monthlyPrice: number;
  annualPricePerMonth: number;
  isPopular?: boolean;
  features: string[];
  notIncluded?: string[];
  ctaLabel: string;
}

export interface FacilityZone {
  id: string;
  zoneNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyEquipment: string[];
  highlight: string;
  accentColor: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  certifications: string[];
  specialties: string[];
  quote: string;
  avatarUrl?: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  duration: string;
  achievement: string;
  metric: string;
  quote: string;
  program: string;
}

export interface GymClass {
  id: string;
  name: string;
  instructor: string;
  time: string;
  day: string;
  duration: string;
  intensity: 'High' | 'Medium' | 'All Levels';
  category: 'Strength' | 'HIIT' | 'Conditioning' | 'Recovery';
  capacity: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'strength' | 'conditioning' | 'recovery' | 'coaching';
  description: string;
  specs: string;
}
