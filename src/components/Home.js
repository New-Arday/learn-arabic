import React from "react";
import kidLearning from "./img/kid-learning.jpg";
import AdultLearning from "./img/adult.jpg";
import ParentAndChildLearning from "./img/parent-child-learning.jpg";
import ChildrenLearning from "./img/kids-using-laptop.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./home.css";
import "./hero.css";

import Footer from "./Footer";
import Header from "./Header";
function Home({ setLessons, lessons }) {
  const [index, setIndex] = useState(0);

  const testimonialSlideHandler = () => {
    console.log("clicked: next btn");
    setIndex(index + 1);
  };
  const preTestimonialSlideHandler = () => {
    console.log("clicked: prev btn");
    setIndex(index - 1);
  };
  const image = [
    `{<img src={ChildrenLearning} alt="" className="testimonial-image"/>`,
    `<img src={AdultLearning} alt="" className="testimonial-image" />}`,
    ` <img
    src={ParentAndChildLearning}
    alt=""
    className="testimonial-image"
  />}`,
  ];
  // console.log("images:", image);

  return (
    <>
      {/*  LAYERED SECTION - AFTER HERO */}

      <section className="layered-images">
        <div className="layered">
          <div className="layeered-text-box">
            <h2 className="heading-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
              .
            </h2>
            <p className="layered-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              cum itaque, iure maxime repudiandae fugiat vero corrupti
              voluptatibus magnam nisi! Sit reiciendis minima porro expedita,
              animi architecto molestias quis veniam?
            </p>
            {/* <link to={"/lessons"}>
              <button
                href="#"
                className="layered-btn btn--full margin-right-sm"
              >
                Start learning
              </button>
            </link> */}
            {/* <a href="#" className="layered-btn btn--outline">
              Learn more
            </a> */}
            <Link
              to={`/lessons`}
              className="layered-btn btn--full margin-right-sm"
            >
              Start learning
            </Link>
            <Link
              to={`/#test`}
              className="layered-btn btn--full margin-right-sm"
              id="#test"
            >
              Learn more
            </Link>
            {/* HOW TO LINK A BUTTON TO A SECTION IN THE SAME PAGE IN REACT?  */}
            <div className="users">
              <div className="users-profiles">
                <img src={kidLearning} alt="" />
                <img src={kidLearning} alt="" />
                <img src={kidLearning} alt="" />
                <img src={kidLearning} alt="" />
                <img src={kidLearning} alt="" />
              </div>
              <p className="users-text">
                {" "}
                <span>345800</span>, ipsum dolor sit amet.
              </p>
            </div>
          </div>
          <div className="layered-img-box">
            <img src={kidLearning} className="hero-img" alt="" />
          </div>
        </div>
      </section>
      <section className="how-it-works">
        <h2 className="how-it-works-title">How it works section</h2>
        <div className="how-it-works-container">
          <div className="how-it-works-cards">
            CARD SELECT LESSON
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing el!</p>
          </div>
          <div className="how-it-works-cards">
            CARD TAKE LESSON
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing el!</p>
          </div>
          <div className="how-it-works-cards">
            CARD TAKE QUIZ
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing el!</p>
          </div>
        </div>
      </section>

      {/* <Lessons /> */}

      <section className="list-of-lessons-section">
        <h2 className="lessons-list-title">Choose a topic to explore</h2>

        <ul className="list-of-lessons-container">
          <div className="lessons-lists">
            <Link to="/lesson">
              {" "}
              <li>Fruits and Vegetables</li>
            </Link>
          </div>
          <div className="lessons-lists">
            <li>Animals</li>
          </div>
          <div className="lessons-lists">
            {" "}
            <li>Colours</li>
          </div>
          <div className="lessons-lists">
            <li>More lessons a</li>
          </div>
          <div className="lessons-lists">
            <li>More lessons b</li>
          </div>
          <div className="lessons-lists">
            {" "}
            <li>More lessons c</li>
          </div>
        </ul>
      </section>

      {/* TESTIMONIAL SECTION */}

      <section className="testimonial-carousel">
        <img src={ChildrenLearning} alt="" className="testimonial-image" />

        <blockquote className=" testimonial">
          <p className=" testimonial-text">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
            reiciendis iste, numquam possimus!"
          </p>
          <p className=" testimonial-author">Cooper Primary School</p>

          <p className=" testimonial-job-title">Head of Language Department</p>
        </blockquote>

        {index + 1 < image.length && (
          <button
            onClick={testimonialSlideHandler}
            className=" testimonial-btn btn-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {index > 0 && (
          <button
            onClick={preTestimonialSlideHandler}
            className=" testimonial-btn btn-left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="btn-icon "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        <div className="dots">
          <button className="dot dot-fill"> </button>
          <button className="dot"> </button>
          <button className="dot"> </button>
          <button className="dot"> </button>
        </div>

        <img src={AdultLearning} alt="" className="testimonial-image" />
        <blockquote className=" testimonial">
          <p className=" testimonial-text">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
            reiciendis iste, numquam possimus!"
          </p>
          <p className=" testimonial-author">Cooper Primary School</p>

          <p className=" testimonial-job-title">Head of Language Department</p>
        </blockquote>

        <button className=" testimonial-btn btn-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button className=" testimonial-btn btn-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="dots">
          <button className="dot dot-fill"> </button>
          <button className="dot"> </button>
          <button className="dot"> </button>
          <button className="dot"> </button>
        </div>
        <img
          src={ParentAndChildLearning}
          alt=""
          className="testimonial-image"
        />
        <blockquote className=" testimonial">
          <p className=" testimonial-text">
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
            reiciendis iste, numquam possimus!"
          </p>
          <p className=" testimonial-author">Cooper Primary School</p>

          <p className=" testimonial-job-title">Head of Language Department</p>
        </blockquote>

        <button className=" testimonial-btn btn-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
        <button className=" testimonial-btn btn-left">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="btn-icon "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <div className="dots">
          <button className="dot dot-fill"> </button>
          <button className="dot"> </button>
          <button className="dot"> </button>
          <button className="dot"> </button>
        </div>

        {/* </div> */}
        {/* </div> */}
        {/* <div className="testimonial-img">
          {" "}
          <h2>Adult learning</h2>
          <img src={AdultLearning} alt="" className="testimonial-img" />
          <div className="testimonial-txt">
            x Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
            reiciendis saepe. Nobis aliquam impedit consequatur illum cupiditate
            iste, numquam possimus!
          </div>
        </div>
        <div className="testimonial-image">
          <h2>Home schooled child </h2>
          <img
            src={ParentAndChildLearning}
            alt=""
            className="testimonial-image"
          />
          <div className="testimonial-txt">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
            aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
            reiciendis saepe. Nobis aliquam impedit consequatur illum cupiditate
            iste, numquam possimus!
          </div>
        </div> */}
        {/* </div> */}
      </section>
      <Footer />
    </>
  );
}

export default Home;
