import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {

    let dialogsEl = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d+Math.random()}/>);
    let messagesEl = props.dialogsPage.messages.map(m => <Message messages={m.message} key={m+Math.random()}/>);

    let onMessageChange = (e) => {
        props.updateNewMessageText(e.currentTarget.value);
    };

    let onKeyPress = (e) => {
        if (e.key === "Enter") {
            props.addMessage();
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
                        onClick={props.addMessage}>addMessage
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Dialogs;
