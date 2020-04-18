import {applyMiddleware, combineReducers, createStore} from "redux";
import filmsReducer from "./filmsReducer";
import MovieReducer from "./MoviePageReducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    filmsPage: filmsReducer,
    moviePage: MovieReducer,
    form:formReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store