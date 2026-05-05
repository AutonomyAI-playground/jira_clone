import styled from 'styled-components';

import { mixin } from 'shared/utils/styles';

/**
 * Outer container with gradient background.
 * Padding creates space for the gradient border effect.
 */
export const Container = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background: linear-gradient(135deg, #4169e1 0%, #00ced1 100%);
  padding: ${props => props.borderWidth || 10}px;
`;

/**
 * Middle layer with white background.
 * Creates separation between gradient border and image.
 */
export const InnerCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #ffffff;
  padding: 4px;
  overflow: hidden; /* Ensures image respects circular boundary */
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  ${props => mixin.backgroundImage(props.imageUrl)}
`;
