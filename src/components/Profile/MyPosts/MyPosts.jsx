import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newTextElement = React.createRef();
    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);

    let addPost = () => {
        let text = newTextElement.current.value
        alert(text);
    }

    return (
        <div className={s.postsStyle}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newTextElement} placeholder='...'></textarea>
                <div className={s.buttonAddPost}>
                    <button onClick={addPost}>AddPost</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;
