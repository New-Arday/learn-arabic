import React from "react";
import kidLearning from "./img/kid-learning.jpg";
import AdultLearning from "./img/adult.jpg";
import ParentAndChildLearning from "./img/parent-child-learning.jpg";
import card1 from "./img/learn-arabic-laptop.jpg";
import card2 from "./img/card-1.avif";
import quiz from "./img/quiz.jpg";
import pickLesson from "./img/pick-lesson.avif";
import ChildrenLearning from "./img/kids-using-laptop.jpg";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Hero from "./Hero";
import "./home.css";
import "./hero.css";
import Footer from "./Footer";

function Home({ setLessons, lessons, setLesson, lesson }) {
  const [index, setIndex] = useState(0);
  const testimonialSlideHandler = () => {
    console.log("clicked: next btn");
    setIndex(index + 1);
  };

  /*//////////////////////////////// */
  useEffect(() => {
    fetch("http://localhost:3030/lesson")
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, []);

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
      <div className="home-container">
        <div className="hero-main-page">
          <div className="header-container">
            <div className="header-container-space">
              <div className="heading-secondary">
                <p className="arabic-title">مِفْتَاحٌالْعَرَبِيَّة</p>
                <h1>Gateway to Arabic</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit aperiam quis doloribus ipsum accusantium tempore
                alias! Laudantium unde libero nobis adipisci odio tenetur, quia,
                ratione commodi rerum sunt optio ullam.
              </p>
              <a
                href="#lessons"
                className="layered-btn btn--full margin-right-sm"
              >
                Start learning
              </a>
              <a
                href="#how-it-works"
                className="layered-btn btn--full margin-right-sm"
              >
                Learn more
              </a>
            </div>
          </div>
          {/* <div className="users">
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
            </div> */}
        </div>

        {/* /////////////////////////////////////////////////// */}

        {/* </section> */}
        {/* <div className="layered">
          <div className="layeered-text-box">
            <h2 className="heading-secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </h2>
            <p className="layered-description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
              cum itaque, iure maxime repudiandae fugiat vero corrupti
              voluptatibus magnam nisi! Sit reiciendis minima porro expedita,
              animi architecto molestias quis veniam?
            </p>

            <a
              href="#lessons"
              className="layered-btn btn--full margin-right-sm"
            >
              Start learning
            </a>
            <a href="#steps" className="layered-btn btn--full margin-right-sm">
              Learn more
            </a>

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
            <div className="layered-img-box">
              <img src={kidLearning} className="hero-img" alt="" />
            </div>
          </div>
          </div> */}
        {/* </div>
          <div className="layered-img-box">
            <img src={kidLearning} className="hero-img" alt="" />
          </div> */}
        {/* /////////////////////////////////////////////////// */}

        {/* HOW IT WORKS SECTION */}
        <div className="how-it-works-bg">
          <section className="section-how-it-works" id="how-it-works">
            <div className="how-it-works-container">
              {/* <spa className="sub-heading">How it Works</spa> */}
              <h2 className="heading-secondary-how">How it works</h2>
            </div>
            <div className="how-it-works-container grid grid--2-cols">
              {/* STEP 1 */}

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

              {/* STEP 2 */}

              <div className="image-box">
                <p className="steps">02</p>
              </div>
              <div className="text-box">
                <h3 className="heading-h3">About the lesson</h3>

                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, impedit! Temporibus rerum nisi libero totam quis labore
                  itaque, perspiciatis deserunt atque eveniet corrupti
                  consequatur in neque quos accusantium adipisci at?
                </p>
              </div>
              {/* STEP 3 */}

              <div className="text-box">
                <p></p>
                <h3 className="heading-h3">Quiz Time</h3>

                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, impedit! Temporibus rerum nisi libero totam quis labore
                  itaque, perspiciatis deserunt atque eveniet corrupti
                  consequatur in neque quos accusantium adipisci at?
                </p>
              </div>
              <div className="image-box">
                <p className="steps">03</p>
              </div>
            </div>
          </section>
        </div>

        {/* /////////////////////////////////////////////////// */}

        {/* <Lessons /> */}
        <div className="list-of-lessons-bg" id="lessons">
          <section className="list-of-lessons-section  cards grid--1-cols grid">
            <h2 className="lessons-list-title heading-secondary-how ">
              Choose a topic to explore
            </h2>
            <ul className="list-of-lessons-container ">
              {lessons.map((lesson) => {
                return (
                  <div key={lesson.id} className="lessons-lists">
                    <div className="topic-img">
                      {" "}
                      <img src={lesson.image} />
                    </div>
                    <Link to={`/lesson/${lesson.id}`} className="topic-name">
                      <div className="topic-name"> {lesson.lesson}</div>
                    </Link>
                  </div>
                );
              })}
            </ul>
          </section>
        </div>
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

            <p className=" testimonial-job-title">
              Head of Language Department
            </p>
          </blockquote>

          {index + 1 < image.length && (
            <button
              onClick={testimonialSlideHandler}
              className=" testimonial-btn btn-right"
            ></button>
          )}

          {index > 0 && (
            <button
              onClick={preTestimonialSlideHandler}
              className=" testimonial-btn btn-left"
            ></button>
          )}

          <div className="dots">
            <button className="dot dot-fill"> </button>
            <button className="dot"> </button>
            <button className="dot"> </button>
            <button className="dot"> </button>
          </div>

          {/* <img src={AdultLearning} alt="" className="testimonial-image" />
          <blockquote className=" testimonial">
            <p className=" testimonial-text">
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui,
              aperiam aspernatur. Odit fugit ipsam ab aut iste cumque tempore
              reiciendis iste, numquam possimus!"
            </p>
            <p className=" testimonial-author">Cooper Primary School</p>

            <p className=" testimonial-job-title">
              Head of Language Department
            </p>
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

            <p className=" testimonial-job-title">
              Head of Language Department
            </p>
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
          </div> */}
          {/* //////////////////////////////////////////////////////////////////////////////////////// */}
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
      </div>
      <Footer />
    </>
  );
}

export default Home;
