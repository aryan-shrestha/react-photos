import React, { useEffect, useState } from "react";
import useFetchImage from "../utils/useFetchImage";
import Image from "./Image";
import "../assets/css/gallery.css";
import useScroll from "../utils/useScroll";
import Loading from "./Loading";

function Gallery() {
  const [page, setPage] = useState(1);
  const scrollPosition = useScroll();
  const [images, setImages, isLoading, errors] = useFetchImage({ page: page });

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      setPage(page + 1);
    }
  }, [scrollPosition]);

  return (
    <div className="gallery-container">
      <p style={{ position: "absolute", top: "12vh", right: "45%" }}>
        {errors[0]}
      </p>
      {images.map((image) => {
        return <Image url={image.src.medium} />;
      })}
      {isLoading == true && <Loading />}
    </div>
  );
}

export default Gallery;
