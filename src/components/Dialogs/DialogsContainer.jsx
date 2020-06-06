import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (e) => {
            let post = e.currentTarget.value;
            let action = updateNewMessageActionCreator(post);
            dispatch(action);

        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        },
        onKeyPress: (e) => {
            if (e.key === "Enter") {

            }
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
