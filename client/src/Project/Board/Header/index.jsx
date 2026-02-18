import React from 'react';

import { Button } from 'shared/components';

import { Header, BoardName, HeaderActions } from './Styles';

const ProjectBoardHeader = () => (
  <Header>
    <BoardName>Kanban board</BoardName>
    <HeaderActions>
      <Button icon="link" variant="empty">
        Share
      </Button>
      <a href="https://github.com/oldboyxx/jira_clone" target="_blank" rel="noreferrer noopener">
        <Button icon="github">Github Repo</Button>
      </a>
    </HeaderActions>
  </Header>
);

export default ProjectBoardHeader;
