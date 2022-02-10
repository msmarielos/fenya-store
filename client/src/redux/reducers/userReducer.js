import { CREATE_USER, LOGIN_USER } from '../actionTypes/userAT';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) ?? null,
};

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
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
