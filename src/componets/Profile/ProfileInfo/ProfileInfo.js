import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.image}>
        <img
          src="https://thumbs.dreamstime.com/b/день-земли-окружающей-среды-в-руках-деревьев-растя-саженцы-bokeh-130247647.jpg"
          alt=""
        />
      </div>
      <div className={s.discriptionBlock}>
        <img
          className={s.ava}
          src="https://trashbox.ru/ifiles/220798_004e6a_img_20140503_122504.jpg_min1/avatarki.-1.jpg"
        />
        ava + discription
      </div>
    </div>
  );
};

export default ProfileInfo;
