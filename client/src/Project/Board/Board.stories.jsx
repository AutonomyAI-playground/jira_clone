import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';

import { IssueType, IssueStatus, IssuePriority } from 'shared/constants/issues';

import ProjectBoard from './index';

export default {
  title: 'Project/Board',
  component: ProjectBoard,
  parameters: {
    layout: 'fullscreen',
  },
};

// Mock user data for demonstrating assignee avatars and filtering
const mockUsers = [
  {
    id: 1,
    name: 'Pickle Rick',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    email: 'rick@jira.com',
  },
  {
    id: 2,
    name: 'Lord Gaben',
    avatarUrl: 'https://i.pravatar.cc/150?img=2',
    email: 'gabe@jira.com',
  },
  {
    id: 3,
    name: 'Baby Yoda',
    avatarUrl: 'https://i.pravatar.cc/150?img=3',
    email: 'yoda@jira.com',
  },
  {
    id: 4,
    name: 'Tony Stark',
    avatarUrl: 'https://i.pravatar.cc/150?img=4',
    email: 'tony@jira.com',
  },
];

// Mock issues distributed across all board columns to demonstrate the kanban layout
const mockIssues = [
  // Backlog issues
  {
    id: 1,
    title: 'Set up project infrastructure and CI/CD pipeline',
    type: IssueType.TASK,
    status: IssueStatus.BACKLOG,
    priority: IssuePriority.HIGH,
    listPosition: 1,
    description: 'Configure the build and deployment infrastructure',
    userIds: [1, 2],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Research authentication providers',
    type: IssueType.STORY,
    status: IssueStatus.BACKLOG,
    priority: IssuePriority.MEDIUM,
    listPosition: 2,
    description: 'Evaluate OAuth providers',
    userIds: [3],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 3,
    title: 'Create database schema design document',
    type: IssueType.TASK,
    status: IssueStatus.BACKLOG,
    priority: IssuePriority.LOW,
    listPosition: 3,
    description: 'Document the database design',
    userIds: [2],
    updatedAt: new Date().toISOString(),
  },
  // Selected for development
  {
    id: 4,
    title: 'Implement user login form',
    type: IssueType.TASK,
    status: IssueStatus.SELECTED,
    priority: IssuePriority.HIGHEST,
    listPosition: 1,
    description: 'Create the login form component',
    userIds: [1],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 5,
    title: 'Fix login button styling on mobile',
    type: IssueType.BUG,
    status: IssueStatus.SELECTED,
    priority: IssuePriority.HIGH,
    listPosition: 2,
    description: 'Button is misaligned on small screens',
    userIds: [3, 4],
    updatedAt: new Date().toISOString(),
  },
  // In progress
  {
    id: 6,
    title: 'Add drag and drop functionality to board',
    type: IssueType.STORY,
    status: IssueStatus.INPROGRESS,
    priority: IssuePriority.HIGHEST,
    listPosition: 1,
    description: 'Implement react-beautiful-dnd for kanban',
    userIds: [2, 1],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 7,
    title: 'Critical: Fix memory leak in issue list',
    type: IssueType.BUG,
    status: IssueStatus.INPROGRESS,
    priority: IssuePriority.HIGHEST,
    listPosition: 2,
    description: 'Component not cleaning up subscriptions',
    userIds: [4],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 8,
    title: 'Implement issue filtering logic',
    type: IssueType.TASK,
    status: IssueStatus.INPROGRESS,
    priority: IssuePriority.MEDIUM,
    listPosition: 3,
    description: 'Filter by assignee, type, and search term',
    userIds: [1, 3],
    updatedAt: new Date().toISOString(),
  },
  // Done
  {
    id: 9,
    title: 'Create project board header component',
    type: IssueType.TASK,
    status: IssueStatus.DONE,
    priority: IssuePriority.MEDIUM,
    listPosition: 1,
    description: 'Header with title and filters',
    userIds: [2],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 10,
    title: 'Set up Storybook for component development',
    type: IssueType.TASK,
    status: IssueStatus.DONE,
    priority: IssuePriority.LOW,
    listPosition: 2,
    description: 'Configure Storybook with webpack',
    userIds: [1, 4],
    updatedAt: new Date().toISOString(),
  },
  {
    id: 11,
    title: 'Initial project setup and boilerplate',
    type: IssueType.STORY,
    status: IssueStatus.DONE,
    priority: IssuePriority.LOWEST,
    listPosition: 3,
    description: 'Initial CRA setup with custom config',
    userIds: [2, 3],
    updatedAt: new Date().toISOString(),
  },
];

// Complete project object containing users and issues
const mockProject = {
  id: 1,
  name: 'Singularity Project',
  url: 'https://www.atlassian.com/software/jira',
  description: 'A Jira clone for project management',
  category: 'software',
  users: mockUsers,
  issues: mockIssues,
};

// Initialize current user ID for stories
// The useCurrentUser hook checks window.__CURRENT_USER_ID__ to determine the logged-in user
const initCurrentUserCache = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-underscore-dangle
    window.__CURRENT_USER_ID__ = 1;
  }
};

// Wraps stories with React Router context and initializes the current user
// Required because ProjectBoard uses routing and the useCurrentUser hook
const withRouter = Story => {
  initCurrentUserCache();
  return (
    <MemoryRouter initialEntries={['/project/board']}>
      <Route path="/project/board">
        <Story />
      </Route>
    </MemoryRouter>
  );
};

export const Default = {
  args: {
    project: mockProject,
    fetchProject: () => Promise.resolve(),
    // Mock update handler - in real usage, this would update the backend and local state
    updateLocalProjectIssues: () => {},
  },
  decorators: [withRouter],
};

export const EmptyBoard = {
  args: {
    project: {
      ...mockProject,
      issues: [],
    },
    fetchProject: () => Promise.resolve(),
    updateLocalProjectIssues: () => {},
  },
  decorators: [withRouter],
};

export const SingleColumnPopulated = {
  args: {
    project: {
      ...mockProject,
      issues: mockIssues.filter(issue => issue.status === IssueStatus.INPROGRESS),
    },
    fetchProject: () => Promise.resolve(),
    updateLocalProjectIssues: () => {},
  },
  decorators: [withRouter],
};
