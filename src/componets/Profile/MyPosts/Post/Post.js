import s from "./Post.module.css";

function Post(props) {
  return (
    <div className={s.item}>
      <img
        src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg"
        alt=""
      />
      {props.message}
      <div>
        <span>like {props.likecounts}</span>
      </div>
    </div>
  );
}

export default Post;
