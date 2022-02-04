import { combineReducers } from "redux";
import { itemReducer } from "../reducers/itemReducer"

export const rootReducer = combineReducers({
  items: itemReducer
})