import { useState, useEffect } from "react";
import axios from "./axios";

function useFetchImage() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get("curated/").then((res) => {
      setImages(res.data.photos);
    });
  }, []);

  return [images, setImages];
}

export default useFetchImage;
