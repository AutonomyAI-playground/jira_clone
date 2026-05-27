import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  display: block;
`;

// Wizard-themed robot mascot illustration for the toast demo
// SVG viewBox is fixed at 400x400, size prop scales the rendered output
const WizardRobotSVG = ({ size = 280 }) => (
  <Svg width={size} height={size} viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    {/* Wizard Hat */}
    <g id="wizard-hat">
      {/* Hat cone */}
      <path
        d="M 200 80 L 140 180 L 260 180 Z"
        fill="#4A6FA5"
        stroke="#2C3E50"
        strokeWidth="3"
        strokeLinejoin="round"
      />

      {/* Hat brim */}
      <ellipse cx="200" cy="180" rx="80" ry="18" fill="#3D5A80" stroke="#2C3E50" strokeWidth="3" />

      {/* Stars on hat */}
      <polygon
        points="170,120 175,130 185,130 177,137 180,147 170,140 160,147 163,137 155,130 165,130"
        fill="#F4D03F"
        stroke="#2C3E50"
        strokeWidth="1.5"
      />

      <polygon
        points="220,140 224,148 232,148 226,153 228,161 220,156 212,161 214,153 208,148 216,148"
        fill="#F4D03F"
        stroke="#2C3E50"
        strokeWidth="1.5"
      />

      {/* Crescent moon on hat */}
      <path
        d="M 195 105 Q 185 115 195 125 Q 190 120 190 110 Q 190 100 195 105 Z"
        fill="#F4D03F"
        stroke="#2C3E50"
        strokeWidth="1.5"
      />
    </g>

    {/* Robot/TV Body */}
    <g id="robot-body">
      {/* Main body frame */}
      <rect
        x="140"
        y="190"
        width="120"
        height="110"
        rx="8"
        fill="#8B6F47"
        stroke="#5D4E37"
        strokeWidth="4"
      />

      {/* Screen outer frame */}
      <rect
        x="155"
        y="205"
        width="90"
        height="65"
        rx="4"
        fill="#6B563D"
        stroke="#4A3F2F"
        strokeWidth="3"
      />

      {/* Screen - green display */}
      <rect
        x="162"
        y="212"
        width="76"
        height="51"
        rx="2"
        fill="#7FB069"
        stroke="#5A8C4F"
        strokeWidth="2"
      />

      {/* Screen shine effects */}
      <rect x="168" y="218" width="30" height="20" rx="2" fill="#A8D5A1" opacity="0.6" />

      <rect x="205" y="235" width="20" height="15" rx="2" fill="#E8F5E3" opacity="0.4" />

      {/* Control button */}
      <circle cx="200" cy="285" r="8" fill="#D4A574" stroke="#8B6F47" strokeWidth="2" />

      <circle cx="200" cy="285" r="4" fill="#6B563D" />
    </g>

    {/* Robot Arms */}
    <g id="arms">
      {/* Left arm */}
      <g id="left-arm">
        {/* Upper arm */}
        <rect
          x="115"
          y="220"
          width="30"
          height="12"
          rx="6"
          fill="#5D4E37"
          stroke="#3D2E17"
          strokeWidth="2"
        />

        {/* Lower arm */}
        <rect
          x="95"
          y="225"
          width="25"
          height="10"
          rx="5"
          fill="#5D4E37"
          stroke="#3D2E17"
          strokeWidth="2"
        />

        {/* Hand - glove */}
        <ellipse cx="90" cy="230" rx="12" ry="15" fill="#E8E8E8" stroke="#2C3E50" strokeWidth="2" />

        {/* Fingers */}
        <line
          x1="85"
          y1="220"
          x2="82"
          y2="212"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="88"
          y1="218"
          x2="87"
          y2="210"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="92"
          y1="218"
          x2="93"
          y2="210"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="95"
          y1="220"
          x2="98"
          y2="212"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* Right arm */}
      <g id="right-arm">
        {/* Upper arm */}
        <rect
          x="255"
          y="220"
          width="30"
          height="12"
          rx="6"
          fill="#5D4E37"
          stroke="#3D2E17"
          strokeWidth="2"
        />

        {/* Lower arm */}
        <rect
          x="280"
          y="225"
          width="25"
          height="10"
          rx="5"
          fill="#5D4E37"
          stroke="#3D2E17"
          strokeWidth="2"
        />

        {/* Hand - glove */}
        <ellipse
          cx="310"
          cy="230"
          rx="12"
          ry="15"
          fill="#E8E8E8"
          stroke="#2C3E50"
          strokeWidth="2"
        />

        {/* Fingers */}
        <line
          x1="302"
          y1="220"
          x2="299"
          y2="212"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="307"
          y1="218"
          x2="306"
          y2="210"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="311"
          y1="218"
          x2="312"
          y2="210"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="315"
          y1="220"
          x2="318"
          y2="212"
          stroke="#2C3E50"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>
    </g>

    {/* Robot Legs/Feet */}
    <g id="legs">
      {/* Left leg */}
      <rect
        x="165"
        y="300"
        width="20"
        height="25"
        rx="3"
        fill="#5D4E37"
        stroke="#3D2E17"
        strokeWidth="2"
      />

      {/* Left foot */}
      <ellipse cx="175" cy="330" rx="18" ry="10" fill="#6B563D" stroke="#4A3F2F" strokeWidth="2" />

      {/* Right leg */}
      <rect
        x="215"
        y="300"
        width="20"
        height="25"
        rx="3"
        fill="#5D4E37"
        stroke="#3D2E17"
        strokeWidth="2"
      />

      {/* Right foot */}
      <ellipse cx="225" cy="330" rx="18" ry="10" fill="#6B563D" stroke="#4A3F2F" strokeWidth="2" />
    </g>
  </Svg>
);

WizardRobotSVG.propTypes = {
  size: PropTypes.number,
};

WizardRobotSVG.defaultProps = {
  size: 280,
};

export default WizardRobotSVG;
