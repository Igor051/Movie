import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import PostsReducer from "./postsReducer";

let reducers = combineReducers({
    PostsPage: PostsReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store