import {
  ADD_ITEM_BASKET,
  UPDATE_ITEM_BASKET,
  DELETE_ITEM_BASKET,
  INIT_ITEMS_BASKET,
  CLEAR_BASKET,
} from '../actionTypes/basketAT';
const initialState = {
  basketItems: JSON.parse(localStorage.getItem('basket')) ?? [],
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ITEM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, count: item.count + action.payload.count };
          }
          return item;
        }),
      };

    case DELETE_ITEM_BASKET:
      return {
        ...state,
        basketItems: state.basketItems.filter(item => {
          return item.id !== action.payload.id;
        }),
      };

    case ADD_ITEM_BASKET:
      const findItem = state.basketItems.find(
        el => el.id === action.payload.id
      );
      if (findItem) {
        return {
          ...state,
          basketItems: state.basketItems.map(el => {
            if (el.id === action.payload.id) {
              return { ...el, count: el.count + action.payload.count };
            }
            return el;
          }),
        };
      } else {
        return {
          ...state,
          basketItems: [...state.basketItems, action.payload],
        };
      }

    case CLEAR_BASKET:
      return {
        ...state,
        basketItems: [],
      };

    default:
      return state;
  }
};
