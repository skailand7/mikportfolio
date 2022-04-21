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
      className="z-20 hidden absolute top-0 space-y-8 h-[450px] w-full rounded-b-2xl bg-indigo-500 dark:bg-gray-900 p-8 dark:shadow-[0_35px_60px_-15px_rgba(99,102,241,0.2)]"
    >
      <div className="flex flex-col justify-center h-3/5 w-full space-y-8 text-white dark:text-indigo-500 font-bold">
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
      <div className="flex flex-col justify-center h-2/5 w-full space-y-4 text-white dark:text-indigo-300">
        <a href="">Twitter</a>
        <a href="">GitHub</a>
        <a href="">LinkedIn</a>
      </div>
    </section>
  );
};
export { SideMenu };
