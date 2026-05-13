import React from 'react';

import { ErrorPage, ErrorContainer, ImageContainer, GradientBorder, ImageWrapper } from './Styles';

/**
 * Error404 component displays a custom 404 page with an avatar illustration.
 *
 * The avatar is rendered as inline SVG to avoid external dependencies and ensure
 * it loads reliably even when other resources might be unavailable.
 */
const Error404 = () => {
  return (
    <ErrorPage>
      <ErrorContainer>
        <ImageContainer>
          <GradientBorder>
            <ImageWrapper>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* Orange/Yellow Background */}
                <circle cx="100" cy="100" r="100" fill="#F4A261" />

                {/* Character Face - Light skin tone */}
                <ellipse cx="100" cy="95" rx="35" ry="42" fill="#FFE8D6" />

                {/* Dark hair */}
                <path
                  d="M 65 70 Q 60 50, 70 40 Q 80 30, 100 30 Q 120 30, 130 40 Q 140 50, 135 70 Q 130 55, 120 50 Q 110 45, 100 45 Q 90 45, 80 50 Q 70 55, 65 70 Z"
                  fill="#1A1A3E"
                />
                {/* Hair strands */}
                <path d="M 75 45 Q 70 35, 75 30" stroke="#1A1A3E" strokeWidth="3" fill="none" />
                <path d="M 85 42 Q 82 32, 85 28" stroke="#1A1A3E" strokeWidth="2.5" fill="none" />
                <path d="M 95 40 Q 95 30, 95 25" stroke="#1A1A3E" strokeWidth="2.5" fill="none" />

                {/* Eyes - Amber/Yellow */}
                <ellipse cx="85" cy="90" rx="8" ry="11" fill="#FFF" />
                <ellipse cx="115" cy="90" rx="8" ry="11" fill="#FFF" />
                <circle cx="85" cy="90" r="6" fill="#F4A261" />
                <circle cx="115" cy="90" r="6" fill="#F4A261" />
                <circle cx="86" cy="88" r="3" fill="#1A1A3E" />
                <circle cx="116" cy="88" r="3" fill="#1A1A3E" />
                {/* Eye highlights */}
                <circle cx="87" cy="87" r="1.5" fill="#FFF" />
                <circle cx="117" cy="87" r="1.5" fill="#FFF" />

                {/* Eyebrows */}
                <path
                  d="M 75 78 Q 80 75, 90 76"
                  stroke="#1A1A3E"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 110 76 Q 120 75, 125 78"
                  stroke="#1A1A3E"
                  strokeWidth="2.5"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Nose */}
                <path d="M 100 95 L 102 102" stroke="#E8B59A" strokeWidth="1.5" fill="none" />

                {/* Mouth */}
                <path
                  d="M 92 110 Q 100 113, 108 110"
                  stroke="#D4917A"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="round"
                />

                {/* Clothing/Collar - Dark Navy */}
                <path
                  d="M 65 135 Q 70 125, 80 120 L 100 130 L 120 120 Q 130 125, 135 135"
                  fill="#1A1A3E"
                />
                {/* Collar accent */}
                <path d="M 75 125 Q 85 122, 95 128" stroke="#FFE8D6" strokeWidth="2" fill="none" />

                {/* Additional hair detail - side */}
                <path
                  d="M 65 70 Q 60 80, 62 95"
                  stroke="#1A1A3E"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M 135 70 Q 140 80, 138 95"
                  stroke="#1A1A3E"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </ImageWrapper>
          </GradientBorder>
        </ImageContainer>
      </ErrorContainer>
    </ErrorPage>
  );
};

export default Error404;
