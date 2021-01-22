import ACTIONS from '../../constans/ACTIONS';

const initialState = {
  allIssues: [],
  idArray: []
};
export default function issueReducer(state = initialState, action) {
  let id;
  const newAllIssues = [...state.allIssues];

  const index = action.deletedIssueId;
  const newArr = [...state.allIssues];
  newArr.splice(index, 1);

  switch (action.type) {
    case ACTIONS.ADD_ISSUE_TO_LIST:
      return {
        ...state,
        allIssues: [
          ...state.allIssues,
          { ...action.issue, id: state.allIssues.length },
        ],
      };

    case ACTIONS.EDIT_ISSUE:
      id = action.editIssue.id;
      newAllIssues[id] = { ...newAllIssues[id], ...action.editIssue };
      return {
        ...state,
        allIssues: newAllIssues,
      };

    case ACTIONS.DELETE_ISSUE:
      return {
        ...state,
        allIssues: newArr.map((elem, i) => {
          if (i >= index) {
            return {
              ...elem,
              id: elem.id - 1,
            };
          }
          return elem;
        }),
      };

    case ACTIONS.TOGGLE_USER_TASK:
      const value = action.value
      let newArray = [...state.idArray]

      const hasValue = newArray.find(id => id === value)
      
      if (typeof hasValue != "undefined") {
        newArray = newArray.filter(id => id !== value)
      } else {
        newArray.push(value)
      }

      return {

        ...state,
        idArray: newArray,
      };


    default:
      return state;
  }
}






// const filteredTask = allIssues.filter((issue) => {
//   return issue.assignee.value.includes(newArr)
// })