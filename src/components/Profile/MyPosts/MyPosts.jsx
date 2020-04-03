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
            <div className={s.post}>
                <Post name='Filippkins' age='30'/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>


    );
}

export default MyPosts;
