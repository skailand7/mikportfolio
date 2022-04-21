import React from "react";
import menu from "../menu.svg";
import "./Header.css";

const Header = () => {
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

  const handleDarkMode = () => {
    const darkButton = document.querySelector("#button-dark");
    const principal = document.querySelector("html");

    if (principal.classList.contains("dark")) {
      principal.classList.remove("dark");
    } else {
      principal.classList.add("dark");
    }
  };
  const openForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");
    contactContainer.classList.remove("hidden");
  };
  return (
    <header className="p-4 md:p-0 w-full h-auto bg-white dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full md:w-4/5 lg:w-3/5 h-[60px]  flex justify-between items-center text-gray-700 dark:text-gray-300">
        <div className="flex justify-center items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
          <a href="/">
            <p className="text-2xl">
              Mik
              <span className="text-indigo-700 dark:text-indigo-600">Code</span>
            </p>
          </a>
        </div>

        <div className="flex w-full justify-end items-center space-x-4">
          <nav className="xsm:hidden md:block lg:block w-3/5 ">
            <ul className="flex justify-evenly">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about-me">About me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a onClick={openForm} href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div
            onClick={handleDarkMode}
            className="z-30 bg-white/75 dark:bg-gray-800 dark:border-gray-600 w-10 h-10 border rounded-full flex items-center justify-center"
          >
            <div id="button-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </div>
          <div
            onClick={handleMenu}
            className="z-30 bg-white/75 dark:bg-gray-800 dark:border-gray-600 w-10 h-10 border rounded-md flex items-center justify-center md:hidden"
          >
            <div id="button-menu" className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600 dark:text-gray-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div id="button-close" className="hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-600 dark:text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export { Header };
