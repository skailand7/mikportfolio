import React from "react";
import "./Cover.css";
import imgProfile from "../me.png";
import dot from "../dot.png";

const Cover = () => {
  const openForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");

    contactContainer.classList.remove("hidden");
  };
  return (
    <section
      id="home"
      className="p-4 w-full h-[350px] md:h-[450px] flex justify-center "
    >
      <div className="relative px-2 md:px-0 flex md:w-4/5 lg:w-3/5 justify-between items-center">
        <div className="absolute right-0 -z-30 top-0 w-full h-full">
          <img src={dot} className="scale-[3] md:scale-[2] lg:scale-[1]" />
        </div>
        <div className="md:bg-white">
          <h1 className="text-center md:text-left font-bold text-4xl text-gray-700">
            Hey! I'm <span className="text-indigo-700">Miguel</span>. <br />
            <p className="text-3xl sm:text-4xl">Frontend Developer</p>
          </h1>
          <p className="mt-4 sm:mt-0 text-gray-700 text-xl text-center md:text-left">
            Let's build amazing sites! 🚀
          </p>
          <div className="flex items-center justify-center mt-16">
            <a
              href="#about-me"
              className="inline-block flex items-center h-10 px-5 m-2 text-indigo-700 bg-white border border-indigo-700 rounded-lg"
            >
              About Me
            </a>
            <button
              onClick={openForm}
              className="h-10 px-5 m-2 text-indigo-100 bg-indigo-700 rounded-lg hover:bg-indigo-500"
            >
              Contact Me
            </button>
          </div>
        </div>
        <div className="xsm:hidden sm:hidden md:flex">
          <img
            src={imgProfile}
            alt=""
            className=" w-auto h-36 md:h-64 rounded-full border-2 bg-gradient-to-b from-indigo-500 to-white"
          />
        </div>
      </div>
    </section>
  );
};

export { Cover };
