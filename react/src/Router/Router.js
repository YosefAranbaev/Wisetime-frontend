import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../Components/Login";
import Register from "../Components/Register";
import Profile from "../Components/Profile";
import Schedule from "../Components/Schedule";

const Router = (props) => {

  return (
    <Switch>
        <Route exact path='/' component={() => <Login />} />
        <Route exact path='/register' component={() => <Register />} />
        <Route exact path='/profile' component={() => <Profile />} />
        <Route path='/schedule' component={() => <Schedule logOut={props.logOut} />} />
    </Switch>
  );
};

export default Router;
