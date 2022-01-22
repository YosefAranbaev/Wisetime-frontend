import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Heading';

const Preferences = (props) => {
  const styles = {
    container: {
        margin: '30px 30px 0 30px',
        backgroundColor: '#fff',
        boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        minHeight: '71vh',
        overflow: 'hidden',
    }
  }

  const user = AuthService.getCurrentUser();

  return (
    <div className="container" style={styles.container}>
        <Heading heading='Manage Preferences' />
        
    </div>
  );
};

export default Preferences;
