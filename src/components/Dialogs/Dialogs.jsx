import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {


    let dialogsEl = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesEl = props.state.messages.map(m => <Message messages={m.message}/>);

    let newMessageElement = React.createRef();

    let addMessage = () => {

        props.addMessage();
        props.updateNewMessageText('');
    }

    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);

    }
    //null


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsEl}
            </div>
            <div className={s.messages}>

                {messagesEl}
                <textarea
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.newMessageText}
                    placeholder={"Add new message"}></textarea>
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
