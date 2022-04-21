import projectPoke from "../project-pk.png";
import mikCode from "../mikmovies.PNG";
import restaurant from "../project-restaurant.png";
import petcare from "../project-petcare.png";

const projects = [
  {
    img: `${mikCode}`,
    otherTitle: "API consume",
    title: "MikMovies🎥",
    description:
      "Made with Tailwind, NextJS, IMBb API and of course tons of love.",
    repo: "https://github.com/skailand7/movies",
    live: "https://movies-kohl-kappa.vercel.app/",
    stack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
      "https://iconape.com/wp-content/files/gm/82643/svg/next-js.svg",
    ],
  },

  {
    img: `${restaurant}`,
    otherTitle: "React Hooks",
    title: "Restaurant",
    description: "Responsive design, shopping cart (not backend yet).",
    repo: "https://github.com/skailand7/restaurant",
    live: "https://skailand7.github.io/restaurant",
    stack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    ],
  },
  {
    img: `${petcare}`,
    otherTitle: "Tailwind Landing Page",
    title: "Pet Care Center",
    description: "Developed using mobile first and Tailwind CSS Framework.",
    repo: "https://github.com/skailand7/pet-care",
    live: "https://skailand7.github.io/pet-care",
    stack: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    ],
  },
  {
    img: `${projectPoke}`,
    otherTitle: "API consume",
    title: "Pokemon APP",
    description:
      "Project made with promises, DOM and arrays. Also Pokemon API.",
    repo: "https://github.com/skailand7/pokemon-app",
    live: "https://skailand7.github.io/pokemon-app/",
    stack: [
      "https://cdn-icons-png.flaticon.com/512/732/732212.png",
      "https://cdn-icons-png.flaticon.com/512/732/732190.png",
      "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    ],
  },
];

export { projects };
