import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div
        style={{
          minHeight: '350px',
          width: '100%',
          position: 'relative',
          background: '#f4f5f7',
        }}
      >
        <Story />
      </div>
    ),
  ],
};

// Helper component that triggers a toast notification on mount
// This simulates the toast trigger that would happen from user actions in the app
const ToastWithTrigger = ({ type, title, message, duration }) => {
  useEffect(() => {
    pubsub.emit('toast', { type, title, message, duration });
  }, [type, title, message, duration]);

  return <Toast />;
};

export const Success = {
  render: () => (
    <ToastWithTrigger
      type="success"
      title="Changes saved successfully"
      message="Your changes have been saved and will take effect immediately."
      duration={0}
    />
  ),
};

export const Error = {
  render: () => (
    <ToastWithTrigger
      type="danger"
      title="Error occurred"
      message="Something went wrong. Please try again later."
      duration={0}
    />
  ),
};

export const Warning = {
  render: () => (
    <ToastWithTrigger
      type="warning"
      title="Warning"
      message="This action cannot be undone."
      duration={0}
    />
  ),
};

export const Info = {
  render: () => (
    <ToastWithTrigger
      type="primary"
      title="Information"
      message="Here's some helpful information for you."
      duration={0}
    />
  ),
};

// Demonstrates the toast stacking behavior when multiple notifications are triggered
const MultipleToastsDemo = () => {
  useEffect(() => {
    // Trigger multiple toasts with slight delays to show stacking
    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Task created',
        message: 'New task has been added to backlog.',
        duration: 0,
      });
    }, 100);

    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'warning',
        title: 'Low priority',
        message: 'Consider reviewing old tasks.',
        duration: 0,
      });
    }, 200);

    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'danger',
        title: 'Connection lost',
        message: 'Reconnecting...',
        duration: 0,
      });
    }, 300);
  }, []);

  return <Toast />;
};

export const MultipleToasts = {
  render: () => <MultipleToastsDemo />,
};
