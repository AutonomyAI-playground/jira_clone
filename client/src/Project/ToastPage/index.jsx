import React, { useState } from 'react';

import toast from 'shared/utils/toast';
import { Button, Input, Select, Textarea } from 'shared/components';

import {
  PageContainer,
  PageContent,
  PageTitle,
  PageDescription,
  Section,
  SectionTitle,
  ButtonsRow,
  FormGroup,
  Label,
  SubmitButton,
} from './Styles';

// Default toast duration in seconds (5s for transient, 0 for persistent)
const DEFAULT_TOAST_DURATION = 5;

const quickToasts = [
  {
    type: 'success',
    title: 'Success!',
    message: 'Operation completed successfully.',
    variant: 'success',
    label: 'Success',
  },
  {
    type: 'danger',
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    variant: 'danger',
    label: 'Error',
  },
  {
    type: 'warning',
    title: 'Warning',
    message: 'Please review before continuing.',
    variant: 'secondary',
    label: 'Warning',
  },
  {
    type: 'primary',
    title: 'Info',
    message: 'Here is some useful information.',
    variant: 'primary',
    label: 'Info',
  },
];

const typeOptions = [
  { value: 'success', label: 'Success' },
  { value: 'danger', label: 'Error / Danger' },
  { value: 'warning', label: 'Warning' },
  { value: 'primary', label: 'Info' },
];

/**
 * Interactive demo page for testing toast notification system.
 * Provides quick trigger buttons for common toast types and a builder
 * for creating custom toasts with configurable title, message, type, and duration.
 */
const ToastPage = () => {
  const [title, setTitle] = useState('Custom Toast Title');
  const [message, setMessage] = useState('This is a custom toast message.');
  const [type, setType] = useState('success');
  const [duration, setDuration] = useState('5');

  const handleQuickToast = toastConfig => {
    toast.show({
      type: toastConfig.type,
      title: toastConfig.title,
      message: toastConfig.message,
      duration: DEFAULT_TOAST_DURATION,
    });
  };

  const handleCustomToast = () => {
    // Parse duration input, falling back to default if invalid
    const parsedDuration = parseInt(duration, 10);
    const finalDuration = Number.isNaN(parsedDuration) ? DEFAULT_TOAST_DURATION : parsedDuration;

    toast.show({
      type,
      title,
      message,
      duration: finalDuration,
    });
  };

  return (
    <PageContainer>
      <PageContent>
        <PageTitle>Toast Notifications</PageTitle>
        <PageDescription>
          Explore different types of toast notifications. Try the quick triggers or build your own
          custom toast with configurable options.
        </PageDescription>

        <Section>
          <SectionTitle>Quick Triggers</SectionTitle>
          <ButtonsRow>
            {quickToasts.map(toastConfig => (
              <Button
                key={toastConfig.type}
                variant={toastConfig.variant}
                onClick={() => handleQuickToast(toastConfig)}
              >
                {toastConfig.label}
              </Button>
            ))}
          </ButtonsRow>
        </Section>

        <Section>
          <SectionTitle>Custom Toast Builder</SectionTitle>

          <FormGroup>
            <Label>Title</Label>
            <Input value={title} onChange={setTitle} placeholder="Toast title" />
          </FormGroup>

          <FormGroup>
            <Label>Message</Label>
            <Textarea value={message} onChange={setMessage} placeholder="Toast message body" />
          </FormGroup>

          <FormGroup>
            <Label>Type</Label>
            <Select value={type} onChange={setType} options={typeOptions} withClearValue={false} />
          </FormGroup>

          <FormGroup>
            <Label>Duration (seconds, 0 = persistent)</Label>
            <Input value={duration} onChange={setDuration} filter={/^\d{0,3}$/} placeholder="5" />
          </FormGroup>

          <SubmitButton variant="primary" onClick={handleCustomToast}>
            Show Toast
          </SubmitButton>
        </Section>
      </PageContent>
    </PageContainer>
  );
};

export default ToastPage;
