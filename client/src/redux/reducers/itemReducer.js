import {
  ADD_ITEM,
  INIT_CURRENT_ITEM,
  INIT_ITEMS,
  SORT_ITEMS_ASC,
  SORT_ITEMS_DESC,
  INIT_ITEM_LIST,
  DELETE_ITEM,
  UPDATE_ITEM,
  ITEM_RESPONSE_SUCCESS,
  ITEM_RESPONSE_PENDING,
  ITEM_RESPONSE_ERROR
} from '../actionTypes/itemsAT';
const initialState = { items: [], currentItem: {}, itemResponseSuccess: null, itemResponsePending: null, itemResponseError: null };

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
      return { ...state, items: action.payload };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== Number(action.payload)),
      };
    
    case ITEM_RESPONSE_SUCCESS:
      return {...state, itemResponseSuccess: true, itemResponseError: false, itemResponsePending: null };

    case ITEM_RESPONSE_ERROR:
      return {...state, itemResponseError: true, itemResponseSuccess: false, itemResponsePending: null };

    case ITEM_RESPONSE_PENDING:
      return { ...state, itemResponseError: null, itemResponseSuccess: null, itemResponsePending: true };

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
