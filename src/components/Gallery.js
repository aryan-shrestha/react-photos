import React, { useEffect, useState } from "react";
import useFetchImage from "../utils/useFetchImage";
import Image from "./Image";
import "../assets/css/gallery.css";
import "../assets/css/navBar.css";
import useScroll from "../utils/useScroll";
import Loading from "./Loading";

function Gallery() {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(null);
  const scrollPosition = useScroll();
  const [images, setImages, isLoading, errors] = useFetchImage({
    page: page,
    searchTerm: searchTerm,
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(e.target.searchField.value);
  }

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      setPage(page + 1);
    }
  }, [scrollPosition]);

  return (
    <div>
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
      <div className="gallery-container">
        <p style={{ position: "absolute", top: "12vh", right: "45%" }}>
          {errors[0]}
        </p>
        {images.map((image) => {
          return <Image url={image.src.medium} />;
        })}
        {isLoading == true && <Loading />}
      </div>
    </div>
  );
}

export default Gallery;
