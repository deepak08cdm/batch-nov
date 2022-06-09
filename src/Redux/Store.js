import { combineReducers, createStore } from "redux";
import rootReducer from "./Reducer";
// import { reducer } from "./Reducer";

export const store = createStore(rootReducer)