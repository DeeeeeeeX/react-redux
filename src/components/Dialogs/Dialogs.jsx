import React from "react";
import s from './Dialogs.module.css';
import {NavLink, Route} from "react-router-dom"

const DialogItem = (props) => {
    let path = "/>dialogs/" + props.id;

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Vlad"},
        {id: 2, name: "Nikita"},
        {id: 3, name: "Snaya"},
        {id: 4, name: "Oleg"},
        {id: 5, name: "Leha"},
        {id: 6, name: "Kal'yan"}
    ]

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Whatsapp mean or telegram?"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map( m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;