import React from "react";
import "./Main.css";
import projectPoke from "../project-pk.png";
import yardSale from "../yard-sale.png";

const Main = () => {
  return (
    <section className="main-container">
      <div className="about-me">
        <div className="short-text">
          <p>
            I'm currently learning new technologies and I'm passionate about web
            development. We can create nice pages 😎 Let's get in touch!
          </p>
        </div>
      </div>
      <div className="skill-bar">
        <p className="section-title">Skills:</p>
        <div className="skill-icons">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <p>HTML</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
              alt="css"
            />
            <p>CSS</p>
          </div>
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
              alt="javascript"
            />
            <p>JavaScript</p>
          </div>
          <div>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              alt="React"
            />
            <p>React</p>
          </div>
        </div>
      </div>
      <section className="projects-bar">
        <p className="section-title">Here you go some projects I made :)</p>
        <div className="projects-container">
          <div className="single-project">
            <img src={projectPoke} alt="" />
            <div className="card-project">
              <span>API consume</span>
              <h4>Pokemon App</h4>
              <div className="badges">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
              </div>
              <p>
                I wanted to practice fetch, promises, DOM management and arrays.
              </p>
            </div>
          </div>
          <div className="single-project">
            <img src={yardSale} alt="" />
            <div className="card-project">
              <span>Made in React</span>
              <h4>Yard Sale</h4>
              <div className="badges">
                <span>HTML</span>
                <span>CSS</span>
                <span>JAVASCRIPT</span>
                <span>REACT</span>
              </div>
              <p>
                My very first react project wtih hooks. It's an e-commerce with
                shopping-cart.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
export { Main };
