import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./hero.css";
function Quiz() {
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);
  const [message, setMessage] = useState("");
  const params = useParams();

  const id = params.id;
  useEffect(() => {
    if (!id) {
      return <></>;
    }
    // console.log("making fetch request - quizPage", id);
    fetch(`http://localhost:3030/lesson/${id}`)
      .then((res) => res.json())
      .then((json) => {
        // console.log("What's showing - quizPage", json);
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
  // randomize array

  function shuffleOtherWords(otherWords) {
    console.log("logging  otherWords:", otherWords);
    for (let i = otherWords.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [otherWords[i], otherWords[j]] = [otherWords[j], otherWords[i]];
    }
  }
  shuffleOtherWords(otherWords);
  //////
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
      // setMessage("");
    } else {
      // countIncorrect - 1;
      score += countIncorrect;
      setMessage("Incorrect, try again");
      // setMessage("");
    }
  };

  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <button>Exercise</button>
        </li>
      </ul>
      <div className="quiz-container">
        {index > 0 && (
          <button onClick={preLessonWordSlideHandler} className="btn-previous">
            prev
          </button>
        )}

        <ul className="arabic-word">
          <div className="msg"> {message}</div>
          <div className="arabic-word-quiz">
            {lesson.words[index].arabicWord}
          </div>
          {options.map((option) => {
            return (
              <button
                className="word-options-btns"
                onClick={() => optionsHandler(option, currentWord)}
              >
                {option.englishWord}
              </button>
            );
          })}
        </ul>

        {index + 1 < lesson.words.length && (
          <button onClick={lessonWordSlideHandler} className="btn-next">
            Next
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;
