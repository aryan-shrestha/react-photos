import React, { useEffect, useState } from "react";
import useFetchImage from "../utils/useFetchImage";
import Image from "./Image";
import "../assets/css/gallery.css";

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
    setPage(1);
    setSearchTerm(e.target.searchField.value);
  }

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      setPage(page + 1);
    }
  }, [scrollPosition]);

  return (
    <div>
      {isLoading && <Loading />}
      <div className="gallery-container">
        <p style={{ position: "absolute", top: "12vh", right: "45%" }}>
          {errors[0]}
        </p>
        {images.map((image) => {
          return <Image url={image.src.medium} />;
        })}
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

export default Gallery;
