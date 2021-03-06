import React from 'react';
import s from './Post.module.css'
import MyPosts from "../MyPosts";

const Post = (props) => {


    return (

        <div className={s.item}>
            <img src='https://sun9-60.userapi.com/c636621/v636621204/e89/eVNvo-bq2jk.jpg?ava=1'></img>
            <p className={s.message}>{props.message}</p>

            <div>
                <p><span>Like</span> {props.likesCount}</p>
            </div>
        </div>
    );
}

export default Post;

