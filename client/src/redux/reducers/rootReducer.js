import { combineReducers } from "redux";
import { itemReducer } from "../reducers/itemReducer";
import { categoriesReducer } from "./categoriesReducer";

export const rootReducer = combineReducers({
  items: itemReducer,
  categories: categoriesReducer,
});
