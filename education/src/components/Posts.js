import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getPosts} from "../Redux/postsReducer";

function Posts(props) {
    useEffect(() => {
        props.getPosts()
    }, props.posts && [props.posts.data[0].id]);
    return (
        <div>{props.posts && props.posts.data.map(post => <div>
            <h2>Title</h2>
            <div>{post.title}</div>
            <h3>Body</h3>
            <div>{post.body}</div><br/>
            <hr/>
        </div>)}</div>
    )
}

let mapStateToProps = (state) => ({
    posts: state.PostsPage.posts
});

export default connect(mapStateToProps, {getPosts})(Posts)