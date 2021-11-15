import {combineReducers, createStore} from "redux";
import {infoReducer} from "./infoReducer";

const rootReducer = combineReducers({
info: infoReducer
});
export const store=createStore(rootReducer);