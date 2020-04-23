import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let dialogsEl = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesEl = props.state.messages.map(m => <Message messages={m.message}/>);




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={s.messages}>
                {messagesEl}
            </div>
        </div>
    );
}

export default Dialogs;
