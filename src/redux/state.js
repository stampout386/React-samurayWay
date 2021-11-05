import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import sidebarReducer from "./sidebarReducer";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likecounts: 15 },
        { id: 2, message: "I am Monster!", likecounts: 25 },
        { id: 3, message: "Fuck you", likecounts: 10 },
      ],
      newPostText: "ooooo",
    },
    dialogsPage: {
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
    },
    sidebarPage: {
      barItem: [
        {
          img: "https://cs16planet.ru/steam-avatars/images/avatar3219.jpg",
          name: "Misha",
        },
        {
          img: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg",
          name: "Lesha",
        },
        {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz-E6Qq7Br5yQZ8i6yqD2HvdfVx8fa44VAsw&usqp=CAU",
          name: "Pasha",
        },
      ],
    },
  },
  _callSubscriber() {
    console.log("errors");
  },

  getState() {
    return this._state;
  },
  subscribe(observe) {
    this._callSubscriber = observe;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);
  },
};


window.store = store;
