import React, { useContext } from "react";
import "../assets/css/navBar.css";
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../firebase/firebase";
import { useHistory } from "react-router-dom";
import AppContext from "../utils/store/AppContext";

function NavBar() {
  const auth = getAuth(app);
  const history = useHistory();
  const [isLoggedIn, user] = useContext(AppContext);

  function logout() {
    signOut(auth)
      .then((res) => {
        history.replace("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="navbar-container">
      <div className="logo">
        <i className="fas fa-camera-retro"></i> <h1>Photos</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="#" className="nav-link" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
