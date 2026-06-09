import React from 'react';
import toast from 'shared/utils/toast';
import Toast from './index';

export default {
  title: 'App/Toast',
  component: Toast,
  parameters: {
    layout: 'fullscreen',
  },
};

// Shared styles for consistent button appearance across stories
const buttonBaseStyle = {
  padding: '10px 20px',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

const containerStyle = {
  padding: '20px',
};

const headingStyle = {
  marginBottom: '20px',
  fontFamily: 'sans-serif',
};

const buttonContainerStyle = {
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
};

/**
 * Interactive demo showing all toast variants.
 * Users can click buttons to trigger different toast types and see how they appear.
 */
export const Default = {
  render: () => (
    <div style={containerStyle}>
      <h3 style={headingStyle}>Click buttons to trigger toasts</h3>
      <div style={buttonContainerStyle}>
        <button
          type="button"
          onClick={() => toast.success('Changes saved successfully!')}
          style={{ ...buttonBaseStyle, backgroundColor: '#0052cc' }}
        >
          Success Toast
        </button>
        <button
          type="button"
          onClick={() => toast.error('Something went wrong. Please try again.')}
          style={{ ...buttonBaseStyle, backgroundColor: '#de350b' }}
        >
          Error Toast
        </button>
        <button
          type="button"
          onClick={() =>
            toast.show({
              type: 'warning',
              title: 'Warning',
              message: 'Your session will expire in 5 minutes.',
            })
          }
          style={{ ...buttonBaseStyle, backgroundColor: '#ff8b00' }}
        >
          Warning Toast
        </button>
        <button
          type="button"
          onClick={() =>
            toast.show({ type: 'primary', title: 'Info', message: 'New updates are available.' })
          }
          style={{ ...buttonBaseStyle, backgroundColor: '#6554c0' }}
        >
          Info Toast
        </button>
      </div>
    </div>
  ),
};

/**
 * Auto-triggered success toast for visual testing.
 * Duration set to 0 keeps the toast visible indefinitely for easier screenshot capture.
 */
const SuccessNotificationComponent = () => {
  React.useEffect(() => {
    toast.show({ type: 'success', title: 'Issue created successfully!', duration: 0 });
  }, []);
  return <div style={containerStyle}>Success toast appears automatically</div>;
};

export const SuccessNotification = {
  render: () => <SuccessNotificationComponent />,
};

/**
 * Auto-triggered error toast for visual testing.
 * Uses default duration since errors typically auto-dismiss.
 */
const ErrorNotificationComponent = () => {
  React.useEffect(() => {
    toast.error('Failed to save changes. Please check your connection and try again.');
  }, []);
  return <div style={containerStyle}>Error toast appears automatically</div>;
};

export const ErrorNotification = {
  render: () => <ErrorNotificationComponent />,
};

/**
 * Multiple stacked toasts to verify layout and z-index handling.
 * Staggered timing ensures they render in sequence, mimicking real usage.
 * Duration set to 0 keeps all toasts visible for testing the stacked appearance.
 */
const MultipleNotificationsComponent = () => {
  React.useEffect(() => {
    toast.show({ type: 'success', title: 'First notification', duration: 0 });
    setTimeout(
      () =>
        toast.show({
          type: 'primary',
          title: 'Second notification',
          message: 'With a message body',
          duration: 0,
        }),
      100,
    );
    setTimeout(
      () => toast.show({ type: 'warning', title: 'Third notification', duration: 0 }),
      200,
    );
  }, []);
  return <div style={containerStyle}>Multiple toasts stacked</div>;
};

export const MultipleNotifications = {
  render: () => <MultipleNotificationsComponent />,
};
