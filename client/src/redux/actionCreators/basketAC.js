import {
  ADD_ITEM_BASKET,
  UPDATE_ITEM_BASKET,
  DELETE_ITEM_BASKET,
  INIT_ITEMS_BASKET,
  CLEAR_BASKET,
} from '../actionTypes/basketAT';

export const addItemsBasketAC = payload => {
  return {
    type: ADD_ITEM_BASKET,
    payload,
  };
};

export const updateItemsBasketAC = payload => {
  return {
    type: UPDATE_ITEM_BASKET,
    payload,
  };
};

export const deleteItemsBasketAC = payload => {
  return {
    type: DELETE_ITEM_BASKET,
    payload,
  };
};

export const initItemsBasketAC = payload => {
  return {
    type: INIT_ITEMS_BASKET,
    payload,
  };
};

export const clearBasketAC = payload => {
  return {
    type: CLEAR_BASKET,
    payload,
  };
};
