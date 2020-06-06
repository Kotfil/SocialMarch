import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "./../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";




const mapStateToProps = (state) => {

    return {
        profile: state.profile
    }

}

const dispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        onPostChange: (text) => {

            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
            }
         }
    }


const MessageContainer = connect(mapStateToProps, dispatchToProps)(MyPosts);

export default MessageContainer;
