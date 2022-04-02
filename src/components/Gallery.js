import React, { useEffect, useState } from "react";
import useFetchImage from "../utils/useFetchImage";
import Image from "./Image";
import "../assets/css/gallery.css";
import useScroll from "../utils/useScroll";
import Loading from "./Loading";

function Gallery() {
  const [page, setPage] = useState(1);
  const scrollPosition = useScroll();
  const [images, setImages, isLoading] = useFetchImage({ page: page });

  useEffect(() => {
    if (scrollPosition >= document.body.offsetHeight - window.innerHeight) {
      setPage(page + 1);
    }
  }, [scrollPosition]);

  return (
    <div className="gallery-container">
      {images.map((image) => {
        return <Image url={image.src.medium} />;
      })}
      {isLoading && <Loading />}
    </div>
  );
}

export default Gallery;
