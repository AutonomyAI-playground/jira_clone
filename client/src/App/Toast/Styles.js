import styled from 'styled-components';

import { color, font, mixin, zIndexValues } from 'shared/utils/styles';
import { Icon } from 'shared/components';

export const Container = styled.div`
  z-index: ${zIndexValues.modal + 1};
  position: fixed;
  right: 30px;
  top: 50px;
`;

export const StyledToast = styled.div`
  position: relative;
  margin-bottom: 5px;
  min-width: 300px;
  max-width: 400px;
  padding: 15px 20px;
  border-radius: 8px;
  color: #fff;
  background: ${props => color[props.type]};
  cursor: pointer;
  transition: all 0.15s;
  display: flex;
  align-items: center; /* Vertically center avatar with content */
  ${mixin.hardwareAccelerate}

  &.jira-toast-enter,
  &.jira-toast-exit.jira-toast-exit-active {
    opacity: 0;
    right: -10px;
  }

  &.jira-toast-exit,
  &.jira-toast-enter.jira-toast-enter-active {
    opacity: 1;
    right: 0;
  }
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  color: #fff;
`;

export const Title = styled.div`
  padding-right: 22px;
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding: 8px 22px 0 0;
  white-space: pre-wrap;
  ${font.size(14)}
  ${font.medium}
`;

export const AvatarImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
  flex-shrink: 0; /* Prevent avatar from shrinking when text is long */
  border: 3px solid rgba(255, 255, 255, 0.3);
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;
