import { GET_REVIEWS } from '../actionTypes/reviewsAT';

export const initReviewsAC = payload => {
  return {
    type: GET_REVIEWS,
    payload,
  };
};
