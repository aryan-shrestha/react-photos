import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/firebase";

import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";

import "./assets/css/style.css";
import routes from "./utils/routes/routes";
import AppContext from "./utils/store/AppContext";

function App() {
  const auth = getAuth(app);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
        setIsLoading(false);
      } else {
        setUser({});
        setIsLoggedIn(false);
        setIsLoading(false);
      }
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className="app">
      <Router>
        <AppContext.Provider value={[isLoggedIn, user]}>
          <NavBar />
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  key={index}
                />
              );
            })}
          </Switch>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
