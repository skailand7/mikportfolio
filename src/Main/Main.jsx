import React from "react";
import "./Main.css";

import imgProfile from "../me.png";
import { ItemStack } from "./ItemStack";

const stack = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
    alt: "html",
    name: "HTML",
    description: "Web Development",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
    alt: "css",
    name: "CSS",
    description: "Web Design",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    alt: "javascript",
    name: "JavaScript",
    description: "Web Development",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    alt: "react",
    name: "React",
    description: "Web Development",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
    alt: "tailwind css",
    name: "Tailwind CSS",
    description: "Web Design",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
    alt: "github",
    name: "GitHub",
    description: "Version Control",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    alt: "typescript",
    name: "TypeScript",
    description: "Web Development",
  },
  {
    img: "https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg",
    alt: "nextjs",
    name: "NextJS",
    description: "Web Development",
  },
];

const Main = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-full flex flex-col items-center justify-center">
      <div className="flex justify-center sm:w-full md:w-full lg:w-3/5 flex-col">
        <div className=" flex justify-center p-4 w-full">
          <div
            id="about-me"
            className="flex flex-col sm:flex-row items-center justify-center p-4 mb-16 space-x-4 sm:w-4/5 md:w-4/5 px-2 bg-indigo-100 dark:bg-gray-900 text-indigo-700 dark:text-gray-300 rounded-xl"
          >
            <img
              src={imgProfile}
              alt=""
              className="md:hidden w-auto h-36 md:h-64 rounded-full border-2 dark:border-gray-800 bg-gradient-to-b from-indigo-600 to-white dark:to-gray-900"
            />
            <div className="px-2 md:px-0">
              <p className="mt-4 sm:mt-0 text-lg lg:text-xl  text-center">
                {`Currently I'm still learning new technologies and frameworks.
                

                Below you can find my stack as well as the projects I made. Hope
                you like it! 😄`}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center text-gray-700 dark:text-gray-300">
          <p className="text-2xl font-bold ">Tech Stack:</p>
          <p className="text-lg ">A list of technologies I use on projects.</p>
          <div className="w-full grid p-4 lg:grid-cols-2 grid-flow-row gap-4">
            {stack.map((item) => {
              return (
                <ItemStack
                  img={item.img}
                  alt={item.alt}
                  name={item.name}
                  description={item.description}
                  key={item.name}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export { Main };
