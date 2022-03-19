import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="h-[500px] bg-indigo-700 p-8 flex flex-col justify-between">
        <p className="text-white font-bold text-lg">
          Click on the icons below to contact me!
        </p>
        <div className="flex justify-center space-x-6 my-8">
          <a href="https://twitter.com/skailand7">
            <img
              src="https://pngimg.com/uploads/twitter/twitter_PNG1.png"
              alt="Twitter logo"
              className="h-16"
            />
          </a>
          <a href="https://github.com/skailand7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="Github logo"
              className="h-16"
            />
          </a>
          <a href="https://github.com/skailand7">
            <img
              src="https://cdn-icons-png.flaticon.com/512/61/61109.png"
              alt="LinkedIn logo"
              className="h-16"
            />
          </a>
        </div>
        <div className="mt-16 flex flex-col space-y-4 text-white font-bold text-xl">
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">Projects</a>
          <a href="">Contact</a>
        </div>
        <p className="mt-12 text-center text-white">
          Copyright 2022 Ⓒ Miguel Turpo
        </p>
      </div>
    </footer>
  );
};

export { Footer };
