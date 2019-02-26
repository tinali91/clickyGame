import React from "react";

function NavBar(props) {
  return (
    <nav className="shadow-sm navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
      <a className="navbar-brand" href="/">Clicky Game!</a>
      <ul className="navbar-nav">
        <li className="nav-item nav-link">
          Click an image to start!
              </li>
        <li className="nav-item">
          <span className="nav-link">Score: {props.score} | High score: {props.highScore}</span>
        </li>
      </ul>
    </nav>
  )
}
export default NavBar;