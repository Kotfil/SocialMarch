import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to='dialogs/1'>Oksana</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/2'>Marina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/3'>Sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/4'>Vitya</NavLink>
                </div>
                <div className={s.dialog}>
                     <NavLink to='dialogs/5'>Vitalik</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='dialogs/6'>Filipp</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.dialog}>Hi</div>
                <div className={s.dialog}>How are you?</div>
                <div className={s.dialog}>How old are you?</div>
            </div>
        </div>

    );
}


export default Dialogs;
