import React from "react";
import "./Cover.css";
import imgProfile from "../me.png";

const Cover = () => {
  const openForm = (event) => {
    event.preventDefault();
    const contactContainer = document.querySelector("#contact-container");

    contactContainer.classList.remove("hidden");
  };
  return (
    <section className="p-4 w-full h-[350px] md:h-[450px] flex justify-center ">
      <div className="px-2 md:px-0 flex md:w-4/5 lg:w-3/5 justify-between items-center">
        <div className="">
          <h1 className="text-center md:text-left font-bold text-4xl text-gray-700">
            Hey! I'm <span className="text-indigo-700">Miguel</span>. <br />
            Frontend Developer
          </h1>
          <p className="text-gray-700 text-xl text-center md:text-left">
            Let's make amazing sites! 🚀
          </p>
          <div className="flex items-center justify-center mt-16">
            <button className="h-10 px-5 m-2 text-indigo-700 bg-white border border-indigo-700 rounded-lg">
              About Me
            </button>
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
            className=" w-auto h-36 md:h-64 rounded-full border-2 bg-gradient-to-r from-cyan-500 to-blue-500"
          />
        </div>
      </div>
    </section>
  );
};

export { Cover };
