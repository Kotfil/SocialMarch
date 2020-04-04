import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://sun9-60.userapi.com/c636621/v636621204/e89/eVNvo-bq2jk.jpg?ava=1'></img>
            {props.message}


            <div>
                <span>Like</span> {props.likesCount}
            </div>

        </div>


    );
}

export default Post;
