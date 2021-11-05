import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostActionCreater,updateNewPostTextActionCreater} from './../../../redux/profileReducer'



function MyPosts(props) {
      let postsElement = props.state.posts.map((post) => (
        <Post message={post.message} likecounts={post.likecounts} />
      ));

let newPostElement = React.createRef();

let addPost = () => {
  props.dispatch(addPostActionCreater());
}

let onPostChange = () => {
  let text = newPostElement.current.value;
  props.dispatch(updateNewPostTextActionCreater(text))
}

  return (
    <div>
      <h3>My posts</h3>
      <div className={s.area}>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value ={props.state.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>

      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
