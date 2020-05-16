import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";




const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                               key={p + Math.random()}/>);


    let addPost = () => {
        props.dispatch(addPostActionCreator());
    };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);};

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>

            <textarea
                onChange={onPostChange}
                value={props.profilePage.newPostText}
                placeholder={"Add new post"}
            />
            <div className={s.buttonAddPost}>
                <button
                    onClick={addPost}>AddPost
                </button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}

export default MyPosts;
