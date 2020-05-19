import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {
debugger
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let onPostChange = (text) => {
debugger
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
        // let text = e.currentTarget.value;
        // let text = newPostElement.current.value;
    };

    return ( <MyPosts
        updateNewPostTextActionCreator={onPostChange}
        addPost={addPost}
        posts={state.profile.posts}
        newPostText={state.profile.newPostText}/>);
}

export default MyPostsContainer;
