import { SET_USER } from "../actions/actionType";

const initState = {
  user: null,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default userReducer;
