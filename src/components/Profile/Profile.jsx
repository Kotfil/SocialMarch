import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import store from './../../redux/redux-store';

const Profile = (props) => {
    return (

        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={store}
                profile={props.profile}
            />
        </div>


    );
}

export default Profile;
