import { ADD_ITEM_BASKET, UPDATE_ITEM_BASKET, DELETE_ITEM_BASKET, INIT_ITEMS_BASKET } from '../actionTypes/basketAT'

export const addItemsAC = (payload) => {
  return {
    type: ADD_ITEM_BASKET,
    payload
  }
}

export const updateItemsAC = (payload) => {
  return {
    type: UPDATE_ITEM_BASKET,
    payload
  }
}

export const deleteItemsAC = (payload) => {
  return {
    type: DELETE_ITEM_BASKET,
    payload
  }
}

export const initItemsAC = (payload) => {
  return {
    type: INIT_ITEMS_BASKET,
    payload
  }
}
