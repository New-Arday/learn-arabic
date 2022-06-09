import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";
import "./media.css";
function Header({ displayQuizBtn }) {
  return (
    <>
      <header className="header">
        <nav className="main-nav">
          <ul className="nav-list">
            <li className="links nav-cta">
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li className="links nav-cta">
              <Link to="/#lessons" className="links">
                Lessons
              </Link>
            </li>
            {displayQuizBtn && (
              <li className="quiz-nav">
                <Link to="quiz" className="links">
                  Quiz
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
