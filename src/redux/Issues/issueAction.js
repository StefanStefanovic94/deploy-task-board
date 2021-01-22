import ACTIONS from '../../constans/ACTIONS';

const addIssueToList = (newIssue) => {
  return {
    type: ACTIONS.ADD_ISSUE_TO_LIST,
    issue: newIssue,
  };
};
const editIssue = (newIssue) => {
  return {
    type: ACTIONS.EDIT_ISSUE,
    editIssue: newIssue,
  };
};
const deleteTaskItem = (id) => {
  return {
    type: ACTIONS.DELETE_ISSUE,
    deletedIssueId: id,
  };
};
const addUserTask = (id) => {
  return {
    type: ACTIONS.TOGGLE_USER_TASK,
    value: id
  }
}

export { addIssueToList, editIssue, deleteTaskItem, addUserTask };
