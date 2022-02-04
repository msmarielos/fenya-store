import { ADD_ITEM_BASKET, UPDATE_ITEM_BASKET, DELETE_ITEM_BASKET, INIT_ITEMS_BASKET  } from '../actionTypes/basketAT'
const initialState = { basketItems: [
  {
    id: 1,
    title: 'Корм Royal Canin',
    description: 'Пищевая привлекательность и здоровый рацион',
    price: 1500,
    rating: 5,
    count: 1
  },
  {
    id: 2,
    title: 'Petsmack морской кальций',
    description: 'Натуральная добавка для приёма внутрь',
    price: 350,
    rating: 5,
    count: 1
  },
] }

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_ITEM_BASKET:

    //   const newItem = action.payload

    //   return {
    //     ...state, items: state.items ? [...state.items, newItem] : [newItem]
    //   }

    // case INIT_ITEMS_BASKET:
    //   return { ...state, items: action.payload }

    case UPDATE_ITEM_BASKET:
      return { ...state, basketItems: action.payload }

    default:
      return state
  }
}
