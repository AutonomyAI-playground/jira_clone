import React from 'react';
import Backlog from './index';

export default {
  title: 'Project/Backlog',
  component: Backlog,
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock users with diverse data
const mockUsers = [
  {
    id: 1,
    name: 'Lord Gaben',
    avatarUrl: 'https://i.pravatar.cc/150?u=gaben',
  },
  {
    id: 2,
    name: 'Baby Yoda',
    avatarUrl: 'https://i.pravatar.cc/150?u=yoda',
  },
  {
    id: 3,
    name: 'Captain Marvel',
    avatarUrl: 'https://i.pravatar.cc/150?u=marvel',
  },
  {
    id: 4,
    name: 'Tony Stark',
    avatarUrl: 'https://i.pravatar.cc/150?u=stark',
  },
];

// Mock issues with diverse types, statuses, and priorities
const mockIssues = [
  {
    id: 101,
    title: 'Implement user authentication flow',
    type: 'story',
    status: 'inprogress',
    priority: '5',
    listPosition: 1,
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:00:00Z',
    userIds: [1, 2],
  },
  {
    id: 102,
    title: 'Fix login button not responding on mobile devices',
    type: 'bug',
    status: 'selected',
    priority: '4',
    listPosition: 2,
    createdAt: '2024-01-18T09:15:00Z',
    updatedAt: '2024-01-19T11:30:00Z',
    userIds: [2],
  },
  {
    id: 103,
    title: 'Add dark mode support to dashboard',
    type: 'task',
    status: 'backlog',
    priority: '3',
    listPosition: 3,
    createdAt: '2024-01-10T16:45:00Z',
    updatedAt: '2024-01-10T16:45:00Z',
    userIds: [1, 3],
  },
  {
    id: 104,
    title: 'Performance optimization for large datasets',
    type: 'story',
    status: 'done',
    priority: '4',
    listPosition: 4,
    createdAt: '2024-01-05T08:00:00Z',
    updatedAt: '2024-01-14T12:00:00Z',
    userIds: [4],
  },
  {
    id: 105,
    title: 'API endpoint returns 500 error on specific input',
    type: 'bug',
    status: 'backlog',
    priority: '5',
    listPosition: 5,
    createdAt: '2024-01-20T13:00:00Z',
    updatedAt: '2024-01-20T13:00:00Z',
    userIds: [2, 4],
  },
  {
    id: 106,
    title: 'Update dependencies to latest versions',
    type: 'task',
    status: 'selected',
    priority: '2',
    listPosition: 6,
    createdAt: '2024-01-12T11:30:00Z',
    updatedAt: '2024-01-15T09:45:00Z',
    userIds: [3],
  },
  {
    id: 107,
    title: 'Create reusable button component library',
    type: 'story',
    status: 'inprogress',
    priority: '3',
    listPosition: 7,
    createdAt: '2024-01-08T14:20:00Z',
    updatedAt: '2024-01-18T16:30:00Z',
    userIds: [1],
  },
  {
    id: 108,
    title: 'Memory leak in dashboard component',
    type: 'bug',
    status: 'inprogress',
    priority: '4',
    listPosition: 8,
    createdAt: '2024-01-17T10:00:00Z',
    updatedAt: '2024-01-19T15:00:00Z',
    userIds: [2, 3],
  },
];

// Mock project
const mockProject = {
  id: 1,
  name: 'Project Management App',
  users: mockUsers,
  issues: mockIssues,
};

// Base template
const Template = args => <Backlog {...args} />;

// Default story showing full backlog
export const Default = Template.bind({});
Default.args = {
  project: mockProject,
  fetchProject: () => {},
  updateLocalProjectIssues: () => {},
};

// Story with many issues to show scrolling
const manyIssues = [
  ...mockIssues,
  {
    id: 109,
    title: 'Set up CI/CD pipeline for automated testing',
    type: 'task',
    status: 'backlog',
    priority: '3',
    listPosition: 9,
    createdAt: '2024-01-21T09:00:00Z',
    updatedAt: '2024-01-21T09:00:00Z',
    userIds: [4],
  },
  {
    id: 110,
    title: 'Implement drag and drop for kanban board',
    type: 'story',
    status: 'done',
    priority: '4',
    listPosition: 10,
    createdAt: '2024-01-02T12:00:00Z',
    updatedAt: '2024-01-10T18:00:00Z',
    userIds: [1, 2],
  },
  {
    id: 111,
    title: 'CSS styles not loading in production build',
    type: 'bug',
    status: 'selected',
    priority: '5',
    listPosition: 11,
    createdAt: '2024-01-22T08:30:00Z',
    updatedAt: '2024-01-22T10:00:00Z',
    userIds: [3],
  },
  {
    id: 112,
    title: 'Add unit tests for authentication module',
    type: 'task',
    status: 'backlog',
    priority: '2',
    listPosition: 12,
    createdAt: '2024-01-19T14:00:00Z',
    updatedAt: '2024-01-19T14:00:00Z',
    userIds: [2],
  },
];

export const ManyIssues = Template.bind({});
ManyIssues.args = {
  project: {
    ...mockProject,
    issues: manyIssues,
  },
  fetchProject: () => {},
  updateLocalProjectIssues: () => {},
};

// Story with empty backlog
export const EmptyBacklog = Template.bind({});
EmptyBacklog.args = {
  project: {
    ...mockProject,
    issues: [],
  },
  fetchProject: () => {},
  updateLocalProjectIssues: () => {},
};
