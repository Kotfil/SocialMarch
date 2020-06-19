import React from 'react';
import {addMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage

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






export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
