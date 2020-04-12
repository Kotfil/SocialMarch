import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogInfo = (props) => {
    let path = 'dialogs/' + props.id;

    return <div className={s.dialog + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
};

const MessageInfo = (props) => {
    return <div className={props.message}>Hi</div>
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogInfo name='Oksana' id='1'/>
                <DialogInfo name='Vitaly' id='2'/>
                <DialogInfo name='Viktor' id='3'/>
                <DialogInfo name='Marina' id='4'/>
                <DialogInfo name='Evgen' id='5'/>
                <DialogInfo name='Sergey' id='6'/>
            </div>
            <div className={s.messages}>
                <MessageInfo message='Hi'/>
                <MessageInfo message='How Are You?'/>
                <MessageInfo message='How old are you?'/>
            </div>
        </div>

    );
}


export default Dialogs;
