import { useState, useEffect } from "react";
import axios from "./axios";

function useFetchImage(props) {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function fetch() {
    if (
      props.searchTerm === undefined ||
      props.searchTerm === null ||
      props.searchTerm === ""
    ) {
      let url = `curated/?page=${props.page}&per_page=20`;
      fetchImage(url, fetchRandom);
    } else {
      let url = `search/?page=1&per_page=20&query=${props.searchTerm}`;
      fetchImage(url, fetchSearch);
    }
  }

  function fetchImage(url, func) {
    axios
      .get(url)
      .then((res) => {
        // setImages([...images, res.data.photos]);
        func(res);
      })
      .catch((e) => {
        console.log(e);
        setErrors(["Unable to fetch Images"]);
        setIsLoading(false);
      });
  }

  function fetchSearch(res) {
    console.log([...res.data.photos]);
    setImages([...res.data.photos]);
    console.log(images);
  }

  function fetchRandom(res) {
    setImages([...images, ...res.data.photos]);
    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [props.page]);

  useEffect(() => {
    setIsLoading(true);
    fetch();
  }, [props.searchTerm]);

  return [images, setImages, isLoading, errors];
}

export default useFetchImage;
