import {
  ADD_ITEM,
  INIT_CURRENT_ITEM,
  INIT_ITEMS,
  SORT_ITEMS_ASC,
  SORT_ITEMS_DESC,
  INIT_ITEM_LIST
} from '../actionTypes/itemsAT';
const initialState = { items: [], currentItem: {}, itemslist: [] };

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

    case INIT_ITEM_LIST:
      return { ...state, itemslist: action.payload };

    case INIT_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case SORT_ITEMS_ASC:
      return {
        ...state,
        items: state.items.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };

    case SORT_ITEMS_DESC:
      return {
        ...state,
        items: state.items.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    default:
      return state;
  }
};
