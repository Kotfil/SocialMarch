import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);







    // let onKeyPress = (e) => {
    //     if(e.key === "Enter") {
    //
    //     }
    //
    // };

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <textarea

                    // value={props.updeatePost}
                />
                <div className={s.buttonAddPost}>
                    <button
                        onClick={props.addPost}>AddPost</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
