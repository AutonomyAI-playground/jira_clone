import React from 'react';
import PropTypes from 'prop-types';

import { Header, Title, IssueCount } from './Styles';

const propTypes = {
  issueCount: PropTypes.number.isRequired,
};

const BacklogHeader = ({ issueCount }) => (
  <Header>
    <Title>
      Backlog <IssueCount>{issueCount}</IssueCount>
    </Title>
  </Header>
);

BacklogHeader.propTypes = propTypes;

export default BacklogHeader;
