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
    },
    charts: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-around'
    }
  }

  const user = AuthService.getCurrentUser();
  const history = useHistory();
  const [chart, setChart] = useState(null);
  const [gauge, setGauge] = useState(null);

  useEffect(() => {
    AuthService.isAuthorized()
    .catch(() => {
      history.push("/");
    })
  }, [])

  useEffect(() => {
    UserService.getGauge(user.id)
      .then(response => {
        setGauge(response.data.chart);
      })

    UserService.getChart(user.id)
      .then(response => {
        setChart(response.data.chart);
      })
  }, []);
  
  return (
    <div className="container" style={styles.container}>
        <Heading heading='Statistics' />
        <div className='charts' style={styles.charts}>
          <div dangerouslySetInnerHTML={{__html: chart}} />
          <div dangerouslySetInnerHTML={{__html: gauge}} />
        </div>
    </div>
  );
};

export default Statistics;
