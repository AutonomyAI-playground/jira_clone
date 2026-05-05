import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import pubsub from 'sweet-pubsub';
import { uniqueId } from 'lodash';

import {
  Container,
  StyledToast,
  CloseIcon,
  Title,
  Message,
  AvatarImage,
  ContentWrapper,
} from './Styles';

const Toast = () => {
  const [toasts, setToasts] = useState([]);

  const removeToast = id => {
    setToasts(currentToasts => currentToasts.filter(toast => toast.id !== id));
  };

  useEffect(() => {
    const addToast = ({ type = 'success', title, message, duration = 5, avatarUrl }) => {
      const id = uniqueId('toast-');

      setToasts(currentToasts => [...currentToasts, { id, type, title, message, avatarUrl }]);

      // Auto-dismiss toast after duration (0 = persist until manual close)
      if (duration) {
        setTimeout(() => removeToast(id), duration * 1000);
      }
    };

    pubsub.on('toast', addToast);

    return () => {
      pubsub.off('toast', addToast);
    };
  }, []);

  return (
    <Container>
      <TransitionGroup>
        {toasts.map(toast => (
          <CSSTransition key={toast.id} classNames="jira-toast" timeout={200}>
            <StyledToast key={toast.id} type={toast.type} onClick={() => removeToast(toast.id)}>
              <CloseIcon type="close" />
              {toast.avatarUrl && <AvatarImage src={toast.avatarUrl} alt="Avatar" />}
              <ContentWrapper>
                {toast.title && <Title>{toast.title}</Title>}
                {toast.message && <Message>{toast.message}</Message>}
              </ContentWrapper>
            </StyledToast>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </Container>
  );
};

export default Toast;
