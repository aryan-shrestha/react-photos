import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Gallery from "./components/Gallery";
import NavBar from "./components/NavBar";

import "./assets/css/style.css";
import routes from "./utils/routes/routes";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {routes.map((route) => {
            return (
              <Route
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            );
          })}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
