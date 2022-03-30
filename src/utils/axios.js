import axios from "axios";

const url = `${process.env.REACT_APP_API_BASE_URL}`;
const secret = `${process.env.REACT_APP_API_KEY}`;

const instance = axios.create({
  baseURL: url,
  headers: {
    Authorization: secret,
  },
});

export default instance;
