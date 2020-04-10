import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://www.jssor.com/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>
            </div>
            <div>
                ava + 123
            </div>
            <MyPosts />
        </div>


    );
}

export default Profile;
