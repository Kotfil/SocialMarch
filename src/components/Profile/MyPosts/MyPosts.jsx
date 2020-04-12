import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (

        <div className={s.postsStyle}>
            <h3> My posts</h3>
            <div>
                <textarea placeholder='Click'></textarea>
                <div className={s.buttonAddPost}>
                    <button>AddPost</button>
                </div>
                <div>

                </div>

            </div>
            <div className={s.posts}>
                <Post message='Filippkins' likesCount='1'/>
                <Post message='How arr You?' likesCount='0'/>
            </div>
        </div>


    );
}

export default MyPosts;
