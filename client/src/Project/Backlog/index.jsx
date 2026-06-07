import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import useMergeState from 'shared/hooks/mergeState';
import { Breadcrumbs, Modal } from 'shared/components';

import IssueDetails from '../Board/IssueDetails';
import Header from './Header';
import Filters from './Filters';
import IssueList from './IssueList';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const defaultFilters = {
  searchTerm: '',
  userIds: [],
  myOnly: false,
  recent: false,
};

const defaultSortConfig = {
  field: 'listPosition',
  direction: 'asc',
};

const Backlog = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const match = useRouteMatch();
  const history = useHistory();

  const [filters, mergeFilters] = useMergeState(defaultFilters);
  const [sortConfig, setSortConfig] = useMergeState(defaultSortConfig);

  // Toggle sort direction when clicking the same field, otherwise reset to ascending
  const handleSort = field => {
    if (sortConfig.field === field) {
      setSortConfig({ direction: sortConfig.direction === 'asc' ? 'desc' : 'asc' });
    } else {
      setSortConfig({ field, direction: 'asc' });
    }
  };

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Backlog']} />
      <Header issueCount={project.issues.length} />
      <Filters
        projectUsers={project.users}
        defaultFilters={defaultFilters}
        filters={filters}
        mergeFilters={mergeFilters}
      />
      <IssueList
        project={project}
        filters={filters}
        sortConfig={sortConfig}
        updateLocalProjectIssues={updateLocalProjectIssues}
        onSort={handleSort}
      />
      <Route
        path={`${match.path}/issues/:issueId`}
        render={routeProps => (
          <Modal
            isOpen
            testid="modal:issue-details"
            width={1040}
            withCloseIcon={false}
            onClose={() => history.push(match.url)}
            renderContent={modal => (
              <IssueDetails
                issueId={routeProps.match.params.issueId}
                projectUsers={project.users}
                fetchProject={fetchProject}
                updateLocalProjectIssues={updateLocalProjectIssues}
                modalClose={modal.close}
              />
            )}
          />
        )}
      />
    </Fragment>
  );
};

Backlog.propTypes = propTypes;

export default Backlog;
