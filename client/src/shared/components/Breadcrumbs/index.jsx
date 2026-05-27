import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Container, Divider, LastItem } from './Styles';

const propTypes = {
  items: PropTypes.array.isRequired,
};

const Breadcrumbs = ({ items }) => (
  <Container>
    {items.map((item, index) => (
      <Fragment key={item}>
        {index !== 0 && <Divider>/</Divider>}
        {index === items.length - 1 ? <LastItem>{item}</LastItem> : item}
      </Fragment>
    ))}
  </Container>
);

Breadcrumbs.propTypes = propTypes;

export default Breadcrumbs;
