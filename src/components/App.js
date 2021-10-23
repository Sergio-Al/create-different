import React from "react";
import HeroImage from "../assets/images/Hero-Laptop.png";

function App() {
  return (
    <section className="app-main">
      <div className="container app-section">
        <div className="app-section-div">
          <h1 className="app-section-title">
            MAKING <br />
            <span className="app-section-special-text">SOMETHING </span>
            <br />
            DIFFERENT <br />
          </h1>

          <a className="principal-link app-section-link" href="#working">
            <button className="principal-button app-section-button">
              DISCOVER
            </button>
          </a>
        </div>
        <div className="app-section-div app-section-image">
          <img className="laptop-image" src={HeroImage} alt="Laptop" />
        </div>
      </div>
    </section>
  );
}

export default App;
