import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.profilePage.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p+Math.random()}/>);

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>

            <textarea

                onChange={(e) =>  props.updateNewPostText(e.currentTarget.value) }
                value={props.profilePage.newPostText}
                placeholder={"Add new post"}
            />
            <div className={s.buttonAddPost}>
                <button
                    onClick={props.addPost}>AddPost
                </button>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div>
        </div>

    );
}

export default MyPosts;
