import React from "react";
import { useEffect } from "react";
import "./media.css";
import { Link } from "react-router-dom";
const URL = process.env.REACT_APP_API_URL;
console.log(process.env);
function Lessons({ setLessons, lessons }) {
  useEffect(() => {
    fetch(`${URL}/lesson`)
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, [setLessons]);

  return (
    <div className="lessons-container">
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
    </div>
  );
}

export default Lessons;
