import React from "react";
import s from "./Header.module.css";

function Header() {
  return (
    <header className={s.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL7II2vqBdHWdSxYdh_oJ4mAz6j6hHy1olPQ&usqp=CAU"
        alt=""
      />
      HEADER
    </header>
  );
}

export default Header;
