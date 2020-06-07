import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";





const MyPosts = (props) => {
    let postsElements = props.profile.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id}/>);

    let onAddPost = () => {
        props.addPost();

    };

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>

            <textarea
                onChange={props.onPostChange}
                value={props.profile.newPostText}
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
