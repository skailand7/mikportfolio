import React from "react";
import projectPoke from "../project-pk.png";
import yardSale from "../yard-sale.png";
import restaurant from "../project-restaurant.png";
import petcare from "../project-petcare.png";
const Projects = () => {
  return (
    <section id="projects" className="p-4 space-y-8 w-full flex justify-center">
      <div className="w-full sm:w-4/5 md:w-3/5 lg:w-3/5 mt-8">
        <p className="text-2xl font-bold text-gray-700 text-center">
          Projects I made :)
        </p>
        <div className="grid lg:grid-cols-2 gap-4 mt-8">
          <div className="border border-gray-500 bg-gray-100 rounded-2xl w-full">
            <div className="flex flex-col items-center space-y-8 p-4">
              <img
                src={projectPoke}
                alt=""
                className="h-44 border-2 border-gray-300"
              />
              <div className="">
                <p className="text-center text-gray-500 -mb-2">API consume</p>
                <p className="text-center font-bold text-xl text-gray-700">
                  Pokemon App
                </p>
                <p className="text-md mt-8 text-gray-600">
                  Project made with fetch, promises, DOM management and arrays.
                  Also Pokemon API.
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                  <a
                    href="https://github.com/skailand7/pokemon-app"
                    target="_blank"
                    className="flex p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-200 rounded-xl "
                  >
                    <img
                      src="https://img.icons8.com/color-glass/344/github.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p className="text-indigo-700 font-bold">See repository</p>
                  </a>
                  <a
                    href="https://skailand7.github.io/pokemon-app/"
                    target="_blank"
                    className="flex p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-200 rounded-xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <p className="text-indigo-700 font-bold">
                      See live project
                    </p>
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
          <div className="border border-gray-500 bg-gray-100 rounded-2xl w-full">
            <div className="flex flex-col items-center space-y-8 p-4">
              <img
                src={petcare}
                alt=""
                className="h-44 w-full border-2 border-gray-300"
              />
              <div className="">
                <p className="text-center text-gray-500 -mb-2">
                  Tailwind Landing Page
                </p>
                <p className="text-center font-bold text-xl text-gray-700">
                  Pet Care Center
                </p>
                <p className="text-md mt-8 text-gray-600">
                  Made for a vet center, designed using mobile first and
                  Tailwind CSS Framework.
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                  <a
                    href="https://github.com/skailand7/pet-care"
                    target="_blank"
                    className="flex p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-200 rounded-xl "
                  >
                    <img
                      src="https://img.icons8.com/color-glass/344/github.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p className="text-indigo-700 font-bold">See repository</p>
                  </a>
                  <a
                    href="https://skailand7.github.io/pet-care"
                    target="_blank"
                    className="flex p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-200 rounded-xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <p className="text-indigo-700 font-bold">
                      See live project
                    </p>
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
          <div className="border border-gray-500 bg-gray-100 rounded-2xl w-full">
            <div className="flex flex-col items-center space-y-8 p-4">
              <img
                src={restaurant}
                alt=""
                className="h-44 w-full border-2 border-gray-300"
              />
              <div className="">
                <p className="text-center text-gray-500 -mb-2">React Hooks</p>
                <p className="text-center font-bold text-xl text-gray-700">
                  Restaurant
                </p>
                <p className="text-md mt-8 text-gray-600">
                  It shows the plates, breakfast, dinner and coffe. Responsive
                  design, use of React hooks and shopping cart (not backend
                  yet).
                </p>
                <div className="flex justify-center space-x-4 mt-8">
                  <a
                    href="https://github.com/skailand7/restaurant"
                    target="_blank"
                    className="flex p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-200 rounded-xl "
                  >
                    <img
                      src="https://img.icons8.com/color-glass/344/github.png"
                      alt=""
                      className="h-8 w-8"
                    />
                    <p className="text-indigo-700 font-bold">See repository</p>
                  </a>
                  <a
                    href="https://skailand7.github.io/restaurant/"
                    target="_blank"
                    className="flex p-2 space-x-2 justify-center items-center border border-indigo-700 bg-indigo-200 rounded-xl "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-indigo-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <p className="text-indigo-700 font-bold">
                      See live project
                    </p>
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
        </div>
      </div>
    </section>
  );
};

export { Projects };
