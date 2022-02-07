import { GET_REVIEWS } from '../actionTypes/reviewsAT';

const initialState = {
  reviews: [],
};

export const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload,
      };
    default:
      return state;
  }
};
