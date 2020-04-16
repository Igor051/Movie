import {PostsApi} from "../api/api";

const SET_POSTS = 'SET_POSTS';

let initialState = {
    posts: null
};

const PostsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS: {
            return {...state, posts: action.posts}
        }
        default: {
            return state
        }
    }
};

const setPostsAC = (posts) => ({type: SET_POSTS, posts});

export const getPosts = () => async (dispatch) => {
    const res = await PostsApi.getPosts();

    dispatch(setPostsAC(res))
};

export default PostsReducer