import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./header.css";
function Header() {
  return (
    <>
      <header className="header">
        <h1 className="text-log"> مِفْتَاحٌالْعَرَبِيَّة</h1>
        <nav className="main-nav">
          <ul className="nav-list">
            <li>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li className="links nav-cta">
              <Link to="/#lessons" className="links">
                Lessons
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
