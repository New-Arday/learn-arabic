import React from "react";
import "./hero.css";
function Hero() {
  return (
    <>
      <div className="hero-img">
        <div className="hero-container">
          <div className="hero-container-space">
            <div className="hero-title">
              <h1>Gateway to Arabic</h1>
            </div>
            <p className="hero-p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reprehenderit aperiam quis doloribus ipsum accusantium tempore
              alias! Laudantium unde libero nobis adipisci odio tenetur, quia,
              ratione commodi rerum sunt optio ullam.
            </p>
            <a
              href="#lessons"
              className="hero-btn btn--full start-btn margin-right-sm"
            >
              Start learning
            </a>
            <a
              href="#how-it-works"
              className="hero-btn btn--full margin-right-sm"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
