import { ADD_ITEM, INIT_ITEMS } from '../actionTypes/itemsAT'
const initialState = { items: [] }

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:

      const newItem = action.payload

      return {
        ...state, items: state.items ? [...state.items, newItem] : [newItem]
      }

    case INIT_ITEMS:
      return { ...state, items: action.payload }

    default:
      return state
  }
}