import { combineReducers } from 'redux';
import { itemReducer } from '../reducers/itemReducer';
import { categoriesReducer } from './categoriesReducer';
import { listsReducer } from './listsReducer';

export const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoriesReducer,
  lists: listsReducer,
});
