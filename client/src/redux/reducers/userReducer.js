import { CREATE_USER, LOGIN_USER, INIT_USER_ORDER, INIT_USER_ANIMALS  } from '../actionTypes/userAT';

const initialState = { user: [], userItems: [], userAnimals: [] };

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
      return { ...state, user: state.user };

    case INIT_USER_ORDER:
      return { ...state, userItems: action.payload };

    case INIT_USER_ANIMALS:
      return { ...state, userAnimals: action.payload };

    default:
      return state;
  }
};
