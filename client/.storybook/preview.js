import React from 'react';

// Import global font styles
import '../src/App/fontStyles.css';

// Import global style components
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import Toast from '../src/App/Toast';

export const decorators = [
  (Story) => (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Toast />
      <Story />
    </>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
