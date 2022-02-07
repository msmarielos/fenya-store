import { GET_REVIEWS } from '../actionTypes/reviewsAT';

export const initListsAC = payload => {
  return {
    type: GET_REVIEWS,
    payload,
  };
};
