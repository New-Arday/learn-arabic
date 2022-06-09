import React from "react";
import AdultLearning from "./img/adult.jpg";
import ParentAndChildLearning from "./img/parent-child-learning.jpg";
import ChildrenLearning from "./img/kids-using-laptop.jpg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./home.css";
import "./hero.css";
import "./media.css";
import Footer from "./Footer";
const URL = process.env.REACT_APP_API_URL;
function Home({ setLessons, lessons }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch(`${URL}/lesson`)
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, [setLessons]);

  const preTestimonialSlideHandler = () => {
    setIndex(index - 1);
  };

  return (
    <>
      <div className="home-container ">
        <div className="hero-main-page">
          <div className="header-container">
            <div className="header-container-space">
              <div className="heading-secondary">
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
                className="layered-btn btn--full start-btn margin-right-sm"
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
        </div>

        <div className="how-it-works-bg">
          <section className="section-how-it-works" id="how-it-works">
            <div className="how-it-works-container">
              <h2 className="heading-secondary-how">How it works</h2>
            </div>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sequi, impedit! Temporibus rerum nisi libero totam quis labore
                  itaque, perspiciatis deserunt atque eveniet corrupti
                  consequatur in neque quos accusantium adipisci at?
                </p>
              </div>
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
                      <img src={lesson.image} alt="" />
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

        <section className="testimonial-carousel grid grid--3-cols">
          <div className="per-user">
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
          </div>

          {index > 0 && (
            <button
              onClick={preTestimonialSlideHandler}
              className=" testimonial-btn btn-left"
            ></button>
          )}

          <div className="per-user">
            <img src={AdultLearning} alt="" className="testimonial-image" />
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
          </div>
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
          <div className="per-user">
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
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Home;
