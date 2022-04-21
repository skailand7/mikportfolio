import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="mt-16">
      <div className="h-[610px] bg-indigo-700 dark:bg-indigo-600 p-8 flex w-full flex-col justify-between">
        <p className="text-white text-center font-bold text-lg">
          Click on the icons below to contact me!
        </p>
        <div className="flex justify-center h-12 md:h-16 md:space-x-16 space-x-6 my-8">
          <a href="https://twitter.com/skailand7">
            <img
              src="https://www.pngkey.com/png/full/957-9574123_twitter-twitter-icon-white-transparent.png"
              alt="Twitter logo"
              className="h-full"
            />
          </a>
          <a href="https://github.com/skailand7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25657.png"
              alt="Github logo"
              className="h-full gh"
            />
          </a>
          <a href="https://www.linkedin.com/in/miguel-turpo/">
            <img
              src="https://pnggrid.com/wp-content/uploads/2021/05/linkedin-logo-white-1024x1024.png"
              alt="LinkedIn logo"
              className="h-full"
            />
          </a>
        </div>
        <div className="mt-16 flex flex-col space-y-4 text-white font-semibold text-xl">
          <a href="#home">Home</a>
          <a href="#about-me">About me</a>
          <a href="#projects">Projects</a>
          <a href="#footer">Contact</a>
        </div>
        <p className="mt-12 text-center text-white">
          Copyright 2022 Ⓒ Miguel Turpo
        </p>
      </div>
    </footer>
  );
};

export { Footer };
