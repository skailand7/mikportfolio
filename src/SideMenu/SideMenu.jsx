import React from "react";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <section
      id="side-menu"
      className="hidden absolute top-0 space-y-8 h-[450px] w-full rounded-b-2xl bg-indigo-500 p-8"
    >
      <div className="flex flex-col justify-center h-3/5 w-full space-y-8 text-white font-bold">
        <a href="">Home</a>
        <a href="">About me</a>
        <a href="">Projects</a>
        <a href="">Contact</a>
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
