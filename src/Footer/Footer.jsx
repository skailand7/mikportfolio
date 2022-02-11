import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>Click on the icons below to contact me!</p>
        <div className="footer-container-logo">
          <a href="https://twitter.com/skailand7">
            <img
              src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png"
              alt="Twitter logo"
            />
          </a>
          <a href="https://github.com/skailand7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github logo"
            />
          </a>
        </div>
        <p>Copyright 2022 Ⓒ Miguel Turpo</p>
      </div>
    </footer>
  );
};

export { Footer };
