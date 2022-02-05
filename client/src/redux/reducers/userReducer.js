import { CREATE_USER, LOGIN_USER } from '../actionTypes/userAT';

const initialState = { user: [] };

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_USER:
      const newUser = {
        name: action.payload.name,
        email: action.payload.email,
        phone: action.payload.phone,
      };

      return {
        ...state,
        user: state.user ? [...state.user, newUser] : [newUser],
      };

    case LOGIN_USER:
      const user = {
        email: action.payload.email,
      };

      return {
        ...state,
        user: state.user ? [...state.user, user] : [user],
      };

    default:
      return state;
  }
};
