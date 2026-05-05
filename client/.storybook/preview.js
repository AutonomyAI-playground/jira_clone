import React from 'react';
import '../src/App/fontStyles.css';
import BaseStyles from '../src/App/BaseStyles';

const preview = {
  decorators: [
    // Apply global styles to all stories to match the main app environment
    Story => (
      <>
        <BaseStyles />
        <Story />
      </>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
