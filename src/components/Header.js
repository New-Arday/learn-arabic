import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <button>Lessons</button>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
