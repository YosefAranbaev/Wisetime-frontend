import React, { useState, useEffect } from "react";
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
  const [start, setStart] = useState(props.startTime);
  const [end, setEnd] = useState(props.endTime);

  const onChangeStart = (e) => {
    const start = e.target.value;
    setStart(start);
  }

  const onChangeEnd = (e) => {
    const end = e.target.value;
    setEnd(end);
  }

  useEffect(() => {
    props.onUpdate(`${start}-${end}`);
  }, [start, end]);

  return (
    <section style={styles.category}>
        <section className="timeRange" style={styles.timerange}>
            <label style={styles.label}>{props.weekday}</label>
            <input 
              type="time" 
              id="appt" 
              name={`${props.weekday}_start_time`} 
              value={start} 
              onChange={onChangeStart} 
              min="07:00" 
              max="00:00" 
              style={styles.input} 
            />
            <span>-</span>
            <input 
              type="time" 
              id="appt" 
              name={`${props.weekday}_end_time`} 
              value={end} 
              onChange={onChangeEnd} 
              min="07:00" 
              max="00:00" 
              style={styles.input} 
            />
        </section>
    </section>
  );
};

export default Constraint;
