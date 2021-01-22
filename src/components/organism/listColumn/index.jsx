import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './listColumn.css';
import Task from '../task';

import { deleteColumn } from '../../../redux/Columns/columnAction';
import Button from '../../atom/button';
import EditButton from '../../atom/editButton';

const ListColumn = () => {
  const issues = useSelector((state) => state.issues.allIssues);
  const columns = useSelector((state) => state.listColumn.allListColumns);
  const dispatch = useDispatch();
  const issuesIds = useSelector((state) => state.issues.idArray);
  console.log('ListColumn -> issuesIds', issuesIds);

  const delCol = (id) => {
    dispatch(deleteColumn(id));
  };

  return (
    <div>
      <div className="listColumn">
        {columns.map((column) => {
          return (
            <div className="list">
              <EditButton
                onClick={() => delCol(column.value)}
                value="delete column"
              />
              <h2>{column.name}</h2>

              {issues
                .filter((issue) => {
                  return (
                    issue.listColumn.value === column.value &&
                    (issuesIds.length === 0 ||
                      issuesIds.includes(issue.assignee.value))
                  );
                })
                .map((issue) => (
                  <Task
                    assignee={issue.assignee.name}
                    src={issue.assignee.avatarImageUrl}
                    title={issue.title}
                    description={issue.description}
                    issueType={issue.issueType.name}
                    priority={issue.priority.name}
                    index={issue.id}
                    key=""
                  />
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ListColumn;
