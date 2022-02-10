import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import $ from 'jquery';
import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Partials/Heading';
import authHeader from "../services/auth-header";
import swal from 'sweetalert';
import Button from '@mui/material/Button';

const user = AuthService.getCurrentUser();
const task = {
    // float: 'none',
    marginLeft: '70px',
    marginTop: '15px',
    width: '200px',
    // position: 'absolute',
    backgroundColor: '#F0F8FF',
    height: '200px',
    borderRadius: '25px',
}
const driendName = {
    // marginLeft:'50px',
    textAlign: 'center',
    marginTop: '30px',
}
const name = {
    textAlign: 'center',
}
const successBtn = {
    // with:'5px',
    marginLeft: '7px',
    marginTop: '35px'
}


const InboxTask = (props) => {
    const deleteTask = () => {

        const url = `http://localhost:8080/api/inbox/${props.id}`;
        $.ajax({
            type: "DELETE",
            url: url,
            headers: authHeader()
        });
    };
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
                    }, deleteTask());
                } else {
                    swal("The task is still in the inbox");
                }
            });
    }
    const createThetask=()=>{
        const newTask = {
            'name': props.name,
            'color': props.color,
            'category': props.category,
            'dauration': props.duration
        }
        console.log(newTask);
        const res = $.ajax({
            type: "POST",
            url: `http://localhost:8080/api/users/${user.id}/tasks`,
            data: newTask,
            headers: authHeader(),
            success: (res) => {
                deleteTask();
                swal("Good luck!", "The Event was created successfully!", "success");
            },
            error: (response) => {
                swal("Error", "The Event was not created try again!", "error");
            }
        });
    }
    const createTask = () => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to create thie task?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal("The task was successfully completed!", {
                        icon: "success",
                    }, createThetask());
                } else {
                    swal("The task is still in the inbox");
                }
            });
    }
    return (
        <>
            <div style={task}>
                <p style={driendName}><b>{props.friendName} sent you a task</b></p>
                <p style={name}>The task: {props.name}</p>
                <Button variant="contained" color="success" style={successBtn} onClick={createTask}>
                    create
                </Button>
                <Button variant="outlined" color="error" style={successBtn} onClick={alertBefordelete}>
                    Delete
                </Button>
            </div>
        </>
    )
}
export default InboxTask;