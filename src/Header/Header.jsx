import React from "react";
import menu from "../menu.svg";
import "./Header.css";

const Header = () => {
  const openForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");
    contactContainer.classList.remove("hidden");
  };
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
            <a onClick={openForm} href="">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { Header };
