import React from "react";
import projectPoke from "../project-pk.png";
import mikCode from "../mikmovies.PNG";
import restaurant from "../project-restaurant.png";
import petcare from "../project-petcare.png";
import { ItemProject } from "./ItemProject";
import { projects } from "./ArrProjects";

const Projects = () => {
  return (
    <section
      id="projects"
      className=" p-4 space-y-8 w-full flex justify-center"
    >
      <div className="w-full sm:w-3/5 md:w-4/5 lg:w-3/5 mt-8">
        <p className="text-2xl font-bold text-gray-700 dark:text-gray-300 text-center">
          Projects I made :)
        </p>
        <div className="grid place-items-center md:grid-cols-1 lg:grid-cols-2  md:gap-x-4 lg:gap-x-32 gap-y-8 mt-8">
          {projects.map((item) => {
            return (
              <ItemProject
                img={item.img}
                otherTitle={item.otherTitle}
                title={item.title}
                description={item.description}
                repo={item.repo}
                live={item.live}
                stack={item.stack}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Projects };
