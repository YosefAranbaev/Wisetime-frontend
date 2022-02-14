import React from "react";
import $ from 'jquery';
import AuthService from '../../services/auth.service';
import authHeader from "../../services/auth-header";
import swal from 'sweetalert';
import Button from '@mui/material/Button';

const user = AuthService.getCurrentUser();
const durationTime ={
    position:'absolute',
    with:'100px',
    height:'20px',
    marginLeft:'15px',
    marginTop:'15px',
}
const task = {
    marginLeft: '70px',
    marginTop: '15px',
    width: '220px',
    backgroundColor: '#F0F8FF',
    height: '200px',
    borderRadius: '25px',
}
const friendName = {
    with:'100px',
    height:'20px',
    marginTop: '30px',
    marginLeft:'15px'
}
const name = {
    with:'100px',
    height:'20px',
    marginLeft:'15px',
    marginTop:'25px'
}
const successBtn = {
    marginLeft: '14px',
    marginTop: '45px'
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
    const errorTreatment = (res) => {
        const err = res.status;
        if (err === 409) {
            swal("Note!", `${res.responseJSON} due to the constraints, categories, and schedule frictions`, "warning");
        }
        if (err === 500) {
            swal("Note!", "Error getting the data from db", "error");
        }
    }
    const createThetask = () => {
        const newTask = {
            'name': props.name,
            'color': props.color,
            'category': props.category,
            'dauration': props.duration,
            'categoryName': props.categoryName
        }
        $.ajax({
            type: "POST",
            url: `http://localhost:8080/api/users/${user.id}/tasks`,
            data: newTask,
            headers: authHeader(),
            success: (res) => {
                deleteTask();
                swal("Good luck!", "The Event was created successfully!", "success");
            },
            error: (response) => {
                errorTreatment(response);
            }
        });
    }
    const createTask = () => {
        swal({
            title: "Are you sure?",
            text: "Are you sure you want to create this task?",
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
                <p style={friendName}><b>{props.friendName} sent you a task</b></p>
                <p style={name}><b>The task: </b>{props.name}</p>
                <p style={durationTime}><b>Estimated time:</b> {props.duration} hours</p>
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