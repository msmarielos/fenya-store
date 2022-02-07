import { CREATE_REVIEW, GET_REVIEWS } from '../actionTypes/reviewsAT';

export const initReviewsAC = payload => {
  return {
    type: GET_REVIEWS,
    payload,
  };
};

export const createReviewAC = payload => {
  return {
    type: CREATE_REVIEW,
    payload,
  };
};
