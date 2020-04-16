import * as axios from 'axios'

export const PostsApi = {
    getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }
};

