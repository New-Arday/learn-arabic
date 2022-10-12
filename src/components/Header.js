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
       
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;

