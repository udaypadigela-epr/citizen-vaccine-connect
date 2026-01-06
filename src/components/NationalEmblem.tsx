import React from 'react';

const NationalEmblem: React.FC<{ className?: string }> = ({ className = "h-16 w-auto" }) => {
  return (
    <svg 
      className={className}
      viewBox="0 0 100 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ashoka Chakra base circle */}
      <circle cx="50" cy="60" r="25" fill="#1a365d" opacity="0.1"/>
      
      {/* Lions pillar representation - simplified */}
      <rect x="40" y="30" width="20" height="50" rx="3" fill="#1a365d"/>
      
      {/* Top decorative element */}
      <circle cx="50" cy="25" r="12" fill="#1a365d"/>
      <circle cx="50" cy="25" r="8" fill="#FF9933"/>
      
      {/* Ashoka Chakra */}
      <circle cx="50" cy="60" r="15" stroke="#1a365d" strokeWidth="2" fill="none"/>
      <circle cx="50" cy="60" r="3" fill="#1a365d"/>
      
      {/* 24 spokes simplified to 8 */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
        <line
          key={i}
          x1="50"
          y1="60"
          x2={50 + 12 * Math.cos((angle * Math.PI) / 180)}
          y2={60 + 12 * Math.sin((angle * Math.PI) / 180)}
          stroke="#1a365d"
          strokeWidth="1.5"
        />
      ))}
      
      {/* Base platform */}
      <rect x="30" y="80" width="40" height="6" rx="2" fill="#1a365d"/>
      <rect x="25" y="86" width="50" height="4" rx="1" fill="#138808"/>
      
      {/* Text */}
      <text x="50" y="105" textAnchor="middle" fill="#1a365d" fontSize="8" fontWeight="600">
        सत्यमेव जयते
      </text>
    </svg>
  );
};

export default NationalEmblem;
