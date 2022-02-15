import React, { useState, useEffect } from "react";
import swal from 'sweetalert2';
import $ from 'jquery';

import UserService from "../../services/user.service";
import AuthService from '../../services/auth.service';
import Constraint from './Constraint';

window.Swal = swal;

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

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
    },
    formError: {
      color: 'red'
    }
  }

  const user = AuthService.getCurrentUser();
  const [constraints, setConstraints] = useState(null);

  useEffect(() => {
    if(user) {
      UserService.getConstraints(user.id)
      .then(response => {
        setConstraints(response.data);
      })
    }
  },[]);

  const saveConstraints = (e) => {
    UserService.updateConstraints(user.id, constraints);

    $('.formError').html("");

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

  const getStartDate = (constraint) => {
    return constraint.split('-')[0];
  }

  const getEndDate = (constraint) => {
    return constraint.split('-')[1];
  }

  const isValidTime = (time) => {
    const minutes = time.split(':')[1];
    return minutes%15 === 0;
  }

  const validateConstraints = (e) => {
    e.preventDefault();

    for(const weekday of weekdays) {
      if (!isValidTime(getStartDate(constraints[weekday])) || !isValidTime(getEndDate(constraints[weekday]))) {
        $('.formError').html("The time must be consistent every 15 minutes");
        return;
      }
    }
    saveConstraints(e);
  }

  const onUpdate = (weekday, newTime) => {
    const newConstraint = Object.assign({}, constraints);
    newConstraint[weekday] = newTime;
    setConstraints(newConstraint);
  };
  
  return (
    <form>
        <label>Please select your working time per day:</label><br/>
        {constraints && 
          <>
            <Constraint 
              weekday='Sunday' 
              startTime={constraints.sunday.split('-')[0]} 
              endTime={constraints.sunday.split('-')[1]}
              onUpdate={newTime => onUpdate('sunday', newTime)}
            />
            <Constraint 
              weekday='Monday' 
              startTime={constraints.monday.split('-')[0]} 
              endTime={constraints.monday.split('-')[1]} 
              onUpdate={newTime => onUpdate('monday', newTime)}
            />
            <Constraint 
              weekday='Tuesday' 
              startTime={constraints.tuesday.split('-')[0]} 
              endTime={constraints.tuesday.split('-')[1]} 
              onUpdate={newTime => onUpdate('tuesday', newTime)}
            />
            <Constraint 
              weekday='Wednesday' 
              startTime={constraints.wednesday.split('-')[0]} 
              endTime={constraints.wednesday.split('-')[1]} 
              onUpdate={newTime => onUpdate('wednesday', newTime)}
            />
            <Constraint 
              weekday='Thursday' 
              startTime={constraints.thursday.split('-')[0]} 
              endTime={constraints.thursday.split('-')[1]} 
              onUpdate={newTime => onUpdate('thursday', newTime)}
            />
            <Constraint 
              weekday='Friday' 
              startTime={constraints.friday.split('-')[0]} 
              endTime={constraints.friday.split('-')[1]} 
              onUpdate={newTime => onUpdate('friday', newTime)}
            />
            <Constraint 
              weekday='Saturday' 
              startTime={constraints.saturday.split('-')[0]} 
              endTime={constraints.saturday.split('-')[1]} 
              onUpdate={newTime => onUpdate('saturday', newTime)}
            />
          </>
        }
      <button style={styles.button} name="submit" onClick={validateConstraints}>Save Constraints</button>
      <p className="formError" style={styles.formError}></p>
    </form>
  );
};

export default Constraints;