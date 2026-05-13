import React from 'react';
import '../src/App/fontStyles.css';
import BaseStyles from '../src/App/BaseStyles';

// Wrap all stories with global styles to match the app environment
export const decorators = [
  Story => (
    <>
      <BaseStyles />
      <Story />
    </>
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
