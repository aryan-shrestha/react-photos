import React from "react";
import "../assets/css/navBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <i className="fas fa-camera-retro"></i> <h1>Photos</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
