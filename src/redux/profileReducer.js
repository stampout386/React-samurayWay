const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let inicialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likecounts: 130 },
    { id: 2, message: "I am Monster!", likecounts: 200 },
    { id: 3, message: "Fuck you!!!!!!", likecounts: 121 },
  ],
  newPostText: "eh ehehe",
};

const profileReducer = (state = inicialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let post = {
        id: 5,
        message: state.newPostText,
        likecounts: 0,
      };
      state.posts.push(post);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreater = () => {
    return { type: ADD_POST };
  };
export const updateNewPostTextActionCreater = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text };
  };

export default profileReducer;
