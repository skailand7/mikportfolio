import React from "react";
import "./Cover.css";
import imgProfile from "../me.png";
import profile from "../profile.jpeg";
import hero from "../hero.png";

const Cover = () => {
  const openForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");
    contactContainer.classList.remove("hidden");
  };
  return (
    <section
      id="home"
      className="dark:bg-gray-900 p-4 w-full h-[350px] md:h-[450px] flex justify-center"
    >
      <div className="relative w-full px-2 md:px-8 flex md:w-4/5 lg:w-3/5 justify-between items-center">
        <div className="absolute right-0 top-0 w-full h-full overflow-hidden">
          <img
            src={hero}
            className="w-full scale-[2] md:scale-[1.3] lg:scale-[1]"
          />
        </div>
        <div className="w-full md:w-auto flex flex-col md:block items-center z-10 text-gray-700 dark:text-gray-300">
          <h1 className="md:bg-white dark:md:bg-gray-900 text-center md:text-left font-bold text-4xl">
            Hey! I'm{" "}
            <span className="text-indigo-700 dark:text-indigo-600">Miguel</span>
            . <br />
            <p className="text-3xl sm:text-4xl">Frontend Developer</p>
          </h1>
          <p className="md:bg-white dark:md:bg-gray-900 mt-4 sm:mt-0 text-xl text-center md:text-left">
            Let's build amazing sites! 🚀
          </p>
          <div className="flex items-center justify-center mt-16">
            <a
              href="#about-me"
              className="inline-block flex items-center h-10 px-5 m-2 text-indigo-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-indigo-700 dark:border-gray-300 rounded-lg"
            >
              About Me
            </a>
            <button
              onClick={openForm}
              className="h-10 px-5 m-2 text-indigo-100 bg-indigo-700 dark:bg-indigo-600 rounded-lg hover:bg-indigo-500"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="xsm:hidden sm:hidden md:flex z-10">
          <img
            src={imgProfile}
            alt=""
            className=" w-auto h-36 md:h-64 rounded-full border-2 bg-gradient-to-b dark:border-gray-800 from-indigo-600 to-white dark:to-gray-900"
          />
        </div>
      </div>
    </section>
  );
};

export { Cover };
