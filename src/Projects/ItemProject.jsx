import React from "react";
import { ItemStack } from "./ItemStack";

const ItemProject = ({
  img,
  otherTitle,
  title,
  description,
  repo,
  live,
  stack,
}) => {
  return (
    <div className="border dark:border-gray-700 w-full max-w-[400px] md:max-w-[350px] md:w-4/5 lg:w-full md:min-w-[320px] lg:min-w-[320px] shadow-lg bg-gray-200 dark:bg-gray-800 rounded-2xl">
      <div className="flex flex-col items-center space-y-2">
        <img src={img} alt="" className="h-64 w-full rounded-t-2xl" />
        <div className="px-4 pb-4">
          <p className="text-center text-gray-500 dark:text-gray-400 -mb-2">
            {otherTitle}
          </p>
          <p className="text-center font-bold text-xl text-gray-700 dark:text-gray-300">
            {title}
          </p>
          <p className="text-md mt-2 mx-4 text-gray-600 dark:text-gray-200">
            {description}
          </p>
          <div className="w-full flex justify-center space-x-4 mt-2">
            <a
              href={repo}
              target="_blank"
              className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
            >
              <p className="text-white font-semibold">See Repo</p>
            </a>
            <a
              href={live}
              target="_blank"
              className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
            >
              <p className="text-white font-semibold">See live</p>
            </a>
          </div>
          <div className="w-full flex space-x-4 mt-8 justify-end">
            {stack.map((item) => {
              return <ItemStack item={item} key={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ItemProject };
