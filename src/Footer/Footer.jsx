import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="mt-16">
      <div className="h-[610px] bg-indigo-700 p-8 flex w-full flex-col justify-between">
        <p className="text-white text-center font-bold text-lg">
          Click on the icons below to contact me!
        </p>
        <div className="flex justify-center h-12 md:h-16 md:space-x-16 space-x-6 my-8">
          <a href="https://twitter.com/skailand7">
            <img
              src="https://pngimg.com/uploads/twitter/twitter_PNG1.png"
              alt="Twitter logo"
              className="h-full"
            />
          </a>
          <a href="https://github.com/skailand7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github logo"
              className="h-full"
            />
          </a>
          <a href="https://github.com/skailand7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
              alt="LinkedIn logo"
              className="h-full"
            />
          </a>
        </div>
        <div className="mt-16 flex flex-col space-y-4 text-white font-bold text-xl">
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
