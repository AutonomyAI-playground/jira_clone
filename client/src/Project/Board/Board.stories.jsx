import React, { useEffect, useState } from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import axios from 'axios';
import Board from './index';

export default {
  title: 'Project/Board',
  component: Board,
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock project data with realistic Kanban board content
const mockUsers = [
  { id: 1, name: 'Lord Gaben', avatarUrl: 'https://i.pravatar.cc/150?img=1' },
  { id: 2, name: 'Pickle Rick', avatarUrl: 'https://i.pravatar.cc/150?img=2' },
  { id: 3, name: 'Baby Yoda', avatarUrl: 'https://i.pravatar.cc/150?img=3' },
  { id: 4, name: 'Darth Vader', avatarUrl: 'https://i.pravatar.cc/150?img=4' },
];

const mockIssues = [
  // Backlog issues
  {
    id: 101,
    title: 'Implement user authentication flow with OAuth 2.0',
    type: 'story',
    status: 'backlog',
    priority: '4',
    listPosition: 1,
    userIds: [1, 2],
    createdAt: '2024-01-10T10:00:00Z',
    updatedAt: '2024-01-15T14:30:00Z',
  },
  {
    id: 102,
    title: 'Create database schema for notifications',
    type: 'task',
    status: 'backlog',
    priority: '3',
    listPosition: 2,
    userIds: [3],
    createdAt: '2024-01-11T09:00:00Z',
    updatedAt: '2024-01-14T11:20:00Z',
  },
  {
    id: 103,
    title: 'Fix memory leak in dashboard component',
    type: 'bug',
    status: 'backlog',
    priority: '5',
    listPosition: 3,
    userIds: [1],
    createdAt: '2024-01-12T08:00:00Z',
    updatedAt: '2024-01-13T16:45:00Z',
  },
  // Selected for development
  {
    id: 201,
    title: 'Design new landing page mockups',
    type: 'task',
    status: 'selected',
    priority: '4',
    listPosition: 1,
    userIds: [2, 4],
    createdAt: '2024-01-08T10:00:00Z',
    updatedAt: '2024-01-15T09:15:00Z',
  },
  {
    id: 202,
    title: 'Add unit tests for payment module',
    type: 'task',
    status: 'selected',
    priority: '3',
    listPosition: 2,
    userIds: [3],
    createdAt: '2024-01-09T11:00:00Z',
    updatedAt: '2024-01-14T17:30:00Z',
  },
  // In Progress
  {
    id: 301,
    title: 'Implement drag and drop for task cards',
    type: 'story',
    status: 'inprogress',
    priority: '5',
    listPosition: 1,
    userIds: [1],
    createdAt: '2024-01-06T10:00:00Z',
    updatedAt: '2024-01-15T16:00:00Z',
  },
  {
    id: 302,
    title: 'Fix responsive layout on mobile devices',
    type: 'bug',
    status: 'inprogress',
    priority: '4',
    listPosition: 2,
    userIds: [2, 3],
    createdAt: '2024-01-07T09:00:00Z',
    updatedAt: '2024-01-15T12:00:00Z',
  },
  {
    id: 303,
    title: 'Optimize image loading performance',
    type: 'task',
    status: 'inprogress',
    priority: '2',
    listPosition: 3,
    userIds: [4],
    createdAt: '2024-01-05T14:00:00Z',
    updatedAt: '2024-01-14T10:30:00Z',
  },
  // Done
  {
    id: 401,
    title: 'Setup CI/CD pipeline with GitHub Actions',
    type: 'task',
    status: 'done',
    priority: '4',
    listPosition: 1,
    userIds: [1, 4],
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-10T15:00:00Z',
  },
  {
    id: 402,
    title: 'Configure ESLint and Prettier',
    type: 'task',
    status: 'done',
    priority: '2',
    listPosition: 2,
    userIds: [2],
    createdAt: '2024-01-02T09:00:00Z',
    updatedAt: '2024-01-08T11:00:00Z',
  },
  {
    id: 403,
    title: 'Fixed header z-index issue',
    type: 'bug',
    status: 'done',
    priority: '3',
    listPosition: 3,
    userIds: [3],
    createdAt: '2024-01-03T08:00:00Z',
    updatedAt: '2024-01-09T14:00:00Z',
  },
];

const mockProject = {
  id: 1,
  name: 'Singularity 1.0',
  url: 'https://www.atlassian.com/software/jira',
  description: 'Plan, track, and manage your agile and software development projects.',
  category: 'software',
  users: mockUsers,
  issues: mockIssues,
};

/**
 * Creates a mock response object for axios interceptors.
 * Reduces duplication in mock setup by standardizing the response structure.
 */
const createMockResponse = (data, config) => ({
  data,
  status: 200,
  statusText: 'OK',
  headers: {},
  config,
});

/**
 * Sets up axios interceptors to mock API calls for Storybook.
 * Handles currentUser authentication and issue updates without real backend.
 *
 * @param {boolean} mockIssueUpdates - Whether to mock issue update endpoints
 * @returns {Function} Cleanup function to remove interceptors
 */
const setupAxiosMocks = (mockIssueUpdates = true) => {
  const requestInterceptorId = axios.interceptors.request.use(
    config => {
      // Mock currentUser endpoint - returns first mock user as logged-in user
      if (config.url?.includes('/currentUser')) {
        config.adapter = () =>
          Promise.resolve(createMockResponse({ currentUser: mockUsers[0] }, config));
      }
      // Mock issue update endpoints to prevent actual API calls during drag-and-drop
      if (mockIssueUpdates && config.url?.includes('/issues/')) {
        config.adapter = () => Promise.resolve(createMockResponse({}, config));
      }
      return config;
    },
    error => Promise.reject(error),
  );

  const responseInterceptorId = axios.interceptors.response.use(
    response => response,
    error => {
      // Fallback for failed requests - prevents error toasts in Storybook
      if (error.config?.url?.includes('/currentUser')) {
        return Promise.resolve({ data: { currentUser: mockUsers[0] } });
      }
      if (mockIssueUpdates && error.config?.url?.includes('/issues/')) {
        return Promise.resolve({ data: {} });
      }
      return Promise.reject(error);
    },
  );

  return () => {
    axios.interceptors.request.eject(requestInterceptorId);
    axios.interceptors.response.eject(responseInterceptorId);
  };
};

/**
 * Wrapper component that sets up axios mocking for the Board.
 * Ensures the Board component can function in Storybook without a real backend.
 */
const BoardWithMocking = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cleanup = setupAxiosMocks(true);
    setReady(true);
    return cleanup;
  }, []);

  if (!ready) return null;

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <Board project={mockProject} fetchProject={() => {}} updateLocalProjectIssues={() => {}} />
      </Route>
    </MemoryRouter>
  );
};

export const Default = {
  render: () => <BoardWithMocking />,
};

// Board with fewer issues to show a simpler state
const simpleProject = {
  ...mockProject,
  issues: mockIssues.slice(0, 5),
};

/**
 * Simplified Board story showing fewer issues for easier visualization.
 * Uses the same mocking setup but without issue update mocking since there are fewer items to drag.
 */
const BoardSimple = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const cleanup = setupAxiosMocks(false);
    setReady(true);
    return cleanup;
  }, []);

  if (!ready) return null;

  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <Board
          project={simpleProject}
          fetchProject={() => {}}
          updateLocalProjectIssues={() => {}}
        />
      </Route>
    </MemoryRouter>
  );
};

export const FewIssues = {
  render: () => <BoardSimple />,
};
