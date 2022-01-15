import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactRouter from './Router/router';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
          <ReactRouter />
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
