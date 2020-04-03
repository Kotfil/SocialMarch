import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://sun9-60.userapi.com/c636621/v636621204/e89/eVNvo-bq2jk.jpg?ava=1'></img>
            <div>
                post 1
            </div>
            <div>
                <span>{props.name},{props.age}</span>
            </div>

            <div>
                <span>Like</span>
            </div>

        </div>


    );
}

export default Post;
