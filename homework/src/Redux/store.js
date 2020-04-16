import {applyMiddleware, combineReducers, createStore} from "redux";
import filmsReducer from "./filmsReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    filmsPage: filmsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store