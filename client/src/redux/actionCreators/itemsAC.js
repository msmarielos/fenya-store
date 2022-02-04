import {
  ADD_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  INIT_ITEMS,
  INIT_CATEGORIES,
} from '../actionTypes/itemsAT';

export const addItemsAC = payload => {
  return {
    type: ADD_ITEM,
    payload,
  };
};

export const updateItemsAC = payload => {
  return {
    type: UPDATE_ITEM,
    payload,
  };
};

export const deleteItemsAC = payload => {
  return {
    type: DELETE_ITEM,
    payload,
  };
};

export const initItemsAC = payload => {
  return {
    type: INIT_ITEMS,
    payload,
  };
};

export const initCategoriesAC = payload => {
  return {
    type: INIT_CATEGORIES,
    payload,
  };
};
