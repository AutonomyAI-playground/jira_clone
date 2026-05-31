import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Page404 from './index';

export default {
  title: 'Components/Page404',
  component: Page404,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {};
