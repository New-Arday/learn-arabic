import React from "react";
import "../components/howItWorks.css";
function HowItWorks() {
  return (
    <>
      <div className="how-it-works-bg" id="how-it-works">
        {/* <section className="section-how-it-works" id="how-it-works"> */}
        {/* <div className="how-it-works-container"> */}

        <h2 className="howItWorks-title">How it works</h2>
        {/* </div> */}
        <div className="how-it-works-container grid grid--2-cols">
          <div className="text-box">
            <h3 className="heading-h3">Choose a lesson</h3>
            <div className="how-description">
              <a href="#lessons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="list-icons list-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className="image-box">
            <p className="steps">01</p>
          </div>

          <div className="image-box">
            <p className="steps">02</p>
          </div>
          <div className="text-box">
            <h3 className="heading-h3">About the lesson</h3>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              impedit! Temporibus rerum nisi libero totam quis labore itaque,
              perspiciatis deserunt atque eveniet corrupti consequatur in neque
              quos accusantium adipisci at?
            </p>
          </div>
          <div className="text-box">
            <p></p>
            <h3 className="heading-h3">Quiz Time</h3>

            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              impedit! Temporibus rerum nisi libero totam quis labore itaque,
              perspiciatis deserunt atque eveniet corrupti consequatur in neque
              quos accusantium adipisci at?
            </p>
          </div>
          <div className="image-box">
            <p className="steps">03</p>
          </div>
        </div>
        {/* </section> */}
      </div>
    </>
  );
}

export default HowItWorks;
