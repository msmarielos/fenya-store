import { CREATE_USER } from '../actionTypes/userAT';

export const createUserAC = payload => {
  return {
    type: CREATE_USER,
    payload,
  };
};
