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

// Helper component to trigger toast on mount
const ToastTrigger = ({ toastConfig }) => {
  useEffect(() => {
    // Small delay to ensure Toast component is mounted
    const timer = setTimeout(() => {
      pubsub.emit('toast', toastConfig);
    }, 100);
    return () => clearTimeout(timer);
  }, [toastConfig]);

  return <Toast />;
};

export const Success = {
  render: () => (
    <ToastTrigger
      toastConfig={{
        type: 'success',
        title: 'Success!',
        message: 'Your changes have been saved successfully.',
        duration: 0,
      }}
    />
  ),
};

export const Error = {
  render: () => (
    <ToastTrigger
      toastConfig={{
        type: 'danger',
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        duration: 0,
      }}
    />
  ),
};

export const Warning = {
  render: () => (
    <ToastTrigger
      toastConfig={{
        type: 'warning',
        title: 'Warning',
        message: 'Please review your input before proceeding.',
        duration: 0,
      }}
    />
  ),
};

export const WithAvatar = {
  render: () => (
    <ToastTrigger
      toastConfig={{
        type: 'success',
        title: 'Welcome!',
        message: 'You have successfully logged in.',
        avatarUrl: 'https://i.pravatar.cc/150?img=1',
        duration: 0,
      }}
    />
  ),
};

export const LongMessage = {
  render: () => (
    <ToastTrigger
      toastConfig={{
        type: 'primary',
        title: 'Important Notice',
        message:
          'This is a longer message to demonstrate how the toast handles extended text content. It should wrap nicely within the toast container.',
        duration: 0,
      }}
    />
  ),
};
