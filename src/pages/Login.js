import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useHistory } from "react-router-dom";

import Alert from "../components/Alert";
import Loading from "../components/Loading";
import "../assets/css/login.css";

function Login() {
  const auth = getAuth(app);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    if (isLoading) return;
    setIsLoading(true);
    e.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        setIsLoading(false);
        setError("");
        history.replace("/");
      })
      .catch((err) => {
        setError("Invalid email or password");
        setIsLoading(false);
      });
  }

  function handleInput(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="login-container">
      <div className="background-container">
        <div className="background-image-container">
          <img
            src="https://images.pexels.com/photos/10368604/pexels-photo-10368604.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="image"
          />
        </div>
        <div className="background-image-container">
          <img
            src="https://images.pexels.com/photos/11511732/pexels-photo-11511732.jpeg?cs=srgb&dl=pexels-zeeshaan-shabbir-11511732.jpg&fm=jpg"
            alt=""
            className="image"
          />
        </div>
        <div className="background-image-container">
          <img
            src="https://images.pexels.com/photos/7116214/pexels-photo-7116214.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            alt=""
            className="image"
          />
        </div>

        <div className="background-image-container">
          <img
            src="https://images.pexels.com/photos/10406843/pexels-photo-10406843.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
            className="image"
          />
        </div>

        <div className="background-image-container">
          <img
            src="https://images.pexels.com/photos/4431250/pexels-photo-4431250.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="image"
          />
        </div>

        <div className="background-image-container">
          <img
            src="https://images.pexels.com/photos/4654186/pexels-photo-4654186.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="image"
          />
        </div>
      </div>
      <div className="foreground-container">
        <div className="form-container">
          <h1>Welcome Back to Photos</h1>
          <form onSubmit={handleSubmit}>
            {error !== "" && <Alert errorMessage={error} />}
            <div className="input-container">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="example@email.com"
                name="email"
                value={formData.email}
                onChange={handleInput}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="password"
                name="password"
                value={formData.password}
                onChange={handleInput}
              />
            </div>
            <button type="submit" className="login-btn">
              {isLoading ? <Loading /> : "Login"}
            </button>
          </form>
          <p>
            Do not have an account? <Link to="#">Click Here</Link> to register
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
