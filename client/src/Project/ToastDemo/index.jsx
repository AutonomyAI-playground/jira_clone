import React from 'react';

import toast from 'shared/utils/toast';
import { Button } from 'shared/components';
import WizardRobotSVG from './WizardRobot';

import {
  ToastDemo,
  Container,
  Header,
  Title,
  Subtitle,
  WizardRobotWrapper,
  OvalFrame,
  ButtonGrid,
  ButtonSection,
  SectionTitle,
  ButtonWrapper,
} from './Styles';

// Standard duration for custom toast notifications (5 seconds)
const DEFAULT_TOAST_DURATION = 5;

// Staggered delay timing for sequential toast demonstrations
const TOAST_SEQUENCE_DELAYS = {
  SECOND: 500,
  THIRD: 1000,
};

const ProjectToastDemo = () => {
  // Basic toast handlers - use simplified API for common cases
  const handleSuccessToast = () => {
    toast.success('Success! Magic is working!');
  };

  const handleErrorToast = () => {
    toast.error('Oops! Something went wrong with the spell.');
  };

  // Custom toast handlers - demonstrate full API with title, message, and duration
  const handleCustomSuccessToast = () => {
    toast.show({
      type: 'success',
      title: '✨ Spell Cast Successfully!',
      message: 'Your magic spell has been cast and is now taking effect.',
      duration: DEFAULT_TOAST_DURATION,
    });
  };

  const handleCustomWarningToast = () => {
    toast.show({
      type: 'warning',
      title: '⚠️ Low Mana Warning',
      message: 'Your mana is running low. Please recharge soon.',
      duration: DEFAULT_TOAST_DURATION,
    });
  };

  const handleCustomDangerToast = () => {
    toast.show({
      type: 'danger',
      title: '🔥 Critical Error',
      message: 'The spell backfired! System needs immediate attention.',
      duration: DEFAULT_TOAST_DURATION,
    });
  };

  const handleCustomPrimaryToast = () => {
    toast.show({
      type: 'primary',
      title: '🎩 Wizard Notification',
      message: 'You have received a message from the wizard council.',
      duration: DEFAULT_TOAST_DURATION,
    });
  };

  // Persistent toast - duration: 0 means user must manually dismiss
  const handlePersistentToast = () => {
    toast.show({
      type: 'success',
      title: '📌 Persistent Toast',
      message: 'This toast will stay until you click it (duration: 0)',
      duration: 0,
    });
  };

  // Multiple sequential toasts - demonstrates stacking behavior
  const handleMultipleToasts = () => {
    toast.show({
      type: 'primary',
      title: '1️⃣ First Toast',
      message: 'First notification',
      duration: DEFAULT_TOAST_DURATION,
    });
    setTimeout(() => {
      toast.show({
        type: 'success',
        title: '2️⃣ Second Toast',
        message: 'Second notification',
        duration: DEFAULT_TOAST_DURATION,
      });
    }, TOAST_SEQUENCE_DELAYS.SECOND);
    setTimeout(() => {
      toast.show({
        type: 'warning',
        title: '3️⃣ Third Toast',
        message: 'Third notification',
        duration: DEFAULT_TOAST_DURATION,
      });
    }, TOAST_SEQUENCE_DELAYS.THIRD);
  };

  return (
    <ToastDemo>
      <Container>
        <Header>
          <WizardRobotWrapper>
            <OvalFrame>
              <WizardRobotSVG size={280} />
            </OvalFrame>
          </WizardRobotWrapper>
          <Title>Toast Notification Wizard</Title>
          <Subtitle>Cast spells to trigger magical toast notifications</Subtitle>
        </Header>

        <ButtonGrid>
          <ButtonSection>
            <SectionTitle>Basic Toasts</SectionTitle>
            <ButtonWrapper>
              <Button variant="success" onClick={handleSuccessToast}>
                Success Toast
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button variant="danger" onClick={handleErrorToast}>
                Error Toast
              </Button>
            </ButtonWrapper>
          </ButtonSection>

          <ButtonSection>
            <SectionTitle>Custom Toasts with Messages</SectionTitle>
            <ButtonWrapper>
              <Button variant="success" onClick={handleCustomSuccessToast}>
                Success with Message
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button variant="secondary" onClick={handleCustomWarningToast}>
                Warning Toast
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button variant="danger" onClick={handleCustomDangerToast}>
                Danger Toast
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button variant="primary" onClick={handleCustomPrimaryToast}>
                Primary Toast
              </Button>
            </ButtonWrapper>
          </ButtonSection>

          <ButtonSection>
            <SectionTitle>Special Behaviors</SectionTitle>
            <ButtonWrapper>
              <Button variant="primary" onClick={handlePersistentToast}>
                Persistent Toast (Click to Close)
              </Button>
            </ButtonWrapper>
            <ButtonWrapper>
              <Button variant="secondary" onClick={handleMultipleToasts}>
                Multiple Toasts Sequence
              </Button>
            </ButtonWrapper>
          </ButtonSection>
        </ButtonGrid>
      </Container>
    </ToastDemo>
  );
};

export default ProjectToastDemo;
