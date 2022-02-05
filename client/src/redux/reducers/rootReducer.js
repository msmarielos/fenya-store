import { combineReducers } from 'redux';
import { itemReducer } from '../reducers/itemReducer';
import { categoriesReducer } from './categoriesReducer';
import { listsReducer } from './listsReducer';
import { basketReducer } from "./basketReducer"

export const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoriesReducer,
  lists: listsReducer,
  basketItems: basketReducer
});
