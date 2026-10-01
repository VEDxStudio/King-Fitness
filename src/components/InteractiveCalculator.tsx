import React, { useState } from 'react';
import { Calculator, Flame, Dumbbell, Sparkles, ArrowRight, RefreshCw, Check } from 'lucide-react';

interface InteractiveCalculatorProps {
  onOpenPassModal: () => void;
}

export const InteractiveCalculator: React.FC<InteractiveCalculatorProps> = ({ onOpenPassModal }) => {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [unit, setUnit] = useState<'lbs' | 'kg'>('lbs');
  const [age, setAge] = useState<number>(28);
  const [weight, setWeight] = useState<number>(175); // lbs or kg
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(10);
  const [activity, setActivity] = useState<number>(1.55); // 1.2, 1.375, 1.55, 1.725
  const [goal, setGoal] = useState<'cut' | 'maintain' | 'bulk' | 'strength'>('bulk');

  // Calculation logic using Mifflin-St Jeor
  const calculateMetrics = () => {
    const weightInKg = unit === 'lbs' ? weight * 0.453592 : weight;
    const heightInCm = (heightFeet * 12 + heightInches) * 2.54;

    let bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * age;
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;

    const tdee = Math.round(bmr * activity);

    let targetCalories = tdee;
    if (goal === 'cut') targetCalories = Math.round(tdee - 450);
    if (goal === 'bulk') targetCalories = Math.round(tdee + 350);
    if (goal === 'strength') targetCalories = Math.round(tdee + 150);

    // Protein target: 1g per lb of bodyweight (or 2.2g per kg)
    const weightInLbs = unit === 'lbs' ? weight : weight * 2.20462;
    const proteinTarget = Math.round(weightInLbs * 0.95);

    let recommendedSplit = 'Upper / Lower 4-Day Strength Block';
    let splitDescription = 'Ideal for building heavy compound lifts (Squat, Bench, Deadlift) while allowing 3 full rest & contrast recovery days.';
    if (goal === 'cut') {
      recommendedSplit = 'Metabolic Push / Pull / Legs + Turf Conditioning';
      splitDescription = 'Combines hypertrophy resistance training with high-velocity sled and sprint intervals to preserve lean muscle during a caloric deficit.';
    } else if (goal === 'bulk') {
      recommendedSplit = '5-Day Hypertrophy Specialization (PPL-UL)';
      splitDescription = 'Maximizes weekly training volume per muscle group with high mechanical tension and isolation drop-sets.';
    } else if (goal === 'strength') {
      recommendedSplit = 'Wave-Periodized Powerlifting Block (3-5 Reps)';
      splitDescription = 'Focuses on peak neural recruitment, bar speed, and heavy competition platforms in Zone 01.';
    }

    return {
      bmr: Math.round(bmr),
      tdee,
      targetCalories,
      proteinTarget,
      recommendedSplit,
      splitDescription,
    };
  };

  const results = calculateMetrics();

  return (
    <section className="py-20 lg:py-28 bg-[#0d0d10] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b border-white/[0.08] pb-8">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-2">
              Interactive Athletic Tool
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white leading-tight">
              TARGET CALORIE & <br />
              <span className="gold-gradient-text">TRAINING SPLIT CALCULATOR.</span>
            </h2>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base max-w-md leading-relaxed">
            Dial in your daily nutrition and training frequency before you set foot on our training floor.
          </p>
        </div>

        {/* 2-COLUMN CALCULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: INPUTS FORM */}
          <div className="lg:col-span-7 card-dark rounded-xl p-6 sm:p-8 space-y-6">
            
            {/* GENDER & UNITS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Gender
                </label>
                <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    className={`py-2 text-xs font-bold uppercase rounded-md transition-colors ${
                      gender === 'male' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    className={`py-2 text-xs font-bold uppercase rounded-md transition-colors ${
                      gender === 'female' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Unit System
                </label>
                <div className="grid grid-cols-2 gap-2 bg-black/40 p-1 rounded-lg border border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      if (unit === 'kg') setWeight(Math.round(weight * 2.20462));
                      setUnit('lbs');
                    }}
                    className={`py-2 text-xs font-bold uppercase rounded-md transition-colors ${
                      unit === 'lbs' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Pounds (lbs)
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      if (unit === 'lbs') setWeight(Math.round(weight * 0.453592));
                      setUnit('kg');
                    }}
                    className={`py-2 text-xs font-bold uppercase rounded-md transition-colors ${
                      unit === 'kg' ? 'bg-amber-500 text-black' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    Kilograms (kg)
                  </button>
                </div>
              </div>
            </div>

            {/* AGE & WEIGHT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Age: <span className="text-white font-mono">{age} yrs</span>
                  </label>
                </div>
                <input
                  type="range"
                  min="16"
                  max="75"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Weight: <span className="text-white font-mono">{weight} {unit}</span>
                  </label>
                </div>
                <input
                  type="range"
                  min={unit === 'lbs' ? "100" : "45"}
                  max={unit === 'lbs' ? "320" : "150"}
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* HEIGHT */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Height: <span className="text-white font-mono">{heightFeet} ft {heightInches} in</span>
              </label>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="range"
                  min="4"
                  max="7"
                  value={heightFeet}
                  onChange={(e) => setHeightFeet(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
                <input
                  type="range"
                  min="0"
                  max="11"
                  value={heightInches}
                  onChange={(e) => setHeightInches(Number(e.target.value))}
                  className="w-full accent-amber-500 cursor-pointer"
                />
              </div>
            </div>

            {/* ACTIVITY LEVEL */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Weekly Training Activity
              </label>
              <select
                value={activity}
                onChange={(e) => setActivity(Number(e.target.value))}
                className="w-full bg-[#17171c] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-amber-400"
              >
                <option value={1.2}>Sedentary (Desk job, minimal exercise)</option>
                <option value={1.375}>Lightly Active (1-2 gym sessions / week)</option>
                <option value={1.55}>Moderately Active (3-4 focused lifting sessions / week)</option>
                <option value={1.725}>Very Athletic (5-6 heavy training sessions / week)</option>
              </select>
            </div>

            {/* GOAL */}
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                Primary Athletic Objective
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'cut', label: 'Fat Loss', desc: '-450 kcal' },
                  { id: 'maintain', label: 'Maintenance', desc: 'Baseline' },
                  { id: 'bulk', label: 'Muscle Gain', desc: '+350 kcal' },
                  { id: 'strength', label: 'Pure Strength', desc: '+150 kcal' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setGoal(item.id as any)}
                    className={`p-3 rounded-lg border text-left transition-all ${
                      goal === item.id
                        ? 'bg-amber-500/15 border-amber-500 text-white'
                        : 'bg-black/30 border-white/10 text-zinc-400 hover:text-white'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-zinc-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT: RESULTS DISPLAY */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#16161b] to-[#121215] border border-amber-500/30 rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="text-xs uppercase tracking-wider font-bold text-amber-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Your Personalized Profile</span>
              </span>
              <span className="text-[11px] font-mono text-zinc-500">Mifflin-St Jeor</span>
            </div>

            {/* METRICS ROW */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black/40 border border-white/[0.08] rounded-lg">
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  Daily Calorie Target
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-white tabular-nums">
                  {results.targetCalories}
                </div>
                <div className="text-[10px] text-amber-400 mt-0.5">
                  TDEE: {results.tdee} kcal
                </div>
              </div>

              <div className="p-4 bg-black/40 border border-white/[0.08] rounded-lg">
                <div className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-1">
                  Daily Protein Goal
                </div>
                <div className="font-heading text-3xl sm:text-4xl font-bold text-amber-400 tabular-nums">
                  {results.proteinTarget}g
                </div>
                <div className="text-[10px] text-zinc-400 mt-0.5">
                  ~0.95g / lb body weight
                </div>
              </div>
            </div>

            {/* RECOMMENDED SPLIT */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/25 rounded-lg">
              <div className="text-[11px] uppercase tracking-wider font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                <Dumbbell className="w-3.5 h-3.5" />
                <span>Recommended King Fitness Split</span>
              </div>
              <div className="text-base font-bold text-white mb-1.5">
                {results.recommendedSplit}
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed">
                {results.splitDescription}
              </p>
            </div>

            {/* ACTION CTA */}
            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPassModal}
                className="w-full py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 rounded-md transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 cursor-pointer"
              >
                <span>Claim Free Day Pass & InBody Scan</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-center text-zinc-500 mt-2">
                Get a medical-grade InBody 570 scan for free on your first visit.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
