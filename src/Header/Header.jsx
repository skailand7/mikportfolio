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
    <header className="p-4 md:p-0 w-full h-auto bg-white flex items-center justify-center">
      <div className="w-full md:w-4/5 lg:w-3/5 h-[60px]  flex justify-between items-center">
        <div className="flex justify-center items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-700"
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
          <p className="text-gray-700 text-2xl">
            Mik<span className="text-indigo-700">Code</span>
          </p>
        </div>
        <nav className="invisible md:visible w-3/5">
          <ul className="flex justify-evenly">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About me</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a onClick={openForm} href="">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="bg-white/75 w-7 h-7 rounded-md flex items-center justify-center md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-gray-600"
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
      </div>
    </header>
  );
};

export { Header };
