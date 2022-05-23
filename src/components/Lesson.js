import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./lesson.css";

function Lesson({ setLessons, lessons }) {
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const params = useParams();

  /* GET All lessons */
  useEffect(() => {
    fetch("http://localhost:3030/lesson")
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, []);

  const id = params.id;
  useEffect(() => {
    if (!id) {
      return;
    }

    fetch(`http://localhost:3030/lesson/${id}`)
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
  const finishLessonHandler = () => {
    setFinished(true);
  };
  const preLessonWordSlideHandler = () => {
    setIndex(index - 1);
  };
  // console.log("logging lesson lesson page - line 42:", lesson);

  // const masculine = lesson.words.filter(
  //   (word) => word.genderType === "Masculine"
  // );

  // console.log("logging masculine:", masculine);
  // console.log("logging feminine:", feminine);

  return (
    <>
      <ul className="lessons">
        {lessons.map((lesson) => {
          return (
            <li key={lesson.id}>
              <Link to={`/lesson/${lesson.id}`}>{lesson.lesson}</Link>
            </li>
          );
        })}
      </ul>

      <div>{lessons.lesson}</div>

      {finished && (
        <Link to="quiz">
          <button>Quiz</button>
        </Link>
      )}
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
          <button
            onClick={finishLessonHandler}
            className="lesson-btn btn-right"
          >
            END
          </button>
        )}
        {index > 0 && (
          <button
            onClick={preLessonWordSlideHandler}
            className="testimonial-btn btn-left"
          >
            prev
          </button>
        )}

        <div className="lesson-dots">
          <button className="lesson-dot dot-fill"> </button>
          <button className="lesson-dot"> </button>
          <button className="lesson-dot"> </button>
          <button className="lesson-dot"> </button>
        </div>
      </div>
    </>
  );
}

export default Lesson;
