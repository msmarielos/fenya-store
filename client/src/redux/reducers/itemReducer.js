import {
  ADD_ITEM,
  INIT_CURRENT_ITEM,
  INIT_ITEMS,
  SORT_ITEMS_ASC,
  SORT_ITEMS_DESC,
  INIT_ITEM_LIST,
  DELETE_ITEM,
  UPDATE_ITEM,
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

    case DELETE_ITEM:
      return {
        ...state,
        itemslist: state.itemslist.filter(item => item.id !== action.payload),
      };

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

    case UPDATE_ITEM:
      const updatedItem = action.payload;
      console.log(updatedItem);
      return {
        ...state,
        items: state.items.map(el => {
          if (el.id === action.payload.id) {
            return {
              title: updatedItem.title,
              description: updatedItem.description,
              price: updatedItem.price,
              amount: updatedItem.amount,
            };
          } else {
            return el;
          }
        }),
      };

    default:
      return state;
  }
};
