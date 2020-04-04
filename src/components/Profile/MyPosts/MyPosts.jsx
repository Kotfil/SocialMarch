import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>AddPost</button>
            </div>
            <div className={s.posts}>
                <Post message='  Filippkins' likesCount='1'/>
                <Post message='  How arr You?' likesCount='0'/>


            </div>
        </div>


    );
}

export default MyPosts;
