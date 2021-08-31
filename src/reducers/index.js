import {
    combineReducers
} from "redux";
import {
    createStore,
    applyMiddleware
} from 'redux';
import {
    composeWithDevTools
} from 'redux-devtools-extension';
import reposReducer from "./reposReducer";
import { userReducer } from "./userReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    repos: reposReducer,
    user: userReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunk))