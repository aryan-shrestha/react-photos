import React from "react";

import Image from "./Image";

import "../assets/css/gallery.css";

function Gallery() {
  return (
    <div className="gallery-container">
      <Image url="https://images.pexels.com/photos/11012766/pexels-photo-11012766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Image url="https://images.pexels.com/photos/9423179/pexels-photo-9423179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Image url="https://images.pexels.com/photos/11341064/pexels-photo-11341064.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <Image url="https://images.pexels.com/photos/11556911/pexels-photo-11556911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
    </div>
  );
}

export default Gallery;
