import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Partials/Heading';
import authHeader from "../services/auth-header";
import swal from 'sweetalert';
const user  = AuthService.getCurrentUser();
const hours = {
    "07:00": "s",
    "07:15": "sf",
    "07:30": "st",
    "07:45": "sff",
    "08:00": "e",
    "08:15": "ef",
    "08:30": "et",
    "08:45": "eff",
    "09:00": "n",
    "09:15": "nf",
    "09:30": "nt",
    "09:45": "nff",
    "10:00": "t",
    "10:15": "tf",
    "10:30": "tt",
    "10:45": "tff",
    "11:00": "el",
    "11:15": "elf",
    "11:30": "elt",
    "11:45": "elff",
    "12:00": "tw",
    "12:15": "twf",
    "12:30": "twt",
    "12:45": "twff",
    "13:00": "th",
    "13:15": "thf",
    "13:30": "tht",
    "13:45": "thff",
    "14:00": "ft",
    "14:15": "ftf",
    "14:30": "ftt",
    "14:45": "ftff",
    "15:00": "fit",
    "15:15": "fitf",
    "15:30": "fitt",
    "15:45": "fitff",
    "16:00": "sit",
    "16:15": "sitf",
    "16:30": "sitt",
    "16:45": "sitff",
    "17:00": "set",
    "17:15": "setf",
    "17:30": "sett",
    "17:45": "setff",
    "18:00": "ett",
    "18:15": "ettf",
    "18:30": "ettt",
    "18:45": "ettff",
    "19:00": "ntt",
    "19:15": "nttf",
    "19:30": "nttt",
    "19:45": "nttff",
    "20:00": "ttw",
    "20:15": "ttwf",
    "20:30": "ttwt",
    "20:45": "ttwff",
    "21:00": "to",
    "21:15": "tof",
    "21:30": "tot",
    "21:45": "toff",
    "22:00": "tto",
    "22:15": "ttof",
    "22:30": "ttot",
    "22:45": "ttoff",
    "23:00": "tth",
}
const Task = (props) => {
    const alertBefordelete = () =>{
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
           const res = $.ajax({
            type: "DELETE",
            url: url,
            headers:authHeader()
        });
    };
    const makeTaskdone = () =>{
        const res = $.ajax({
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
              swal("The task was successfully completed!", {
                icon: "success",
              },makeTaskdone());
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
