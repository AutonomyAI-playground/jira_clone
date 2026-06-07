import React, { Fragment } from 'react';

import { Breadcrumbs } from 'shared/components';

import Lists from './Lists';
import { Container, Header, Title } from './Styles';

/**
 * Board page component displaying kanban-style issue lists.
 *
 * Shows issues organized by status (Backlog, Selected, In Progress, Done)
 * with drag-and-drop functionality for moving issues between lists.
 */
const Board = () => {
  return (
    <Fragment>
      <Breadcrumbs items={['Board']} />
      <Container>
        <Header>
          <Title>Board</Title>
        </Header>
        <Lists />
      </Container>
    </Fragment>
  );
};

export default Board;
