import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";
import "./media.css";
function Header({ displayQuizBtn }) {
  return (
    <>
      <header className="header">
        {/* <nav className="main-nav"> */}
        {/* <div className="navigation">
          <input
            type="checkbox"
            className="navigation-checkbox"
            id="nav-toggle"
          />
          <label className="nav-btn"> NAV</label>
          <div className="nav-background"> </div>
        </div> */}
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="nav-items">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>
            <li className="nav-items">
              <Link to="/#lessons" className="nav-links">
                Lessons
              </Link>
            </li>
            {displayQuizBtn && (
              <li className="quiz-nav nav-items">
                <Link to="quiz" className="nav-links">
                  Quiz
                </Link>
              </li>
            )}
            {/* {displayQuizBtn && (
              <li className="quiz-nav">
                <Link to="quiz" className="links">
                  Quiz
                </Link>
              </li>
            )} */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

// <li className="links nav-cta nav-items">
// <Link to="/" className="links">
//   Home
// </Link>
// </li>
