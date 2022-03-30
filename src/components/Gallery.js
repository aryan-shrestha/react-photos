import React from "react";
import useFetchImage from "../utils/useFetchImage";
import Image from "./Image";
import "../assets/css/gallery.css";

function Gallery() {
  const [images, setImages] = useFetchImage();

  console.log(images);

  return (
    <div className="gallery-container">
      {console.log("rendered")}
      {images.map((image) => {
        return <Image url={image.src.medium} />;
      })}
    </div>
  );
}

export default Gallery;
