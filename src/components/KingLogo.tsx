import React from 'react';

interface KingLogoProps {
  className?: string;
  variant?: 'full' | 'horizontal' | 'compact' | 'badge';
  onClick?: () => void;
}

export const KingLogo: React.FC<KingLogoProps> = ({
  className = "h-12 w-auto",
  variant = 'horizontal',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center select-none cursor-pointer group ${className}`}
      aria-label="King Fitness Center Logo"
    >
      <svg
        viewBox="0 0 520 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain filter drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Gold to Orange gradient for KING */}
          <linearGradient id="kingGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE082" />
            <stop offset="25%" stopColor="#FFB300" />
            <stop offset="70%" stopColor="#FF8F00" />
            <stop offset="100%" stopColor="#E65100" />
          </linearGradient>

          {/* Orange accent for dumbbells and swoosh */}
          <linearGradient id="kingOrangeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF7043" />
            <stop offset="50%" stopColor="#FF9800" />
            <stop offset="100%" stopColor="#F57C00" />
          </linearGradient>

          {/* Silver metallic gradient for barbell plates */}
          <linearGradient id="silverPlateGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9E9E9E" />
            <stop offset="25%" stopColor="#E0E0E0" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="75%" stopColor="#BDBDBD" />
            <stop offset="100%" stopColor="#757575" />
          </linearGradient>

          {/* Silver metallic for Fitness Center text */}
          <linearGradient id="silverTextGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#E0E0E0" />
            <stop offset="100%" stopColor="#9E9E9E" />
          </linearGradient>

          {/* Subtle metal plate texture stripes */}
          <pattern id="metalStripes" width="4" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="40" stroke="#757575" strokeWidth="0.8" opacity="0.35" />
            <line x1="2" y1="0" x2="2" y2="40" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.45" />
          </pattern>
        </defs>

        {/* 1. TOP ATHLETIC SILHOUETTES & ORANGE ACCENTS */}
        <g transform="translate(180, 8) scale(0.95)">
          {/* Female silhouette (left) */}
          <path
            d="M 62 48 
               C 62 44, 66 40, 68 36 
               C 70 32, 70 28, 66 24 
               C 64 22, 60 20, 58 14 
               C 57 10, 60 5, 65 4 
               C 71 3, 75 7, 75 13 
               C 75 16, 73 20, 72 23
               C 75 25, 78 28, 80 32
               C 83 37, 85 44, 85 52
               C 85 58, 82 64, 80 70
               C 77 78, 77 84, 80 90
               L 65 90
               C 62 82, 62 76, 58 70
               C 54 64, 48 60, 48 56
               C 48 52, 54 50, 62 48 Z"
            fill="#FFFFFF"
          />
          {/* Female left hand holding orange dumbbell */}
          <path
            d="M 48 56 
               C 42 54, 34 52, 28 50
               C 24 48, 22 46, 20 44
               C 18 42, 22 38, 26 40
               C 32 44, 40 48, 48 52 Z"
            fill="#FFFFFF"
          />
          {/* Female orange dumbbell disc */}
          <circle cx="16" cy="42" r="10" fill="url(#kingOrangeGrad)" />
          <circle cx="16" cy="42" r="4" fill="#000000" />
          <circle cx="16" cy="42" r="2.5" fill="#FFE082" />

          {/* Male muscular silhouette (right) */}
          <path
            d="M 85 45
               C 88 40, 92 34, 96 30
               C 99 26, 100 20, 97 14
               C 95 9, 99 4, 105 4
               C 112 4, 116 9, 114 15
               C 113 21, 115 25, 119 28
               C 125 32, 134 36, 138 42
               C 142 48, 146 56, 144 65
               C 142 74, 137 82, 134 90
               L 100 90
               C 98 84, 97 78, 98 72
               C 99 64, 97 58, 93 54
               C 90 50, 87 48, 85 45 Z"
            fill="#FFFFFF"
          />
          {/* Male right arm holding dumbbell */}
          <path
            d="M 138 42
               C 146 46, 156 50, 162 52
               C 166 54, 170 56, 172 54
               C 174 50, 170 46, 166 42
               C 158 36, 148 34, 138 38 Z"
            fill="#FFFFFF"
          />
          {/* Male orange dumbbell disc */}
          <circle cx="174" cy="50" r="10" fill="url(#kingOrangeGrad)" />
          <circle cx="174" cy="50" r="4" fill="#000000" />
          <circle cx="174" cy="50" r="2.5" fill="#FFE082" />

          {/* Bottom swoosh underline under couple */}
          <path
            d="M 12 94 C 55 106, 135 106, 178 94 C 145 101, 45 101, 12 94 Z"
            fill="url(#kingOrangeGrad)"
          />
        </g>

        {/* 2. LEFT BARBELL PLATES */}
        <g transform="translate(14, 102)">
          {/* Bar collar extension left */}
          <rect x="0" y="27" width="22" height="12" rx="2" fill="url(#silverPlateGrad)" stroke="#555" strokeWidth="0.5" />
          
          {/* Plate 1 (outer) */}
          <rect x="22" y="5" width="16" height="56" rx="2" fill="url(#silverPlateGrad)" stroke="#424242" strokeWidth="0.8" />
          <rect x="22" y="5" width="16" height="56" rx="2" fill="url(#metalStripes)" />
          
          {/* Plate 2 (middle) */}
          <rect x="42" y="2" width="16" height="62" rx="2" fill="url(#silverPlateGrad)" stroke="#424242" strokeWidth="0.8" />
          <rect x="42" y="2" width="16" height="62" rx="2" fill="url(#metalStripes)" />
          
          {/* Plate 3 (inner, largest) */}
          <rect x="62" y="0" width="17" height="66" rx="2" fill="url(#silverPlateGrad)" stroke="#424242" strokeWidth="0.8" />
          <rect x="62" y="0" width="17" height="66" rx="2" fill="url(#metalStripes)" />

          {/* Bar connector touching text */}
          <rect x="79" y="29" width="16" height="8" fill="url(#silverPlateGrad)" />
        </g>

        {/* 3. CENTER 'KING' TEXT WITH ATHLETIC CHISEL CUTS */}
        <g id="king-text" transform="translate(112, 100)">
          {/* Custom vector representation of KING for flawless rendering on all platforms */}
          {/* K */}
          <path
            d="M 12 66 L 38 66 L 38 43 L 64 66 L 96 66 L 62 36 L 92 2 L 62 2 L 38 27 L 38 2 L 12 2 Z"
            fill="url(#kingGoldGrad)"
            stroke="#B45309"
            strokeWidth="0.8"
          />
          {/* Triangular athletic notch in K */}
          <polygon points="12,2 24,2 18,8" fill="#FFE082" />

          {/* I */}
          <path
            d="M 108 2 L 134 2 L 134 66 L 108 66 Z"
            fill="url(#kingGoldGrad)"
            stroke="#B45309"
            strokeWidth="0.8"
          />
          {/* Top/Bottom serifs for I */}
          <polygon points="102,2 140,2 134,8 108,8" fill="#FFE082" />
          <polygon points="102,66 140,66 134,60 108,60" fill="#E65100" />

          {/* N */}
          <path
            d="M 148 66 L 174 66 L 174 26 L 210 66 L 236 66 L 236 2 L 210 2 L 210 42 L 174 2 L 148 2 Z"
            fill="url(#kingGoldGrad)"
            stroke="#B45309"
            strokeWidth="0.8"
          />

          {/* G */}
          <path
            d="M 298 24 L 274 24 C 265 24 256 30 256 40 C 256 52 265 58 278 58 L 298 58 L 298 42 L 282 42 L 282 32 L 322 32 L 322 66 L 274 66 C 252 66 232 54 232 35 C 232 15 252 2 274 2 L 318 2 L 306 18 L 298 24 Z"
            fill="url(#kingGoldGrad)"
            stroke="#B45309"
            strokeWidth="0.8"
          />
        </g>

        {/* 4. RIGHT BARBELL PLATES */}
        <g transform="translate(425, 102)">
          {/* Bar connector touching text */}
          <rect x="0" y="29" width="16" height="8" fill="url(#silverPlateGrad)" />

          {/* Plate 1 (inner, largest) */}
          <rect x="16" y="0" width="17" height="66" rx="2" fill="url(#silverPlateGrad)" stroke="#424242" strokeWidth="0.8" />
          <rect x="16" y="0" width="17" height="66" rx="2" fill="url(#metalStripes)" />

          {/* Plate 2 (middle) */}
          <rect x="37" y="2" width="16" height="62" rx="2" fill="url(#silverPlateGrad)" stroke="#424242" strokeWidth="0.8" />
          <rect x="37" y="2" width="16" height="62" rx="2" fill="url(#metalStripes)" />

          {/* Plate 3 (outer) */}
          <rect x="57" y="5" width="16" height="56" rx="2" fill="url(#silverPlateGrad)" stroke="#424242" strokeWidth="0.8" />
          <rect x="57" y="5" width="16" height="56" rx="2" fill="url(#metalStripes)" />

          {/* Bar collar extension right */}
          <rect x="73" y="27" width="22" height="12" rx="2" fill="url(#silverPlateGrad)" stroke="#555" strokeWidth="0.5" />
        </g>

        {/* 5. METALLIC SILVER 'FITNESS CENTER' TEXT */}
        <g transform="translate(260, 185)" textAnchor="middle">
          <text
            x="0"
            y="0"
            fill="url(#silverTextGrad)"
            fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="26"
            letterSpacing="0.32em"
          >
            FITNESS
          </text>
          <text
            x="0"
            y="26"
            fill="url(#silverTextGrad)"
            fontFamily="'Plus Jakarta Sans', -apple-system, sans-serif"
            fontWeight="800"
            fontSize="24"
            letterSpacing="0.36em"
          >
            CENTER
          </text>
        </g>
      </svg>
    </div>
  );
};
