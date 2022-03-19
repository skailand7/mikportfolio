import React from "react";
import projectPoke from "../project-pk.png";
import yardSale from "../yard-sale.png";
import restaurant from "../project-restaurant.png";
import petcare from "../project-petcare.png";
const Projects = () => {
  return (
    <section className="p-4 space-y-8 w-full flex justify-center">
      <div className="w-full md:w-4/5 lg:w-3/5 mt-8">
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
