import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        { (store) => {
            let state = store.getState();

            let addPost = () => {
                store.dispatch(addPostActionCreator());
            };

            let onPostChange = (text) => {

                let action = updateNewPostTextActionCreator(text);
                store.dispatch(action);
                // let text = e.currentTarget.value;
                // let text = newPostElement.current.value;
            };

            return (<MyPosts
                updateNewPostTextActionCreator={onPostChange}
                addPost={addPost}
                posts={state.profile.posts}
                newPostText={state.profile.newPostText}/>);
        }
    }
    </StoreContext.Consumer>

}
export default MyPostsContainer;
