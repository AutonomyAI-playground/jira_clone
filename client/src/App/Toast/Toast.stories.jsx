import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

/**
 * Helper component that triggers a toast notification via pubsub on mount.
 * Used in stories to demonstrate different toast variants without user interaction.
 * Duration is set to 0 to prevent auto-dismissal in Storybook.
 */
const ToastTrigger = ({ type = 'success', title, message }) => {
  useEffect(() => {
    pubsub.emit('toast', { type, title, message, duration: 0 });
  }, [type, title, message]);

  return null;
};

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    // Render the Toast container and provide sufficient space for display
    Story => (
      <div style={{ minHeight: '200px', position: 'relative' }}>
        <Toast />
        <Story />
      </div>
    ),
  ],
};

export const Success = {
  render: () => <ToastTrigger type="success" title="Issue has been successfully created." />,
};

export const SuccessWithMessage = {
  render: () => (
    <ToastTrigger
      type="success"
      title="Changes saved"
      message="Your project settings have been updated successfully."
    />
  ),
};

export const Error = {
  render: () => <ToastTrigger type="danger" title="Something went wrong" />,
};

export const ErrorWithMessage = {
  render: () => (
    <ToastTrigger
      type="danger"
      title="Failed to save changes"
      message="Please check your connection and try again."
    />
  ),
};

export const MultipleToasts = {
  render: () => (
    <React.Fragment>
      <ToastTrigger type="success" title="Issue has been created" />
      <ToastTrigger type="danger" title="Connection error" message="Unable to reach the server." />
      <ToastTrigger type="success" title="Changes saved successfully" />
    </React.Fragment>
  ),
};
