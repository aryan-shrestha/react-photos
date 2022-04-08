import React from "react";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import About from "../../pages/About";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Home />,
    protected: "auth",
  },
  {
    path: "/about",
    component: () => <About />,
    protected: null,
  },
  {
    path: "/login",
    component: () => <Login />,
    protected: "guest",
  },
];

export default routes;
