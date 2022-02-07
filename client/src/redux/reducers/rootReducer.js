import { combineReducers } from 'redux';
import { itemReducer } from '../reducers/itemReducer';
import { categoriesReducer } from './categoriesReducer';
import { listsReducer } from './listsReducer';
import { userReducer } from './userReducer';
import { basketReducer } from './basketReducer';
import { animalReducer } from './animalReducer';
import { reviewsReducer } from './reviewsReducer';
import { orderReducer } from './orderReducer';

export const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoriesReducer,
  lists: listsReducer,
  users: userReducer,
  basketItems: basketReducer,
  animals: animalReducer,
  reviews: reviewsReducer,
  orders: orderReducer,
});
