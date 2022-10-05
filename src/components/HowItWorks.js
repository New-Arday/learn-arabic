import React from "react";
import "../components/howItWorks.css";
function HowItWorks() {
  return (
    <div className="how-it-works-bg" id="how-it-works">
      <h2 className="howItWorks-title">How it works</h2>
      <article className="how-it-works-container">
        <div className="text-box margin-top-space">
          <div id="display-on-media">01</div>
          <h3 className="heading-h3">Choose a lesson</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            impedit! Temporibus rerum nisi libero totam quis labore itaque,
            perspiciatis deserunt atque eveniet corrupti consequatur in neque
            quos accusantium adipisci at?
          </p>
          <div className="lesson__link-container">
            <a href="#lessons" className="a-display--block">
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

        <div className="image-box left-arrow ">
          <p className="steps">01</p>
        </div>
      </article>
      {/* step 2 */}
      {/* <article className="how-it-works-container">
        <div className="text-box">
          <p></p>
          <h3 className="heading-h3">Quiz Time</h3>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            impedit! Temporibus rerum nisi libero totam quis labore itaque,
            perspiciatis deserunt atque eveniet corrupti consequatur in neque
            quos accusantium adipisci at?
          </p>
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
        <div className="image-box left-arrow">
          <p className="steps">01</p>
        </div>
      </article> */}
      <article className="how-it-works-container">
        <div className="image-box right-arrow">
          <p className="steps">02</p>
        </div>
        <div className="text-box">
          <div id="display-on-media">02</div>
          <h3 className="heading-h3">About the lesson</h3>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            impedit! Temporibus rerum nisi libero totam quis labore itaque,
            perspiciatis deserunt atque eveniet corrupti consequatur in neque
            quos accusantium adipisci at?
          </p>
        </div>
      </article>
      <article className="how-it-works-container">
        <div className="text-box">
          {/* <p></p> */}
          <div id="display-on-media">03</div>
          <h3 className="heading-h3">Quiz Time</h3>

          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            impedit! Temporibus rerum nisi libero totam quis labore itaque,
            perspiciatis deserunt atque eveniet corrupti consequatur in neque
            quos accusantium adipisci at?
          </p>
        </div>
        <div className="image-box left-arrow">
          <p className="steps">03</p>
        </div>
      </article>
    </div>
  );
}

export default HowItWorks;
