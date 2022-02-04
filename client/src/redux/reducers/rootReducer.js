import { combineReducers } from "redux";
import { itemReducer } from "../reducers/itemReducer";
import { basketReducer } from "./basketReducer"

export const rootReducer = combineReducers({
  items: itemReducer,
  basketReducer
})
