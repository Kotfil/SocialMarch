import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator,updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {
debugger
    let dialogsEl = props.dialogsPage.map(d => <DialogItem name={d.name} id={d.id} key={d+Math.random()}/>);
    let messagesEl = props.dialogsPage.messages.map(m => <Message messages={m.message} key={m+Math.random()}/>);

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (e) => {
        let post = e.currentTarget.value;
        let action = updateNewMessageActionCreator(post);
        props.dispatch(action);
    };

    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            addMessage();
        }
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={s.messages}>

                {messagesEl}
                <textarea
                    onChange={onMessageChange}
                    onKeyPress={onKeyPress} //Узнать у ментора почему бордер не красный
                    value={props.dialogsPage.newMessageText}
                    placeholder={"Add new message"}
                    className={props.dialogsPage.errorClass ? s.error : ''}
                />
                <div>
                    <button
                        onClick={addMessage}>addMessage
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
