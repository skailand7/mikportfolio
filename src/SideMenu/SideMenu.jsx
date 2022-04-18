import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  const handleMenu = () => {
    const sideMenu = document.querySelector("#side-menu");
    const buttonMenu = document.querySelector("#button-menu");
    const buttonClose = document.querySelector("#button-close");

    if (sideMenu.classList.contains("hidden")) {
      sideMenu.classList.remove("hidden");
      buttonMenu.classList.add("hidden");
      buttonClose.classList.remove("hidden");
    } else {
      sideMenu.classList.add("hidden");
      buttonMenu.classList.remove("hidden");
      buttonClose.classList.add("hidden");
    }
  };
  return (
    <section
      id="side-menu"
      className="z-20 hidden absolute top-0 space-y-8 h-[450px] w-full rounded-b-2xl bg-indigo-500 p-8"
    >
      <div className="flex flex-col justify-center h-3/5 w-full space-y-8 text-white font-bold">
        <a onClick={handleMenu} href="">
          Home
        </a>
        <a onClick={handleMenu} href="#about-me">
          About me
        </a>
        <a onClick={handleMenu} href="#projects">
          Projects
        </a>
        <a onClick={handleMenu} href="#footer">
          Contact
        </a>
      </div>
      <div className="flex flex-col justify-center h-2/5 w-full space-y-4 text-white">
        <a href="">Twitter</a>
        <a href="">GitHub</a>
        <a href="">LinkedIn</a>
      </div>
    </section>
  );
};
export { SideMenu };
