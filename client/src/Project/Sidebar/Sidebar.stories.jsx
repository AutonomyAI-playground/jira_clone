import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { ProjectCategory } from 'shared/constants/projects';
import ProjectSidebar from './index';

export default {
  title: 'Project/Sidebar',
  component: ProjectSidebar,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <MemoryRouter initialEntries={['/project/board']}>
        <Route path="/project">
          <div style={{ marginLeft: '64px' }}>
            <Story />
          </div>
        </Route>
      </MemoryRouter>
    ),
  ],
};

// Mock project data
const mockProject = {
  id: 1,
  name: 'Jira Clone',
  category: ProjectCategory.SOFTWARE,
  description: 'A simplified Jira clone built with React',
};

export const Default = {
  args: {
    project: mockProject,
  },
};

export const MarketingProject = {
  args: {
    project: {
      ...mockProject,
      name: 'Marketing Campaign',
      category: ProjectCategory.MARKETING,
    },
  },
};

export const BusinessProject = {
  args: {
    project: {
      ...mockProject,
      name: 'Business Operations',
      category: ProjectCategory.BUSINESS,
    },
  },
};
