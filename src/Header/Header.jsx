import React from "react";
import menu from "../menu.svg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <div className="logo-text">
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_565446.png"
            alt="Brackets"
          />
          <p>
            Mik<span>Code</span>
          </p>
        </div>
        <img className="logo-menu" src={menu}></img>
      </div>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About Me</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
