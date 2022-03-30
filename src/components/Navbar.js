import React from "react";
import "../assets/css/navBar.css";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo">
        <i className="fas fa-camera-retro"></i> <h1>Photos</h1>
      </div>
      <div className="search-box">
        <input
          type="text"
          className="search-input-field"
          placeholder="Search..."
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
