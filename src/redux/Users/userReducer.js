import ACTIONS from '../../constans/ACTIONS';

const initialState = {
  allUsers: [
    {
      name: 'Stefan Stefanovic',
      avatarImageUrl: 'https://avatars1.githubusercontent.com/u/60787166?s=400&u=522c714846394f4e9fdd67a013a8f6105cb2bfbe&v=4',
      value: 0,
    },
    {
      name: 'Pera Peric',
      avatarImageUrl:
        'https://pngimg.com/uploads/face/face_PNG5645.png',
      value: 1,
    },
    {
      name: 'Jovana Jovanovic',
      avatarImageUrl:
      'https://i.pinimg.com/736x/84/12/71/8412715b792dc8e26f384ce8d26e8304.jpg'
        ,
      value: 2,
    },
    {
      name: 'Milos Milosevic',
      avatarImageUrl:
        'https://images-na.ssl-images-amazon.com/images/I/61lcOwGHJOL._AC_UX385_.jpg',
      value: 3,
    },
  ],
};
export default function issueReducer(state = initialState, action) {
  const { index } = action;
  const newArr = [...state.allUsers];
  newArr.splice(index, 1);

  switch (action.type) {
    case ACTIONS.ADD_USER_TO_LIST:
      return {
        ...state,
        allUsers: [
          ...state.allUsers,
          {
            name: action.allUsers.name,
            value: state.allUsers.length,
            avatarImageUrl:action.allUsers.avatarImageUrl
          },
        ],
      };
    case ACTIONS.DELETE_USER:
      return {
        ...state,
        allUsers: newArr.map((elem, i) => {
          if (i >= index) {
            return {
              ...elem,
              value: elem.value - 1,
            };
          }
          return elem;
        }),
      };

    default:
      return state;
  }
}
