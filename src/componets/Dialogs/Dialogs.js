import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogItem";
import Message from "./Message/Message";
import { addMessageActionCreater,updateNewMessageTextActionCreater } from "../../redux/dialogReducer";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addMessage = () => {
    props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = () => {
    let message = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreater(message))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>

      <div className={s.messages}>
        {messagesElements}
        <div className={s.textareaItem}>
          <textarea onChange={onMessageChange} ref={newMessageElement} value ={props.state.newMessageText} />
          <div>
            <button onClick={addMessage}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
