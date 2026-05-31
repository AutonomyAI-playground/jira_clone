import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../src/App/fontStyles.css';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import Toast from '../src/App/Toast';

export const decorators = [
  (Story) => (
    <MemoryRouter>
      <NormalizeStyles />
      <BaseStyles />
      <Toast />
      <Story />
    </MemoryRouter>
  ),
];

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/i,
    },
  },
};
