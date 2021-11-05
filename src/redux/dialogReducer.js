const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let inicialState = {
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "huyod" },
  ],
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Valasun" },
    { id: 4, name: "Pisun" },
    { id: 5, name: "Valasiun" },
  ],
  newMessageText: "",
}

const dialogReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let message = {
        id: 4,
        message: state.newMessageText,
      };

      state.messages.push(message);
      state.newMessageText = "";
    return state
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newMessage;
      return state
    default:
      return state;
  }
};

export const addMessageActionCreater = () => {
    return { type: ADD_MESSAGE };
  };
  
export const updateNewMessageTextActionCreater = (message) => {
    return { type: UPDATE_NEW_MESSAGE_TEXT, newMessage: message };
  };

export default dialogReducer;
