import React from "react";
import $ from 'jquery';
import AuthService from '../../services/auth.service';
import authHeader from "../../services/auth-header";
import swal from 'sweetalert';
import swal2 from 'sweetalert2';
window.Swal = swal;

const hours = {};

const formatNumber = (hour) => {
  let str = hour.toString();
  if(str.length === 1) {
    str = `0${str}`;
  }
  return str;
}

const hourToCode = (hour) => {
  switch(hour) {
    case '07':  return 's';
    case '08':  return 'e';
    case '09':  return 'n';
    case '10':  return 't';
    case '11':  return 'el';
    case '12':  return 'tw';
    case '13':  return 'th';
    case '14':  return 'ft';
    case '15':  return 'fit';
    case '16':  return 'sit';
    case '17':  return 'set';
    case '18':  return 'ett';
    case '19':  return 'htt';
    case '20':  return 'ttw';
    case '21':  return 'to';
    case '22':  return 'tto';
    case '23':  return 'tth';
    default: return '';
  }
}

const minutesToCode = (minutes) => {
  switch(minutes) {
    case '00':  return '';
    case '15':  return 'f';
    case '30':  return 't';
    case '45':  return 'ff';
    default: return '';
  }
}

const timeToCode = (hour, minutes) => {
  return `${hourToCode(hour)}${minutesToCode(minutes)}`
}

const createHoursObject = () => {
  for(let h=7; h<23; h++) {
    let hour = formatNumber(h);
    for(let m=0; m<=45; m+=15) {
      let minutes = formatNumber(m);
      hours[`${hour}:${minutes}`] = timeToCode(hour, minutes);
    }
  }
  hours['23:00'] = timeToCode('23','00');
}
createHoursObject();

const Task = (props) => {
  const user  = AuthService.getCurrentUser();
  
    const alertBefordelete = () => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("The task was successfully deleted!", {
                icon: "success",
              },deleteTask());
            } else {
              swal("The task is still on schedule");
            }
          });
    }

    const deleteTask = (task) => {    
      const url = `http://localhost:8080/api/users/${user.id}/tasks/${props.id}`;
      $.ajax({
        type: "DELETE",
        url: url,
        headers:authHeader()
      });
    };

    const makeTaskdone = () =>{
      $.ajax({
        type: "PUT",
        url: `http://localhost:8080/api/users/${user.id}/tasks/${props.id}`,
        data: { "is_done": true },
        headers:authHeader()
      });
    }

    const doneTask = () => {
        swal({
            title: "Are you sure?",
            text: "Once completed, you will not be able to recover this task!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal2.fire({
                position: 'center',
                icon: 'success',
                title: 'Success!',
                text: 'Your statistics updated',
                showConfirmButton: false,
                timer: 2000,
                width: '450px',
                height: '50px',
                fontSize: '13px'
              })
              makeTaskdone()
            } else {
              swal("The task is still on schedule");
            }
          });
    };
    
    return (
      <div class={"schedule-item schedule-"+props.day+" time-from-"+ hours[props.hour_end_time]+" time-to-" + hours[props.hour_start_time] +" nt bg-"+props.color}>
          <div class="icons">
              <button title="Done" class="done" onClick = {doneTask}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
              </button>

              <button title="Delete" onClick={alertBefordelete} href="#myModal" class="trigger-btn" data-toggle="modal">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M6 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v1H6v-1Zm5 0v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5ZM4.5 5.029a.5.5 0 1 1 .998-.06l.5 8.5a.5.5 0 0 1-.998.06l-.5-8.5Zm6.53-.528a.5.5 0 0 1 .47.528l-.5 8.5a.5.5 0 1 1-.998-.058l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                  </svg>
              </button>
          </div>
          {props.name}
      </div>
    )
};

export default Task;
