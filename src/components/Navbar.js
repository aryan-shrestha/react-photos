import React, { useState } from "react";
import "../assets/css/navBar.css";
import useFetchImage from "../utils/useFetchImage";

function Navbar() {
  const [searchTerm, setSearchTerm] = useState(null);
  useFetchImage({ searchTerm: searchTerm });

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(e.target.searchField.value);
  }

  return (
    <div className="navbar-container">
      <div className="logo">
        <i className="fas fa-camera-retro"></i> <h1>Photos</h1>
      </div>
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input-field"
          placeholder="Search..."
          name="searchField"
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default Navbar;
