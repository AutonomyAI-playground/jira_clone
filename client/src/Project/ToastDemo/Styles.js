import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

// Full-page container with parchment-inspired background for wizard theme
// Multiple radial gradients create subtle texture resembling aged paper
export const ToastDemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 40px 20px;
  background-color: #ede6d6;
  background-image: radial-gradient(
      circle at 20% 30%,
      rgba(139, 111, 71, 0.08) 1px,
      transparent 1px
    ),
    radial-gradient(circle at 80% 70%, rgba(93, 78, 55, 0.06) 1px, transparent 1px),
    radial-gradient(circle at 40% 80%, rgba(139, 111, 71, 0.05) 1px, transparent 1px),
    radial-gradient(circle at 60% 20%, rgba(93, 78, 55, 0.07) 1px, transparent 1px),
    radial-gradient(circle at 10% 60%, rgba(139, 111, 71, 0.04) 1px, transparent 1px),
    radial-gradient(circle at 90% 40%, rgba(93, 78, 55, 0.05) 1px, transparent 1px);
  background-size: 100% 100%, 120% 120%, 80% 80%, 150% 150%, 90% 90%, 110% 110%;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 50px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

export const WizardRobotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

// Decorative frame for the wizard robot with crosshair alignment guides
// Pseudo-elements create subtle crosshair lines for visual interest
export const OvalFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #8b5a3c;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(0, 0, 0, 0.05);
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(139, 90, 60, 0.2);
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(139, 90, 60, 0.2);
  }
`;

export const Title = styled.h1`
  margin: 0 0 10px;
  ${font.size(32)}
  ${font.bold}
  color: red;
`;

export const Subtitle = styled.p`
  margin: 0;
  ${font.size(16)}
  color: ${color.textMedium};
`;

// Responsive grid layout for button sections
// Auto-fit ensures graceful wrapping on smaller screens
export const ButtonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 40px;
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionTitle = styled.h3`
  margin: 0 0 12px;
  ${font.size(18)}
  ${font.medium}
  color: ${color.textDark};
  padding-bottom: 8px;
  border-bottom: 2px solid ${color.borderLight};
`;

export const ButtonWrapper = styled.div`
  display: flex;

  button {
    width: 100%;
  }
`;
