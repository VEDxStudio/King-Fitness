import React from 'react';

interface KingBrandLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const KingBrandLogo: React.FC<KingBrandLogoProps> = ({
  size = 56,
  className = '',
  showText = true,
}) => {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px` }}
      className={`inline-flex items-center justify-center bg-black border border-white/10 rounded-sm overflow-hidden select-none shrink-0 ${className}`}
      aria-label="King Fitness Center Logo"
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full p-1.5"
      >
        <defs>
          {/* Gold to Ember Orange Gradient matching prompt */}
          <linearGradient id="logoBrandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F6BE22" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#F05A22" />
          </linearGradient>

          <linearGradient id="crownShine" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFF3B0" />
            <stop offset="40%" stopColor="#F6BE22" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
        </defs>

        {/* CROWN / MONOGRAM GLYPH */}
        <g transform="translate(10, 8)">
          {/* 5-point athletic geometric crown */}
          <path
            d="M 25 90 
               L 35 38 
               L 65 62 
               L 90 20 
               L 115 62 
               L 145 38 
               L 155 90 
               Z"
            fill="url(#crownShine)"
          />
          {/* Crown base bar */}
          <rect x="22" y="93" width="136" height="10" rx="1" fill="url(#logoBrandGrad)" />
          
          {/* 3 jewels / studs on crown base */}
          <circle cx="48" cy="98" r="2.5" fill="#000000" />
          <circle cx="90" cy="98" r="3" fill="#000000" />
          <circle cx="132" cy="98" r="2.5" fill="#000000" />

          {/* Central K monogram cut inside crown */}
          <path
            d="M 82 45 L 88 45 L 88 64 L 98 48 L 105 48 L 93 68 L 106 88 L 98 88 L 88 72 L 88 88 L 82 88 Z"
            fill="#000000"
            opacity="0.9"
          />
        </g>

        {/* TYPOGRAPHY: KING FITNESS CENTER */}
        <g transform="translate(100, 142)" textAnchor="middle">
          {/* "KING" in condensed bold face */}
          <text
            x="0"
            y="0"
            fill="url(#logoBrandGrad)"
            fontFamily="'Oswald', sans-serif"
            fontWeight="700"
            fontSize="30"
            letterSpacing="0.14em"
          >
            KING
          </text>
          
          {/* "FITNESS CENTER" */}
          <text
            x="0"
            y="20"
            fill="#EAEAEA"
            fontFamily="'Oswald', sans-serif"
            fontWeight="600"
            fontSize="12.5"
            letterSpacing="0.22em"
          >
            FITNESS CENTER
          </text>
        </g>
      </svg>
    </div>
  );
};
