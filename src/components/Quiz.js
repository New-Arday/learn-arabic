import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./hero.css";
import "./lesson.css";
import Header from "./Header";
const URL = process.env.REACT_APP_API_URL;

function Quiz() {
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const displayQuizBtn = false;
  const params = useParams();

  const id = params.id;
  useEffect(() => {
    if (!id) {
      return <></>;
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
    setMessage("");
  };
  const preLessonWordSlideHandler = () => {
    setIndex(index - 1);
    setMessage("");
  };

  const currentWord = lesson.words[index];
  const otherWords = lesson.words.filter((word) => word !== currentWord);

  function shuffleOtherWords(otherWords) {
    for (let i = otherWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherWords[i], otherWords[j]] = [otherWords[j], otherWords[i]];
    }
  }
  shuffleOtherWords(otherWords);

  const options = [otherWords[0], otherWords[1], currentWord];

  function shuffleOptions(options) {
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
  }
  shuffleOptions(options);
  const optionsHandler = (option) => {
    if (option === currentWord) {
      setMessage("Correct!");
    } else {
      setMessage("Incorrect, try again");
    }
  };

  return (
    <>
      <Header displayQuizBtn={displayQuizBtn} />

      <h2 className="title-topic">{lesson.lesson}</h2>
      <div className="quiz-carousel">
        <p className="msg"> {message}</p>
        <div className=" quiz-arabic-word">
          {lesson.words[index].arabicWord}
        </div>
        <div className="quiz-text">
          {options.map((option, index) => {
            return (
              <button
                key={index}
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
