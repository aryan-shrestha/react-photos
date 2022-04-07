import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/login.css";

function Login() {
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
          <form action="">
            <div className="input-container">
              <label htmlFor="email"></label>
              <input
                type="email"
                placeholder="example@email.com"
                name="email"
              />
            </div>
            <div className="input-container">
              <input type="password" placeholder="password" />
            </div>
            <button type="submit" className="login-btn">
              Login
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
