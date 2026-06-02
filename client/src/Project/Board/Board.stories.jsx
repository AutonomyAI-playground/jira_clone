import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import Board from './index';

export default {
  title: 'Project/Board',
  component: Board,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => {
      // Set current user ID for the Board component's useCurrentUser hook,
      // which reads from the API cache initialized via window global
      // eslint-disable-next-line no-underscore-dangle
      window.__CURRENT_USER_ID__ = 1;
      return (
        <MemoryRouter initialEntries={['/project/board']}>
          <Route path="/project/board">
            <Story />
          </Route>
        </MemoryRouter>
      );
    },
  ],
};

// Mock project data with users and issues across all columns
const mockProject = {
  id: 1,
  name: 'Project Alpha',
  category: 'software',
  users: [
    {
      id: 1,
      name: 'John Smith',
      avatarUrl: 'https://i.pravatar.cc/150?u=john',
      email: 'john@example.com',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      avatarUrl: 'https://i.pravatar.cc/150?u=sarah',
      email: 'sarah@example.com',
    },
    {
      id: 3,
      name: 'Michael Chen',
      avatarUrl: 'https://i.pravatar.cc/150?u=michael',
      email: 'michael@example.com',
    },
    {
      id: 4,
      name: 'Emily Davis',
      avatarUrl: 'https://i.pravatar.cc/150?u=emily',
      email: 'emily@example.com',
    },
  ],
  issues: [
    // Backlog issues
    {
      id: 1,
      title: 'Implement user authentication flow',
      type: 'story',
      status: 'backlog',
      priority: '4',
      listPosition: 1,
      description: 'Create login and signup functionality',
      userIds: [1, 2],
      reporterId: 1,
      createdAt: '2024-01-10T10:00:00.000Z',
      updatedAt: '2024-01-12T14:30:00.000Z',
    },
    {
      id: 2,
      title: 'Set up database schema',
      type: 'task',
      status: 'backlog',
      priority: '3',
      listPosition: 2,
      description: 'Design initial database models',
      userIds: [3],
      reporterId: 2,
      createdAt: '2024-01-11T09:00:00.000Z',
      updatedAt: '2024-01-11T09:00:00.000Z',
    },
    {
      id: 3,
      title: 'Fix memory leak in sidebar component',
      type: 'bug',
      status: 'backlog',
      priority: '5',
      listPosition: 3,
      description: 'Memory usage increases over time',
      userIds: [4],
      reporterId: 1,
      createdAt: '2024-01-12T11:00:00.000Z',
      updatedAt: '2024-01-13T08:00:00.000Z',
    },
    // Selected for Development
    {
      id: 4,
      title: 'Design landing page mockups',
      type: 'task',
      status: 'selected',
      priority: '3',
      listPosition: 1,
      description: 'Create wireframes for new landing page',
      userIds: [2],
      reporterId: 3,
      createdAt: '2024-01-08T14:00:00.000Z',
      updatedAt: '2024-01-14T16:00:00.000Z',
    },
    {
      id: 5,
      title: 'API rate limiting implementation',
      type: 'story',
      status: 'selected',
      priority: '4',
      listPosition: 2,
      description: 'Add rate limiting to prevent abuse',
      userIds: [1, 3],
      reporterId: 2,
      createdAt: '2024-01-09T10:00:00.000Z',
      updatedAt: '2024-01-10T12:00:00.000Z',
    },
    // In Progress
    {
      id: 6,
      title: 'Build dashboard analytics widget',
      type: 'story',
      status: 'inprogress',
      priority: '4',
      listPosition: 1,
      description: 'Create real-time analytics display',
      userIds: [1],
      reporterId: 1,
      createdAt: '2024-01-05T08:00:00.000Z',
      updatedAt: '2024-01-15T09:00:00.000Z',
    },
    {
      id: 7,
      title: 'Optimize image loading performance',
      type: 'task',
      status: 'inprogress',
      priority: '3',
      listPosition: 2,
      description: 'Implement lazy loading for images',
      userIds: [4],
      reporterId: 3,
      createdAt: '2024-01-06T11:00:00.000Z',
      updatedAt: '2024-01-14T15:00:00.000Z',
    },
    {
      id: 8,
      title: 'Button click not working on mobile',
      type: 'bug',
      status: 'inprogress',
      priority: '5',
      listPosition: 3,
      description: 'Touch events not triggering properly',
      userIds: [2, 4],
      reporterId: 1,
      createdAt: '2024-01-13T13:00:00.000Z',
      updatedAt: '2024-01-15T10:00:00.000Z',
    },
    // Done
    {
      id: 9,
      title: 'Setup CI/CD pipeline',
      type: 'task',
      status: 'done',
      priority: '4',
      listPosition: 1,
      description: 'Configure automated deployment',
      userIds: [3],
      reporterId: 2,
      createdAt: '2024-01-02T09:00:00.000Z',
      updatedAt: '2024-01-07T17:00:00.000Z',
    },
    {
      id: 10,
      title: 'Write unit tests for auth module',
      type: 'task',
      status: 'done',
      priority: '3',
      listPosition: 2,
      description: 'Achieve 80% code coverage',
      userIds: [1, 4],
      reporterId: 3,
      createdAt: '2024-01-03T10:00:00.000Z',
      updatedAt: '2024-01-08T14:00:00.000Z',
    },
    {
      id: 11,
      title: 'Fix broken navigation links',
      type: 'bug',
      status: 'done',
      priority: '5',
      listPosition: 3,
      description: 'Some links returning 404',
      userIds: [2],
      reporterId: 1,
      createdAt: '2024-01-04T08:00:00.000Z',
      updatedAt: '2024-01-06T11:00:00.000Z',
    },
  ],
};

// Mock functions that simulate API behavior for the story
const mockFetchProject = () => Promise.resolve(mockProject);
const mockUpdateLocalProjectIssues = () => {
  // In a real scenario, this would update the backend and trigger a re-fetch
};

export const Default = {
  args: {
    project: mockProject,
    fetchProject: mockFetchProject,
    updateLocalProjectIssues: mockUpdateLocalProjectIssues,
  },
};

// Empty board state
const emptyProject = {
  ...mockProject,
  issues: [],
};

export const EmptyBoard = {
  args: {
    project: emptyProject,
    fetchProject: mockFetchProject,
    updateLocalProjectIssues: mockUpdateLocalProjectIssues,
  },
};
