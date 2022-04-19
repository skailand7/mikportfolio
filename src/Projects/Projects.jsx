import React from "react";
import projectPoke from "../project-pk.png";
import mikCode from "../mikmovies.PNG";
import restaurant from "../project-restaurant.png";
import petcare from "../project-petcare.png";
const Projects = () => {
  return (
    <section id="projects" className="p-4 space-y-8 w-full flex justify-center">
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-3/5 mt-8">
        <p className="text-2xl font-bold text-gray-700 text-center">
          Projects I honestly made :)
        </p>
        <div className="grid place-items-center lg:grid-cols-2 gap-4 gap-y-8 mt-8">
          <div className="border w-full md:w-4/5 lg:w-full shadow-lg bg-gray-200 rounded-2xl">
            <div className="flex flex-col items-center space-y-2">
              <img
                src={mikCode}
                alt=""
                className="h-64 w-full rounded-t-2xl border-gray-300"
              />
              <div className="px-4 pb-4">
                <p className="text-center text-gray-500 -mb-2">API consume</p>
                <p className="text-center font-bold text-xl text-gray-700">
                  MikMovies🎥
                </p>
                <p className="text-md mt-2 mx-4 text-gray-600">
                  Made with Tailwind, NextJS, IMBb API and of course tons of
                  love.
                </p>
                <div className="w-full flex justify-center space-x-4 mt-2">
                  <a
                    href="https://github.com/skailand7/movies"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See Repo</p>
                  </a>
                  <a
                    href="https://movies-kohl-kappa.vercel.app/"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See live</p>
                  </a>
                </div>
                <div className="w-full flex space-x-4 mt-8 justify-end">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    alt=""
                    className="h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                    alt=""
                    className="h-6"
                  />
                  <img
                    src="https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg"
                    alt=""
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border w-full md:w-4/5 lg:w-full shadow-lg bg-gray-200 rounded-2xl">
            <div className="flex flex-col items-center space-y-2">
              <img
                src={restaurant}
                alt=""
                className="h-64 w-full rounded-t-2xl border-gray-300"
              />
              <div className="px-4 pb-4">
                <p className="text-center text-gray-500 -mb-2">React Hooks</p>
                <p className="text-center font-bold text-xl text-gray-700">
                  Restaurant
                </p>
                <p className="text-md mt-2 mx-4 text-gray-600">
                  It shows breakfast, dinner and coffe. Responsive design,
                  shopping cart (not backend yet).
                </p>
                <div className="w-full flex justify-center space-x-4 mt-2">
                  <a
                    href="https://github.com/skailand7/restaurant"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See Repo</p>
                  </a>
                  <a
                    href="https://skailand7.github.io/restaurant"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See live</p>
                  </a>
                </div>
                <div className="flex space-x-4 mt-8 justify-end">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    alt=""
                    className="h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                    alt=""
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border w-full md:w-4/5 lg:w-full shadow-lg bg-gray-200 rounded-2xl">
            <div className="flex flex-col items-center space-y-2">
              <img
                src={petcare}
                alt=""
                className="h-64 w-full rounded-t-2xl border-gray-300"
              />
              <div className="px-4 pb-4">
                <p className="text-center text-gray-500 -mb-2">
                  Tailwind Landing Page
                </p>
                <p className="text-center font-bold text-xl text-gray-700">
                  Pet Care Center
                </p>
                <p className="text-md mt-2 mx-4 text-gray-600">
                  Made for a vet center, designed using mobile first and
                  Tailwind CSS Framework.
                </p>
                <div className="w-full flex justify-center space-x-4 mt-2">
                  <a
                    href="https://github.com/skailand7/pet-care"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See Repo</p>
                  </a>
                  <a
                    href="https://skailand7.github.io/pet-care"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See live</p>
                  </a>
                </div>
                <div className="flex space-x-4 mt-8 justify-end">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png"
                    alt=""
                    className="h-6"
                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
                    alt=""
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border w-full md:w-4/5 lg:w-full shadow-lg bg-gray-200 rounded-2xl">
            <div className="flex flex-col items-center space-y-2">
              <img
                src={projectPoke}
                alt=""
                className="h-64 w-full rounded-t-2xl border-gray-300"
              />
              <div className="px-4 pb-4">
                <p className="text-center text-gray-500 -mb-2">API consume</p>
                <p className="text-center font-bold text-xl text-gray-700">
                  Pokemon APP
                </p>
                <p className="text-md mt-2 mx-2 text-gray-600">
                  Project made with promises, DOM and arrays. Also Pokemon API.
                </p>
                <div className="w-full flex justify-center space-x-4 mt-8">
                  <a
                    href="https://github.com/skailand7/pokemon-app"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See Repo</p>
                  </a>
                  <a
                    href="https://skailand7.github.io/pokemon-app/"
                    target="_blank"
                    className="flex w-1/3 p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-700 rounded-xl "
                  >
                    <p className="text-white font-semibold">See live</p>
                  </a>
                </div>
                <div className="flex space-x-4 mt-8 justify-end">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
                    alt=""
                    className="h-6"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                    alt=""
                    className="h-6"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                    alt=""
                    className="h-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Projects };
