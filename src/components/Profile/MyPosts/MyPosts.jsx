import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";





const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}
                                                               key={p + Math.random()}/>);

    let onAddPost = () => {
        props.addPost();

    };

    let onPostChange = (e) => {
        let text = e.currentTarget.value;
        props.updateNewPostTextActionCreator(text);
    };

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>

            <textarea
                onChange={onPostChange}
                value={props.newPostText}
                placeholder={"Add new post"}
            />
            <div className={s.buttonAddPost}>
                <button
                    onClick={onAddPost}>AddPost
                </button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}

export default MyPosts;
