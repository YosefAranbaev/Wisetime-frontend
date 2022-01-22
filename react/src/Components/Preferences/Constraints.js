import React, { useState, useEffect } from "react";
import swal from 'sweetalert2';

import UserService from "../../services/user.service";
import AuthService from '../../services/auth.service';
import Constraint from './Constraint';

window.Swal = swal;

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

  const handleConstraints = (e) => {
    e.preventDefault();

    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Saved successfully',
      showConfirmButton: false,
      timer: 1500,
      width: '450px',
      height: '50px',
      fontSize: '13px'
    })
  }

  return (
    <form>
        <label>Please select your working time per day:</label><br/>
        <Constraint weekday='Sunday' startTime='07:00' endTime='23:00' />
        <Constraint weekday='Monday' startTime='07:00' endTime='23:00' />
        <Constraint weekday='Tuesday' startTime='07:00' endTime='23:00' />
        <Constraint weekday='Wednesday' startTime='07:00' endTime='23:00' />
        <Constraint weekday='Thursday' startTime='07:00' endTime='23:00' />
        <Constraint weekday='Saturday' startTime='07:00' endTime='23:00' />
        <Constraint weekday='Sunday' startTime='07:00' endTime='23:00' />
      <button style={styles.button} name="submit" onClick={handleConstraints}>Save Constraints</button>
    </form>
  );
};

export default Constraints;