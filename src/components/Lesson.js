import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import "./lesson.css";
import "./media.css";
import "./quiz.css";
const URL = process.env.REACT_APP_API_URL;
function Lesson({ setLessons, lessons }) {
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);
  const displayQuizBtn = true;
  const params = useParams();

  useEffect(() => {
    fetch(`${URL}/lesson`)
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, [setLessons]);

  const id = params.id;
  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`${URL}/lesson/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setLesson(json.lesson);
      });
  }, [id]);
  if (!lesson) {
    return <></>;
  }

  const lessonWordSlideHandler = () => {
    setIndex(index + 1);
  };
  const preLessonWordSlideHandler = () => {
    setIndex(index - 1);
  };

  return (
    <>
      <Header displayQuizBtn={displayQuizBtn} />

      <div>{lessons.lesson}</div>

      <h2 className="title-topic">{lesson.lesson}</h2>
      <p className="lesson-paragraph">{lesson.paragraph}</p>
      <div className="lesson-carousel">
        <img src={lesson.words[index].image} alt="" className="lesson-image" />
        <div className=" lesson-text">
          <p className=" arabic-word ">{lesson.words[index].arabicWord}</p>

          <p className=" english-word">{lesson.words[index].englishWord}</p>
          <p className="genderType">{lesson.words[index].genderType}</p>
        </div>
        {index + 1 < lesson.words.length && (
          <button
            onClick={lessonWordSlideHandler}
            className=" testimonial-btn btn-right"
          >
            Next
          </button>
        )}
        {index + 1 === lesson.words.length && (
          <button className="lesson-btn btn-right">END</button>
        )}
        {index > 0 && (
          <button
            onClick={preLessonWordSlideHandler}
            className="testimonial-btn btn-left"
          >
            prev
          </button>
        )}
      </div>
    </>
  );
}

export default Lesson;
