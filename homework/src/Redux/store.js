import {applyMiddleware, combineReducers, createStore} from "redux";
import filmsReducer from "./filmsReducer";
import MovieReducer from "./MoviePageReducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    filmsPage: filmsReducer,
    moviePage: MovieReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store