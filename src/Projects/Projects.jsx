import React from "react";

const Project = () => {
  return (
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
  );
};

export { Project };
