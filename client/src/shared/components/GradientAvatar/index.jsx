import React from 'react';
import PropTypes from 'prop-types';

import { Container, InnerCircle, Image } from './Styles';

const propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  size: PropTypes.number,
  borderWidth: PropTypes.number,
};

const defaultProps = {
  className: undefined,
  size: 500,
  borderWidth: 10,
};

const GradientAvatar = ({ className, imageUrl, size, borderWidth, ...otherProps }) => (
  <Container className={className} size={size} data-testid="gradient-avatar" {...otherProps}>
    <InnerCircle size={size} borderWidth={borderWidth}>
      <Image imageUrl={imageUrl} />
    </InnerCircle>
  </Container>
);

GradientAvatar.propTypes = propTypes;
GradientAvatar.defaultProps = defaultProps;

export default GradientAvatar;
