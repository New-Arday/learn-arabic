import React from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";

function Lessons({ setLessons, lessons }) {
  useEffect(() => {
    fetch("http://localhost:3030/lesson")
      .then((res) => res.json())
      .then((json) => setLessons(json.lessons));
  }, []);
  console.log("log lessons", lessons);
  return (
    <>
      <section className="middle-section">
        <div className="sidebar">
          <h2>Lessons</h2>
          <ol>
            {lessons.map((lesson) => {
              return (
                <li key={lesson.id}>
                  <div className="list-of-lessons">
                    {lesson.lesson}
                    <Link to={`/lesson/${lesson.id}`}>
                      <button>Start</button>
                    </Link>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>
    </>
  );
}

export default Lessons;
