import React from "react";
import { Redirect, Route, Switch } from "react-router";
import Login from "../pages/login/Login";
import Home from "../pages/app/Home";
import { useSelector } from "react-redux";

const Router = () => {
  const user = useSelector((state) => state.user);

  return (
    <Switch>
      {user ? (
        <>
          <Route path="/" exact>
            <Home />
          </Route>
          <Redirect to="/" exact />
        </>
      ) : (
        <>
          <Route path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </>
      )}
    </Switch>
  );
};

export default Router;
