import { CREATE_USER, LOGIN_USER, LOGOUT_USER } from '../actionTypes/userAT';

export const createUserAC = payload => {
  return {
    type: CREATE_USER,
    payload,
  };
};

export const loginUserAC = payload => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const logoutUserAC = payload => {
  return {
    type: LOGOUT_USER,
    payload,
  };
};
