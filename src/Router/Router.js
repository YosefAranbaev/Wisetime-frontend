import React from "react";
import { Switch, Route } from "react-router-dom";

import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import Profile from "../Components/Profile";
import Schedule from "../Components/Schedule/Schedule";
import Preferences from "../Components/Preferences/Preferences";
import AddTask from "../Components/Form/AddTask";
import Statistics from "../Components/Statistics";
import Inbox from "../Components/Inbox/Inbox";
import AddToFriend from "../Components/Inbox/AddToFriend";

const Router = (props) => {

  return (
    <Switch>
        <Route exact path='/' component={() => <Login />} />
        <Route exact path='/register' component={() => <Register />} />
        <Route exact path='/profile' component={() => <Profile />} />
        <Route path='/schedule' component={() => <Schedule />} />
        <Route path='/preferences' component={() => <Preferences />} />
        <Route path='/add' component={() => <AddTask />} />
        <Route path='/addTofriend' component={() => <AddToFriend />} />
        <Route path='/statistics' component={() => <Statistics />} />
        <Route path='/inbox' component={() => <Inbox />} />
    </Switch>
  );
};

export default Router;
