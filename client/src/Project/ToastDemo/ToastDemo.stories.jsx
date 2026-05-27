import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ProjectToastDemo from './index';

export default {
  title: 'Project/ToastDemo',
  component: ProjectToastDemo,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = {
  args: {},
};
