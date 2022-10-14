import React from "react";
import s from './Dialogs.module.css';
import {NavLink, Route} from "react-router-dom";

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    <NavLink to="/>dialogs/1">Vlad</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/>dialogs/2">Nikita</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/>dialogs/3">Sanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/>dialogs/4">Oleg</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/>dialogs/5">Leha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/>dialogs/6">Kal'yan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How are you?</div>
                <div className={s.message}>Whatsapp mean or telegram?</div>
            </div>
        </div>
    )
}

export default Dialogs;