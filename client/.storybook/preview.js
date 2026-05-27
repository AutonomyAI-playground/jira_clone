import React from 'react';
import '../src/App/fontStyles.css';
import BaseStyles from '../src/App/BaseStyles';

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
