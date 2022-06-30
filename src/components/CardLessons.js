import React from "react";
import "../components/cardLessons.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const URL = process.env.REACT_APP_API_URL;
function CardLessons({ setLessons, lessons }) {
  useEffect(() => {
    fetch(`${URL}/lesson`)
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, [setLessons]);

  return (
    <section
      className="list-of-lessons-section  cards grid--1-cols grid"
      id="lessons"
    >
      <h2 className="lessons-list-title">Choose a topic to explore</h2>
      <ul className="list-of-lessons-container">
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
  );
}

export default CardLessons;
