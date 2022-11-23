import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    }

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div className={s.sendMessage}></div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={Textarea} validate={[required, maxLength50]} name={'newMessageBody'} placeholder={'Enter your message'} />
            <div><button>Send message</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'})(AddMessageForm);

export default Dialogs;