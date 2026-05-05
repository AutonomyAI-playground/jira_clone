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
  display: flex;
  align-items: flex-start;
  position: relative;
  margin-bottom: 5px;
  width: 350px;
  padding: 15px 20px;
  border-radius: 4px;
  /* Default red border with dynamic left border color based on toast type */
  border: 2px solid ${color.danger};
  border-left: 3px solid ${props => color[props.type]};
  color: ${color.textDarkest};
  background: #fff;
  cursor: pointer;
  transition: all 0.15s;
  ${mixin.boxShadowMedium}
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

// Left section contains the type icon
export const Left = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-right: 12px;
`;

// Circular icon container with background color matching toast type
export const TypeIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => color[props.type]};

  svg {
    width: 16px;
    height: 16px;
  }
`;

// Right section contains title, message, and close icon
export const Right = styled.div`
  flex: 1;
  min-width: 0; /* Prevents text overflow issues in flexbox */
`;

export const CloseIcon = styled(Icon)`
  position: absolute;
  top: 13px;
  right: 14px;
  font-size: 22px;
  cursor: pointer;
  color: ${color.textMedium};
`;

export const Title = styled.div`
  padding-right: 30px;
  color: ${color.textDarkest};
  ${font.size(15)}
  ${font.medium}
`;

export const Message = styled.div`
  padding: 8px 10px 0 0;
  white-space: pre-wrap;
  color: ${color.textDark};
  ${font.size(14)}
  ${font.medium}
`;
