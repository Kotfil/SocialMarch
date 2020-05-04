import React from 'react';
// import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
// import {addPost} from "../../redux/store";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}
                // updeatePost={props.updeatePost}
            />
        </div>


    );
}

export default Profile;
