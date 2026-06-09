import React from 'react';
import '../src/App/fontStyles.css';
import NormalizeStyles from '../src/App/NormalizeStyles';
import BaseStyles from '../src/App/BaseStyles';
import Toast from '../src/App/Toast';

export const decorators = [
  Story => (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Toast />
      <Story />
    </>
  ),
];

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
