import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import AuthService from '../../services/auth.service';

const Constraint = (props) => {
  const styles = {
    timerange: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '350px',
        marginBottom: '10px',
        borderBottom: '1px solid #D9D3D3'
    },
    label: {
        width: '100px'
    },
    input: {
        width: '110px'
    }
  }

  const user = AuthService.getCurrentUser();

  return (
    <section style={styles.category}>
        <section className="timeRange" style={styles.timerange}>
            <label style={styles.label}>{props.weekday}</label>
            <input type="time" id="appt" name={`${props.weekday}_start_time`} value={props.startTime} min="07:00" max="00:00" style={styles.input} />
            <span>-</span>
            <input type="time" id="appt" name={`${props.weekday}_end_time`} value={props.endTime} min="07:00" max="00:00" style={styles.input} />
        </section>
    </section>
  );
};

export default Constraint;
