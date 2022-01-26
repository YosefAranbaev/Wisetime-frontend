import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Partials/Heading';

const Statistics = (props) => {
  const styles = {
    container: {
        marginTop: '30px',
        backgroundColor: '#fff',
        boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        minHeight: '71vh',
        overflow: 'hidden',
    }
  }

  const user = AuthService.getCurrentUser();
  const history = useHistory();
  useEffect(() => {
    AuthService.isAuthorized()
    .catch(() => {
      history.push("/");
    })
  }, [])

  return (
    <div className="container" style={styles.container}>
        <Heading heading='Statistics' />
    </div>
  );
};

export default Statistics;
