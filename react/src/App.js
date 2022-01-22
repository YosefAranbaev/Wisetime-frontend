import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import Header from './Components/Header';
import Router from './Router/Router';

const App = () => {

  return (
    <div>
      <Header />
      <Router />
    </div>
  );
};

export default App;
