import React from "react";
import "./hero.css";
function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__text-box">
          <div className="hero__container-space">
            <h1 className="hero__heading-primary">Gateway to Arabic</h1>

            <p className="hero__description">
              Our mission at Gateway to Arabic is to make learning Arabic easier
              for students who want to learn basic Arabic words and phrases. We
              do this by creating interactive learning opportunities that are
              fun, engaging, and easy to use.
            </p>
            <a
              href="#lessons"
              className="btn btn--full start-btn margin-right-sm"
            >
              Start learning
            </a>
            <a href="#how-it-works" className="btn btn--full margin-right-sm">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
