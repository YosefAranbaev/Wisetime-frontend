import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AuthService from '../../services/auth.service';
import Heading from '../Partials/Heading';
import Constraints from './Constraints';
import Categories from './Categories';

const Preferences = (props) => {
  const styles = {
    container: {
        marginTop: '30px',
        backgroundColor: '#fff',
        boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        minHeight: '71vh',
        overflow: 'hidden',
    },
    section: {
      marginTop: '40px'
    },
    activeButton: {
      backgroundColor: '#fff',
      borderRadius: '0',
      padding: '5px',
      border: '1px solid #000'
    },
    button: {
      backgroundColor: 'grey',
      borderRadius: '0',
      color: '#fff',
      padding: '6px',
      border: 'none'
    }
  }

  const user = AuthService.getCurrentUser();
  const history = useHistory();
  const [display, setDisplay] = useState('constraints')

  useEffect(() => {
    AuthService.isAuthorized()
    .catch(() => {
      history.push("/");
    })
  }, [])

  return (
    <div className="container" style={styles.container}>
      <Heading heading='Manage Preferences' />
      <button onClick={() => setDisplay('constraints')} style={display==='constraints' ? styles.activeButton : styles.button}>Constraints</button>
      <button onClick={() =>setDisplay('categories')} style={display==='categories' ? styles.activeButton : styles.button}>Categories</button>
      <section style={styles.section}>
        {
          display === 'constraints' ? <Constraints /> : <Categories />
        }
      </section>
    </div>
  );
};

export default Preferences;
