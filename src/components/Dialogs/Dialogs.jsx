import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator,updateNewMessageActionCreator} from "../../redux/dialogs-reducer";


const Dialogs = (props) => {

    let dialogsEl = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d+Math.random()}/>);
    let messagesEl = props.dialogs.messages.map(m => <Message messages={m.message} key={m+Math.random()}/>);

    console.log(props.dialogs)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={s.messages}>

                {messagesEl}
                <textarea
                    onChange={props.onMessageChange}
                    onKeyPress={props.onKeyPress} //Узнать у ментора почему бордер не красный
                    value={props.dialogs.newMessageText}
                    placeholder={"Add new message"}
                    className={props.errorClass ? s.error : ''}
                />
                <div>
                    <button
                        onClick={props.addMessage}>addMessage
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
