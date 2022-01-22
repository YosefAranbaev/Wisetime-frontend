import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../Components/Login";
import Register from "../Components/Register";
import Profile from "../Components/Profile";
import Schedule from "../Components/Schedule";
import Preferences from "../Components/Preferences";
import AddTask from "../Components/AddTask";
import Statistics from "../Components/Statistics";
import Inbox from "../Components/Inbox";

const Router = (props) => {

  return (
    <Switch>
        <Route exact path='/' component={() => <Login />} />
        <Route exact path='/register' component={() => <Register />} />
        <Route exact path='/profile' component={() => <Profile />} />
        <Route path='/schedule' component={() => <Schedule />} />
        <Route path='/preferences' component={() => <Preferences />} />
        <Route path='/add' component={() => <AddTask />} />
        <Route path='/statistics' component={() => <Statistics />} />
        <Route path='/inbox' component={() => <Inbox />} />
    </Switch>
  );
};

export default Router;
