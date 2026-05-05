import React, { useEffect } from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * Helper component that triggers a toast notification on mount.
 * Used to demonstrate toast behavior in Storybook stories.
 */
const ToastTrigger = ({ type, title, message, duration = 0 }) => {
  useEffect(() => {
    // Small delay ensures Toast component is mounted before emitting event
    const timer = setTimeout(() => {
      pubsub.emit('toast', { type, title, message, duration });
    }, 100);
    return () => clearTimeout(timer);
  }, [type, title, message, duration]);

  return null;
};

export const Success = {
  render: () => (
    <React.Fragment>
      <Toast />
      <ToastTrigger
        type="success"
        title="Success!"
        message="Your changes have been saved successfully."
        duration={0}
      />
    </React.Fragment>
  ),
};

export const Danger = {
  render: () => (
    <React.Fragment>
      <Toast />
      <ToastTrigger
        type="danger"
        title="Error"
        message="Something went wrong. Please try again."
        duration={0}
      />
    </React.Fragment>
  ),
};

export const Warning = {
  render: () => (
    <React.Fragment>
      <Toast />
      <ToastTrigger
        type="warning"
        title="Warning"
        message="This action cannot be undone."
        duration={0}
      />
    </React.Fragment>
  ),
};

export const Primary = {
  render: () => (
    <React.Fragment>
      <Toast />
      <ToastTrigger
        type="primary"
        title="Info"
        message="New updates are available for download."
        duration={0}
      />
    </React.Fragment>
  ),
};

export const TitleOnly = {
  render: () => (
    <React.Fragment>
      <Toast />
      <ToastTrigger type="success" title="Issue created successfully" duration={0} />
    </React.Fragment>
  ),
};

export const MessageOnly = {
  render: () => (
    <React.Fragment>
      <Toast />
      <ToastTrigger
        type="danger"
        message="Failed to load project data. Please refresh the page."
        duration={0}
      />
    </React.Fragment>
  ),
};

export const MultipleToasts = {
  render: () => {
    const MultiToastTrigger = () => {
      useEffect(() => {
        // Stagger toast emissions to demonstrate stacking behavior
        const timers = [
          setTimeout(() => {
            pubsub.emit('toast', {
              type: 'success',
              title: 'First Toast',
              message: 'This is the first notification',
              duration: 0,
            });
          }, 100),
          setTimeout(() => {
            pubsub.emit('toast', {
              type: 'warning',
              title: 'Second Toast',
              message: 'This is the second notification',
              duration: 0,
            });
          }, 200),
          setTimeout(() => {
            pubsub.emit('toast', {
              type: 'danger',
              title: 'Third Toast',
              message: 'This is the third notification',
              duration: 0,
            });
          }, 300),
        ];

        return () => timers.forEach(clearTimeout);
      }, []);

      return null;
    };

    return (
      <React.Fragment>
        <Toast />
        <MultiToastTrigger />
      </React.Fragment>
    );
  },
};
