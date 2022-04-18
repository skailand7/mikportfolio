import React from "react";
import "./Main.css";

import imgProfile from "../me.png";

const Main = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex justify-center sm:w-full md:w-full lg:w-3/5 flex-col">
        <div className=" flex justify-center p-4 w-full">
          <div
            id="about-me"
            className="flex flex-col sm:flex-row items-center justify-center p-4 mb-16 space-x-4 sm:w-4/5 md:w-4/5 px-2 bg-indigo-100 text-indigo-700 rounded-xl"
          >
            <img
              src={imgProfile}
              alt=""
              className="md:hidden w-auto h-36 md:h-64 rounded-full border-2 bg-gradient-to-b from-indigo-400 to-indigo-100"
            />
            <div className="">
              <p className="mt-4 sm:mt-0 text-md font-semibold lg:font-normal lg:text-xl text-indigo-700 lg:text-center md:text-center">
                {`Currently I'm still learning new technologies and frameworks.
                

                Below you can find my stack as well as the projects I made. Hope
                you like it! 😄`}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl font-bold text-gray-700">Tech Stack:</p>
          <p className="text-lg text-gray-700">
            A list of technologies I use on projects.
          </p>
          <div className="w-full grid p-4 lg:grid-cols-2 grid-flow-row gap-4">
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                alt="html"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">HTML</p>
                <p className="text-lg text-gray-800">Web Development</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                alt="css"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">CSS</p>
                <p className="text-lg text-gray-800">Web Design</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                alt="javascript"
                className="h-12 rounded-lg"
              />
              <div>
                <p className="font-bold text-gray-800">JavaScript</p>
                <p className="text-lg text-gray-800">Web Development</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                alt="React"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">React JS</p>
                <p className="text-lg text-gray-800">Web Development</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                alt="TailwindCSS"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">Tailwind CSS</p>
                <p className="text-lg text-gray-800">Web Design</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="GitHub"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">GitHub</p>
                <p className="text-lg text-gray-800">Version Control</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"
                alt="Typescript"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">Typescript</p>
                <p className="text-lg text-gray-800">Web Development</p>
              </div>
            </div>
            <div className="w-full h-20 p-4 rounded-xl border border-gray-300 bg-gray-100 flex items-center space-x-4 hover:bg-gray-200">
              <img
                src="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
                alt="NextJS"
                className="h-12"
              />
              <div>
                <p className="font-bold text-gray-800">
                  Next JS{" "}
                  <span className="text-gray-400">(In progress...)</span>
                </p>
                <p className="text-lg text-gray-800">Web Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export { Main };
