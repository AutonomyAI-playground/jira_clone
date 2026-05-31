import React from 'react';

/**
 * Decorative SVG illustration of a wizard robot in a Vitruvian Man pose.
 * Features a robot with a monitor head wearing a wizard hat, surrounded by
 * a circle and square frame on a textured background.
 */
const WizardRobotSvg = () => (
  <svg
    width="400"
    height="400"
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Textured Background */}
    <defs>
      <pattern id="paperTexture" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
        <circle cx="1" cy="1" r="0.8" fill="#C9B896" opacity="0.5" />
        <circle cx="4" cy="2" r="0.6" fill="#BDA882" opacity="0.4" />
        <circle cx="2" cy="4.5" r="0.5" fill="#A89670" opacity="0.35" />
        <circle cx="5" cy="5" r="0.4" fill="#D4C5A9" opacity="0.3" />
      </pattern>
      <linearGradient id="screenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C8E8A8" />
        <stop offset="30%" stopColor="#B8DC9C" />
        <stop offset="60%" stopColor="#A8D08D" />
        <stop offset="100%" stopColor="#90C070" />
      </linearGradient>
      <linearGradient id="hatGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#5A7B9A" />
        <stop offset="50%" stopColor="#4A6B8A" />
        <stop offset="100%" stopColor="#3A5B7A" />
      </linearGradient>
    </defs>

    {/* Outer textured background */}
    <rect x="0" y="0" width="400" height="400" fill="#E8DFC8" />
    <rect x="0" y="0" width="400" height="400" fill="url(#paperTexture)" />

    {/* Background Circle - large outer circle */}
    <circle cx="200" cy="200" r="175" stroke="#6B4C5C" strokeWidth="2.5" fill="none" />

    {/* Inner fill circle with texture */}
    <circle cx="200" cy="200" r="173" fill="#F5F1E8" />
    <circle cx="200" cy="200" r="173" fill="url(#paperTexture)" opacity="0.5" />

    {/* Square Frame intersecting Circle - more prominent */}
    <rect x="55" y="100" width="290" height="210" fill="none" stroke="#6B4C5C" strokeWidth="2.5" />

    {/* Wizard Hat - Larger and more detailed */}
    <g id="wizard-hat">
      {/* Hat tip - bent/curved tip */}
      <path
        d="M200 15 Q210 25 215 45 Q200 40 185 45 Q190 25 200 15 Z"
        fill="url(#hatGradient)"
        stroke="#2C3E50"
        strokeWidth="2"
      />
      {/* Hat cone body - taller */}
      <path
        d="M100 130 Q200 20 300 130 L300 130 L100 130 Z"
        fill="url(#hatGradient)"
        stroke="#2C3E50"
        strokeWidth="2.5"
      />
      {/* Hat brim - wider oval */}
      <ellipse
        cx="200"
        cy="130"
        rx="100"
        ry="22"
        fill="url(#hatGradient)"
        stroke="#2C3E50"
        strokeWidth="2.5"
      />

      {/* Large decorative Moons on hat */}
      <g id="moon-1" transform="translate(145, 80)">
        <path
          d="M0 0 Q-10 8 0 16 Q-5 12 -5 8 Q-5 4 0 0"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="moon-2" transform="translate(175, 105)">
        <path
          d="M0 0 Q-8 6 0 12 Q-4 9 -4 6 Q-4 3 0 0"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="moon-3" transform="translate(115, 115)">
        <path
          d="M0 0 Q-7 5 0 10 Q-3 7 -3 5 Q-3 3 0 0"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="moon-4" transform="translate(280, 118)">
        <path
          d="M0 0 Q-7 5 0 10 Q-3 7 -3 5 Q-3 3 0 0"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>

      {/* Large decorative Stars on hat */}
      <g id="star-1" transform="translate(230, 55)">
        <polygon
          points="0,-10 3,-3 10,0 3,3 0,10 -3,3 -10,0 -3,-3"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="star-2" transform="translate(160, 55)">
        <polygon
          points="0,-8 2.5,-2.5 8,0 2.5,2.5 0,8 -2.5,2.5 -8,0 -2.5,-2.5"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="star-3" transform="translate(255, 95)">
        <polygon
          points="0,-7 2,-2 7,0 2,2 0,7 -2,2 -7,0 -2,-2"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="star-4" transform="translate(290, 125)">
        <polygon
          points="0,-6 1.8,-1.8 6,0 1.8,1.8 0,6 -1.8,1.8 -6,0 -1.8,-1.8"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
      <g id="star-5" transform="translate(110, 125)">
        <polygon
          points="0,-5 1.5,-1.5 5,0 1.5,1.5 0,5 -1.5,1.5 -5,0 -1.5,-1.5"
          fill="#F4C430"
          stroke="#D4A420"
          strokeWidth="0.5"
        />
      </g>
    </g>

    {/* Robot Head (Monitor) - larger and more detailed */}
    <g id="robot-head">
      {/* Monitor frame with thicker border */}
      <rect
        x="130"
        y="145"
        width="140"
        height="100"
        rx="10"
        fill="#A07850"
        stroke="#6B5030"
        strokeWidth="4"
      />
      <rect x="130" y="145" width="140" height="100" rx="10" fill="#8B6F47" />

      {/* Screen with rich gradient */}
      <rect
        x="142"
        y="157"
        width="116"
        height="76"
        rx="5"
        fill="url(#screenGradient)"
        stroke="#7FA655"
        strokeWidth="2"
      />

      {/* Enhanced screen reflections - multiple layers */}
      <ellipse cx="175" cy="180" rx="40" ry="28" fill="#FDFFF5" opacity="0.35" />
      <ellipse cx="168" cy="175" rx="28" ry="18" fill="#FFFFFF" opacity="0.6" />
      <ellipse cx="162" cy="172" rx="18" ry="10" fill="#FFFFFF" opacity="0.8" />
      <path d="M190 185 Q210 195 220 210 Q205 200 195 192 Z" fill="#FFFFFF" opacity="0.25" />
      <ellipse cx="235" cy="215" rx="18" ry="14" fill="#D8F0C0" opacity="0.4" />

      {/* Monitor base button - more prominent */}
      <rect x="160" y="235" width="80" height="12" rx="4" fill="#6B5030" />
      <circle cx="200" cy="241" r="4" fill="#D4A420" stroke="#A07850" strokeWidth="1" />
    </g>

    {/* Robot Body - larger with more detail */}
    <g id="robot-body">
      {/* Main body */}
      <rect
        x="155"
        y="255"
        width="90"
        height="55"
        rx="8"
        fill="#A07850"
        stroke="#6B5030"
        strokeWidth="4"
      />
      <rect x="155" y="255" width="90" height="55" rx="8" fill="#8B6F47" />

      {/* Body panel */}
      <rect x="170" y="275" width="60" height="25" rx="4" fill="#6B5030" />

      {/* Body detail button */}
      <circle cx="200" cy="287" r="8" fill="#D4A420" stroke="#A07850" strokeWidth="1.5" />
      <circle cx="200" cy="287" r="4" fill="#E8C040" />
    </g>

    {/* Four Arms in Vitruvian Man Pose - more spread out */}

    {/* Upper Left Arm - angled upward */}
    <g id="upper-left-arm">
      {/* Upper arm segment */}
      <rect
        x="85"
        y="130"
        width="22"
        height="55"
        rx="6"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(-55 96 157)"
      />
      {/* Forearm segment */}
      <rect
        x="35"
        y="95"
        width="20"
        height="50"
        rx="5"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(-75 45 120)"
      />
      {/* Upper left gloved hand */}
      <g transform="translate(22, 65) rotate(-30)">
        <ellipse cx="0" cy="0" rx="16" ry="11" fill="#F5F5F0" stroke="#3C2F1F" strokeWidth="2" />
        {/* Fingers */}
        <line
          x1="-8"
          y1="-10"
          x2="-10"
          y2="-22"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="-3"
          y1="-10"
          x2="-3"
          y2="-25"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="-10"
          x2="4"
          y2="-24"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="-9"
          x2="11"
          y2="-20"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="-6"
          x2="17"
          y2="-14"
          stroke="#F5F5F0"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
    </g>

    {/* Lower Left Arm - angled downward */}
    <g id="lower-left-arm">
      {/* Upper arm segment */}
      <rect
        x="95"
        y="200"
        width="22"
        height="55"
        rx="6"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(-25 106 227)"
      />
      {/* Forearm segment */}
      <rect
        x="55"
        y="255"
        width="20"
        height="50"
        rx="5"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(-45 65 280)"
      />
      {/* Lower left gloved hand */}
      <g transform="translate(30, 305) rotate(-25)">
        <ellipse cx="0" cy="0" rx="16" ry="11" fill="#F5F5F0" stroke="#3C2F1F" strokeWidth="2" />
        {/* Fingers */}
        <line
          x1="-8"
          y1="-10"
          x2="-10"
          y2="-22"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="-3"
          y1="-10"
          x2="-3"
          y2="-25"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="-10"
          x2="4"
          y2="-24"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="-9"
          x2="11"
          y2="-20"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="-6"
          x2="17"
          y2="-14"
          stroke="#F5F5F0"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </g>
    </g>

    {/* Upper Right Arm - angled upward */}
    <g id="upper-right-arm">
      {/* Upper arm segment */}
      <rect
        x="293"
        y="130"
        width="22"
        height="55"
        rx="6"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(55 304 157)"
      />
      {/* Forearm segment */}
      <rect
        x="345"
        y="95"
        width="20"
        height="50"
        rx="5"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(75 355 120)"
      />
      {/* Upper right gloved hand */}
      <g transform="translate(378, 65) rotate(30)">
        <ellipse cx="0" cy="0" rx="16" ry="11" fill="#F5F5F0" stroke="#3C2F1F" strokeWidth="2" />
        {/* Fingers */}
        <line
          x1="-12"
          y1="-6"
          x2="-17"
          y2="-14"
          stroke="#F5F5F0"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="-8"
          y1="-9"
          x2="-11"
          y2="-20"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="-3"
          y1="-10"
          x2="-4"
          y2="-24"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="-10"
          x2="3"
          y2="-25"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="-10"
          x2="10"
          y2="-22"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </g>

    {/* Lower Right Arm - angled downward */}
    <g id="lower-right-arm">
      {/* Upper arm segment */}
      <rect
        x="283"
        y="200"
        width="22"
        height="55"
        rx="6"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(25 294 227)"
      />
      {/* Forearm segment */}
      <rect
        x="325"
        y="255"
        width="20"
        height="50"
        rx="5"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
        transform="rotate(45 335 280)"
      />
      {/* Lower right gloved hand */}
      <g transform="translate(370, 305) rotate(25)">
        <ellipse cx="0" cy="0" rx="16" ry="11" fill="#F5F5F0" stroke="#3C2F1F" strokeWidth="2" />
        {/* Fingers */}
        <line
          x1="-12"
          y1="-6"
          x2="-17"
          y2="-14"
          stroke="#F5F5F0"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1="-8"
          y1="-9"
          x2="-11"
          y2="-20"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="-3"
          y1="-10"
          x2="-4"
          y2="-24"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="3"
          y1="-10"
          x2="3"
          y2="-25"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <line
          x1="8"
          y1="-10"
          x2="10"
          y2="-22"
          stroke="#F5F5F0"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
    </g>

    {/* Left Leg - larger */}
    <g id="left-leg">
      <rect
        x="165"
        y="310"
        width="20"
        height="35"
        rx="4"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
      />
      {/* Foot - chunkier */}
      <path
        d="M158 342 L158 358 Q158 363 165 363 L190 363 Q197 363 197 358 L197 350 L185 342 Z"
        fill="#8B6F47"
        stroke="#5D4A2F"
        strokeWidth="2.5"
      />
    </g>

    {/* Right Leg - larger */}
    <g id="right-leg">
      <rect
        x="215"
        y="310"
        width="20"
        height="35"
        rx="4"
        fill="#5D4A2F"
        stroke="#3C2F1F"
        strokeWidth="2.5"
      />
      {/* Foot - chunkier */}
      <path
        d="M203 350 L203 358 Q203 363 210 363 L235 363 Q242 363 242 358 L242 342 L215 342 Z"
        fill="#8B6F47"
        stroke="#5D4A2F"
        strokeWidth="2.5"
      />
    </g>
  </svg>
);

export default WizardRobotSvg;
