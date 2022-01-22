import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Schedule from "./components/Schedule";
import Header from './components/Header';

const App = () => {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div>
      <Header currentUser={currentUser} logOut={logOut} />

      <div className="container mt-3">
        <Switch>
          <Route exact path='/' component={() => <Login currentUser={currentUser} />} />
          <Route exact path='/register' component={() => <Register currentUser={currentUser} />} />
          <Route exact path='/profile' component={() => <Profile currentUser={currentUser} />} />
          <Route path='/schedule' component={() => <Schedule currentUser={currentUser} logOut={logOut} />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
