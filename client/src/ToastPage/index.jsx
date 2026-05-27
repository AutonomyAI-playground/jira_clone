import React, { useState } from 'react';

import toast from 'shared/utils/toast';
import { Button, Input, Select } from 'shared/components';

import {
  PageContainer,
  PageTitle,
  Section,
  SectionTitle,
  ButtonRow,
  FormGroup,
  Label,
  Description,
  SelectWrapper,
} from './Styles';

const TOAST_TYPE_OPTIONS = [
  { value: 'success', label: 'Success' },
  { value: 'danger', label: 'Danger' },
  { value: 'warning', label: 'Warning' },
  { value: 'primary', label: 'Primary' },
];

// Preset toast configurations for demonstration
const PRESET_TOASTS = [
  {
    variant: 'success',
    type: 'success',
    title: 'Success!',
    message: 'Operation completed successfully',
    label: 'Success Toast',
  },
  {
    variant: 'danger',
    type: 'danger',
    title: 'Error!',
    message: 'Something went wrong',
    label: 'Error Toast',
  },
  {
    variant: 'secondary',
    type: 'warning',
    title: 'Warning!',
    message: 'Please review your action',
    label: 'Warning Toast',
  },
  {
    variant: 'primary',
    type: 'primary',
    title: 'Info',
    message: 'Here is some information',
    label: 'Primary Toast',
  },
];

const DEFAULT_TOAST_DURATION = 5;
const NO_AUTO_DISMISS = 0;

const ToastPage = () => {
  const [customType, setCustomType] = useState('success');
  const [customTitle, setCustomTitle] = useState('');
  const [customMessage, setCustomMessage] = useState('');
  const [customDuration, setCustomDuration] = useState('5');

  const handleShowPreset = (type, title, message) => {
    toast.show({
      type,
      title,
      message,
      duration: DEFAULT_TOAST_DURATION,
    });
  };

  const handleShowCustom = () => {
    // Parse duration: 0 means no auto-dismiss, invalid values default to 5 seconds
    const parsedDuration = parseInt(customDuration, 10);
    const duration =
      customDuration === '0' ? NO_AUTO_DISMISS : parsedDuration || DEFAULT_TOAST_DURATION;

    toast.show({
      type: customType,
      title: customTitle || 'Custom Toast',
      message: customMessage || undefined,
      duration,
    });
  };

  return (
    <PageContainer>
      <PageTitle>Toast Notification System</PageTitle>

      <Section>
        <SectionTitle>Preset Toasts</SectionTitle>
        <Description>
          Click a button to trigger a toast notification with preset content.
        </Description>
        <ButtonRow>
          {PRESET_TOASTS.map(({ variant, type, title, message, label }) => (
            <Button
              key={type}
              variant={variant}
              onClick={() => handleShowPreset(type, title, message)}
            >
              {label}
            </Button>
          ))}
        </ButtonRow>
      </Section>

      <Section>
        <SectionTitle>Custom Toast Builder</SectionTitle>
        <Description>
          Customize the toast notification type, title, message, and duration before triggering it.
        </Description>

        <SelectWrapper>
          <Label htmlFor="toast-type">Toast Type</Label>
          <Select
            name="toast-type"
            value={customType}
            options={TOAST_TYPE_OPTIONS}
            onChange={setCustomType}
          />
        </SelectWrapper>

        <FormGroup>
          <Label htmlFor="toast-title">Title</Label>
          <Input
            id="toast-title"
            value={customTitle}
            onChange={setCustomTitle}
            placeholder="Enter toast title"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="toast-message">Message (optional)</Label>
          <Input
            id="toast-message"
            value={customMessage}
            onChange={setCustomMessage}
            placeholder="Enter toast message"
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="toast-duration">Duration (seconds, 0 = no auto-dismiss)</Label>
          <Input
            id="toast-duration"
            value={customDuration}
            onChange={setCustomDuration}
            placeholder="5"
          />
        </FormGroup>

        <Button variant="primary" onClick={handleShowCustom}>
          Show Custom Toast
        </Button>
      </Section>
    </PageContainer>
  );
};

export default ToastPage;
