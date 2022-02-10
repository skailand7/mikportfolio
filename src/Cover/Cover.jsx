import React from "react";
import "./Cover.css";
import imgProfile from "../me.png";

const Cover = () => {
  return (
    <section className="cover-container">
      <div className="cover-contain">
        <div className="cover-text">
          <h1>
            Hi, I'm <span>Miguel Turpo</span>. <br />
            Web Developer
          </h1>
          <p>Let's create cool things! 🚀</p>
          <div className="buttons">
            <button className="myButton">Contact Me</button>
            <button className="myButton secondary">About Me</button>
          </div>
        </div>
        <div className="cover-picture">
          <div className="cover-picture__img">
            <img src={imgProfile} alt="" />
          </div>
          <div className="cover-picture__img2"></div>
        </div>
      </div>
    </section>
  );
};

export { Cover };
