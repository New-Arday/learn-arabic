import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./hero.css";
import "./lesson.css";
import Header from "./Header";
function Quiz({ setLessons, lessons }) {
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const params = useParams();

  const id = params.id;
  useEffect(() => {
    if (!id) {
      return <></>;
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
    setMessage("");
  };
  const preLessonWordSlideHandler = () => {
    setIndex(index - 1);
    setMessage("");
  };
  const countCorrect = 0;
  const countIncorrect = 0;
  let score = 0;

  const currentWord = lesson.words[index];
  const otherWords = lesson.words.filter((word) => word != currentWord);
  console.log(otherWords);

  function shuffleOtherWords(otherWords) {
    console.log("logging  otherWords:", otherWords);
    for (let i = otherWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherWords[i], otherWords[j]] = [otherWords[j], otherWords[i]];
    }
  }
  shuffleOtherWords(otherWords);

  const options = [otherWords[0], otherWords[1], currentWord];
  console.log("logging  options:", options);
  function shuffleOptions(options) {
    console.log("logging  options:", options);
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
  }
  shuffleOptions(options);
  const optionsHandler = (option) => {
    if (option === currentWord) {
      // countCorrect + 1;
      score += countCorrect;
      setMessage("Correct!");
    } else {
      // countIncorrect - 1;
      score += countIncorrect;
      setMessage("Incorrect, try again");
    }
  };

  return (
    <>
      <Header />
      {/* <ul>
        {lessons.map((lesson) => {
          return (
            <li key={lesson.id}>
              <div className="list-of-lessons">
                {lesson.lesson}
                <Link to={`/lesson/${lesson.id}`}>{lesson.lesson}</Link>
              </div>
            </li>
          );
        })}
      </ul> */}
      <h2 className="title-topic">{lesson.lesson}</h2>

      <div className="quiz-carousel">
        <p className="msg"> {message}</p>

        <div className=" quiz-arabic-word">
          {lesson.words[index].arabicWord}
        </div>
        <div className="quiz-text">
          {options.map((option) => {
            return (
              <button
                className="quiz-word-options-btns"
                onClick={() => optionsHandler(option, currentWord)}
              >
                {option.englishWord}
              </button>
            );
          })}
        </div>
        {index > 0 && (
          <button
            onClick={preLessonWordSlideHandler}
            className="testimonial-btn quiz-btn-left"
          >
            prev
          </button>
        )}

        {index + 1 < lesson.words.length && (
          <button
            onClick={lessonWordSlideHandler}
            className="testimonial-btn quiz-btn-right"
          >
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;
