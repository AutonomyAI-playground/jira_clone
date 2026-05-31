import React from 'react';
import pubsub from 'sweet-pubsub';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

// Extended duration for stories to prevent auto-dismissal during review
const STORY_TOAST_DURATION = 60;

// Shared button styling for interactive demos
const getButtonStyle = backgroundColor => ({
  padding: '10px 20px',
  fontSize: '14px',
  cursor: 'pointer',
  backgroundColor,
  color: 'white',
  border: 'none',
  borderRadius: '3px',
});

const SuccessToastDemo = () => {
  React.useEffect(() => {
    pubsub.emit('toast', {
      type: 'success',
      title: 'Changes saved successfully',
      duration: STORY_TOAST_DURATION,
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const Success = {
  render: () => <SuccessToastDemo />,
  parameters: {
    docs: {
      description: {
        story: 'A success toast notification that appears automatically.',
      },
    },
  },
};

const ErrorToastDemo = () => {
  React.useEffect(() => {
    pubsub.emit('toast', {
      type: 'danger',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
      duration: STORY_TOAST_DURATION,
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const Error = {
  render: () => <ErrorToastDemo />,
  parameters: {
    docs: {
      description: {
        story: 'An error toast notification with title and message.',
      },
    },
  },
};

const MultipleToastsDemo = () => {
  React.useEffect(() => {
    // Demonstrate toast stacking by triggering multiple toasts in sequence
    pubsub.emit('toast', {
      type: 'success',
      title: 'Issue created',
      duration: STORY_TOAST_DURATION,
    });
    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'success',
        title: 'Issue assigned to you',
        duration: STORY_TOAST_DURATION,
      });
    }, 200);
    setTimeout(() => {
      pubsub.emit('toast', {
        type: 'danger',
        title: 'Warning',
        message: 'Connection issues detected',
        duration: STORY_TOAST_DURATION,
      });
    }, 400);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const MultipleToasts = {
  render: () => <MultipleToastsDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Multiple toast notifications stacked together.',
      },
    },
  },
};

const InteractiveDemo = () => {
  const triggerSuccess = () => {
    pubsub.emit('toast', {
      type: 'success',
      title: 'Operation completed successfully!',
      duration: 5,
    });
  };

  const triggerError = () => {
    pubsub.emit('toast', {
      type: 'danger',
      title: 'Error',
      message: 'Failed to save changes. Please check your connection.',
      duration: 0, // Stays until manually dismissed
    });
  };

  const triggerWithMessage = () => {
    pubsub.emit('toast', {
      type: 'success',
      title: 'Issue Updated',
      message: 'The issue status has been changed to "In Progress"',
      duration: 5,
    });
  };

  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button type="button" onClick={triggerSuccess} style={getButtonStyle('#0052cc')}>
          Show Success Toast
        </button>
        <button type="button" onClick={triggerError} style={getButtonStyle('#de350b')}>
          Show Error Toast
        </button>
        <button type="button" onClick={triggerWithMessage} style={getButtonStyle('#00875a')}>
          Show Toast with Message
        </button>
      </div>
      <p style={{ color: '#5e6c84', fontSize: '14px' }}>
        Click the buttons above to trigger different toast notifications. Click on a toast to
        dismiss it.
      </p>
      <Toast />
    </div>
  );
};

export const Interactive = {
  render: () => <InteractiveDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Interactive demo with buttons to trigger different types of toasts.',
      },
    },
  },
};

const LongMessageDemo = () => {
  React.useEffect(() => {
    pubsub.emit('toast', {
      type: 'danger',
      title: 'Validation Error',
      message: 'The following fields are required:\n• Title\n• Description\n• Priority\n• Assignee',
      duration: STORY_TOAST_DURATION,
    });
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <Toast />
    </div>
  );
};

export const LongMessage = {
  render: () => <LongMessageDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Toast with a longer, multi-line message.',
      },
    },
  },
};
