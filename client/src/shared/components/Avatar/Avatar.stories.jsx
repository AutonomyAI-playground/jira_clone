import React from 'react';
import styled from 'styled-components';
import Avatar from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

/**
 * Wrapper that adds a colorful gradient border around the avatar.
 * Creates a layered effect with padding to show the gradient ring.
 */
const GradientBorderWrapper = styled.div`
  display: inline-block;
  padding: 5px;
  border-radius: 50%;
  background: linear-gradient(180deg, #5eead4 0%, #3b82f6 50%, #818cf8 100%);
  box-shadow: 0 4px 20px rgba(59, 130, 246, 0.3);
`;

const InnerCircle = styled.div`
  border-radius: 50%;
  overflow: hidden;
`;

export const WithGradientBorder = () => (
  <GradientBorderWrapper>
    <InnerCircle>
      <Avatar avatarUrl="https://i.imgur.com/8Km9tLL.jpg" size={300} />
    </InnerCircle>
  </GradientBorderWrapper>
);

// Default avatar with image
export const Default = () => (
  <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" name="John Doe" size={40} />
);

// Avatar with initials
export const WithInitials = () => <Avatar name="John Doe" size={40} />;

// Different sizes
export const Sizes = () => (
  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
    <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" size={24} />
    <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" size={32} />
    <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" size={40} />
    <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" size={56} />
    <Avatar avatarUrl="https://i.pravatar.cc/150?img=1" size={80} />
  </div>
);

// Multiple avatars with initials
export const MultipleInitials = () => (
  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
    <Avatar name="Alice Smith" size={40} />
    <Avatar name="Bob Johnson" size={40} />
    <Avatar name="Carol Williams" size={40} />
    <Avatar name="David Brown" size={40} />
  </div>
);
