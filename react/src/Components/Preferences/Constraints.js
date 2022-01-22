import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import AuthService from '../../services/auth.service';

const Constraints = (props) => {
  const styles = {
    workingTimePerDay: {
      display: 'flex'
    },
    timeRanges: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      margin: '-8px 0 0 10px'
    },
    button: {
      marginTop: '20px',
      border: '1px solid green',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '10px'
    }
  }

  const user = AuthService.getCurrentUser();

  return (
    <form action="" method="POST" name="constraintsForm">
        <label>Please select your working time per day:</label><br/>
        <section className="workingTimePerDay" style={styles.workingTimePerDay}>
            <section className="days">
            <p className="weekDay">Sunday</p>
            <p className="weekDay">Monday</p>
            <p className="weekDay">Tuesday</p>
            <p className="weekDay">Wednesday</p>
            <p className="weekDay">Thursday</p>
            <p className="weekDay">Friday</p>
            <p className="weekDay">Saturday</p>
            </section>
            <section className='timeRanges' style={styles.timeRanges}>
            <section className="timeRange">
                <input type="time" id="appt" name="sunday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp; 
                <input type="time" id="appt" name="sunday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
            <section className="timeRange">
                <input type="time" id="appt" name="monday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp; 
                <input type="time" id="appt" name="monday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
            <section className="timeRange">
                <input type="time" id="appt" name="tuesday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp;
                <input type="time" id="appt" name="tuesday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
            <section className="timeRange">
                <input type="time" id="appt" name="wednesday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp; 
                <input type="time" id="appt" name="wednesday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
            <section className="timeRange">
                <input type="time" id="appt" name="thursday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp; 
                <input type="time" id="appt" name="thursday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
            <section className="timeRange">
                <input type="time" id="appt" name="friday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp; 
                <input type="time" id="appt" name="friday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
            <section className="timeRange">
                <input type="time" id="appt" name="saturday_start_time" value="07:00" min="07:00" max="00:00"/> -&nbsp; 
                <input type="time" id="appt" name="saturday_end_time" value="23:00" min="07:00" max="00:00"/>
            </section>
        </section>
      </section>
      <button style={styles.button} name="submit" type="submit">Save Constraints</button>
    </form>
  );
};

export default Constraints;
