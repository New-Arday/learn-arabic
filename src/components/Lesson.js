import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./lesson.css";

function Lesson({ setLessons, lessons }) {
  const [lesson, setLesson] = useState(null);
  const [index, setIndex] = useState(0);

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
      <Link to="quiz">Quiz</Link>
      <div className="lesson-cont">
        {/* <div className="lesson-container"> */}
        {/* {HEADER starts} */}
        <h2 className="title-topic">{lesson.lesson}</h2>
        {/* <div className="header-lesson"> */}
        {/* <div className="header-img-text"> */}

        {/* <div className="topic-title-and-text">
              <h2 className="title-topic">{lesson.lesson}</h2>
              <p>{lesson.paragraph}</p>
            </div> */}
        {/* {<img src={lesson.image} alt="" className="headers-img " />} */}

        <div className="test-wrap">
          <ul>
            {index + 1 < lesson.words.length && (
              <button onClick={lessonWordSlideHandler} className="btn-next">
                Next
              </button>
            )}
            <li>
              <div className="word-content">
                {lesson.words[index].genderType}
                <img
                  src={lesson.words[index].image}
                  alt=""
                  className="img-words"
                />
                <div className="english-word">
                  {lesson.words[index].englishWord}
                </div>
              </div>
              <div className="arabic-word">
                {lesson.words[index].arabicWord}
              </div>
            </li>
            {index > 0 && (
              <button
                onClick={preLessonWordSlideHandler}
                className="btn-previous"
              >
                prev
              </button>
            )}
          </ul>

          {/* </div> */}
        </div>

        {/* </div> */}
        {/* {HEADER ends} */}
        {/* <div className="main">
          <div className="lesson-content">
            <div className="ul-words"> */}
        {/* {index > 0 && (
                <button
                  onClick={preLessonWordSlideHandler}
                  className="btn-previous"
                >
                  prev
                </button>
              )}
               {index + 1 < feminine.length && (
                <button onClick={lessonWordSlideHandler} className="btn-next">
                  Next
                </button>
              )} */}
        {/* Masculine Words */}
        {/* <ul>
                <div>
                  <li>
                    <div className="word-content">
                      <div className="english-word">
                        {masculine[index].englishWord}
                      </div>
                      <img
                        src={masculine[index].image}
                        alt=""
                        className="img-words"
                      />

                      <div className="arabic-word">
                        {masculine[index].arabicWord}
                      </div>
                    </div>
                  </li>
                </div>
              </ul> */}
        {/* Feminine Words */}
        {/* {
                <ul>
                  <div>
                    <li>
                      <div className="word-content">
                        <div className="english-word">
                          {feminine[index].englishWord}
                        </div>
                        <img
                          src={feminine[index].image}
                          alt=""
                          className="img-words"
                        />

                        <div className="arabic-word">
                          {feminine[index].arabicWord}
                        </div>
                      </div>
                    </li>
                  </div>
                </ul>
              } */}
        {/* {index + 1 < feminine.length && (
                <button onClick={lessonWordSlideHandler} className="btn-next">
                  Next
                </button>
              )} */}
        {/* </div>
          </div>
        </div>{" "} */}
        {/* <div className="sidebar">
          <h2>Lessons</h2>{" "}
          <ul>
            {" "}
            {lessons.map((currentLesson) => {
              if (currentLesson.id === lesson.id) {
                return <></>;
              }
              return (
                <li key={currentLesson.id}>
                  <div className="list-of-lessons">
                    {currentLesson.lesson}
                    <Link to={`/lesson/${currentLesson.id}`}>
                      <button>Start</button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ul>
        </div> */}
        {/* <div className="footer">Footer</div> */}
        {/* </div> */}
      </div>
    </>
  );
}

export default Lesson;
