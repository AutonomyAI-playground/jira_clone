import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Board from './index';

export default {
  title: 'Pages/Board',
  component: Board,
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

export const Default = {
  args: {},
};
