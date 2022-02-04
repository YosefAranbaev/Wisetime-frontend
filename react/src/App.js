import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Header from './Components/Partials/Header';
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
