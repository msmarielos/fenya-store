import {
  ADD_ITEM,
  INIT_CURRENT_ITEM,
  INIT_ITEMS,
} from '../actionTypes/itemsAT';
const initialState = { items: [], currentItem: {} };

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const newItem = action.payload;

      return {
        ...state,
        items: state.items ? [...state.items, newItem] : [newItem],
      };

    case INIT_ITEMS:
      return { ...state, items: action.payload };

    case INIT_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};
