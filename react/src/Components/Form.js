import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import $ from 'jquery';
import MenuItem from '@mui/material/MenuItem';
import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Partials/Heading';
import Button from '@mui/material/Button';
import authHeader from "../services/auth-header";
const user  = AuthService.getCurrentUser();
const currencies = [
    {
        value: 'chores',
        label: 'chores',
    },
    {
        value: 'hobby',
        label: 'hobby',
    },
    {
        value: 'study',
        label: 'study',
    },
    {
        value: 'work',
        label: 'work',
    },
];
const colors = [
    {
        value: 'red',
        label: 'red',
    },
    {
        value: 'green',
        label: 'green',
    },
    {
        value: 'yellow',
        label: 'yellow',
    },
    {
        value: 'blue',
        label: 'blue',
    },
];
const AddTask = (props) => {
    let [taskName, setTaskname] = useState("")
    let [taskDuration, setTaskduration] = useState("")
    let [taskType, setTasktype] = useState("")
    let [taskColor, setTaskcolor] = useState("")
    const formErr = {
        color: "red"
    }
    const fileErrorTreatment = (err) => {
        $(".formError").html("");
        if (err == 400) {
            $(".formError").append("Please fill in all the fields on the form!");
        }
        if (err == 409) {
            $(".formError").append("There were hours left that were not entered into the system due to the constraints and categories!");
        }
        if (err == 500) {
            $(".formError").append("Error getting the data from db");
        } 
    }
    const formValidation = () => {
        if (taskName == "" || taskColor == "" || taskType == "" || taskDuration == 0) {
            $(".formError").html("");
            $('.formError').append("Please fill all the fields in the form!");
        }
        else {
            const newTask = {
                'name': taskName,
                'color': taskColor,
                'category': taskType,
                'duration': taskDuration
            }
            // console.log(user.categories)
            const res = $.ajax({
                type: "POST",
                url: `http://wisetime.herokuapp.com/api/users/${user.id}/tasks`,
                data: newTask,
                headers:authHeader(),
                success:(res)=>{
                    window.location.href="http://127.0.0.1:5500/wisetime-frontend/home.html";
                },
                error: (response) => {
                    fileErrorTreatment(response.status);
                }
            });
            console.log(newTask);
        }
    }
    return (
        <>
            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }} noValidate autoComplete="off">
                <div>
                    <TextField required className="forminput"
                        id="outlined-required"
                        label="Required task name"
                        defaultValue=""
                        helperText="Please write task name"
                        onChange={e => { setTaskname(taskName = e.target.value); console.log(taskName) }}
                    />
                </div>
                <div>
                    <TextField required
                        type="number"
                        id="outlined-required"
                        label="Required duration"
                        defaultValue="0"
                        helperText="Please select task duration"
                        onChange={e => { setTaskduration(taskDuration = e.target.value); console.log(taskDuration) }}
                    />
                </div>
                <div>
                    <TextField
                        id="outlined-select-currency outlined-required"
                        select
                        label="Select"
                        defaultValue=""
                        // value={currency}
                        onChange={e => { setTasktype(taskType = e.target.value); console.log(taskType) }}
                        helperText="Please select the task category"
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <div>
                    <TextField
                        id="outlined-select-currency outlined-required"
                        select
                        label="Select"
                        defaultValue=""
                        // value={currency}
                        onChange={e => { setTaskcolor(taskColor = e.target.value); console.log(taskColor) }}
                        helperText="Please select a color"
                    >
                        {colors.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
                <Button component="submit" name="submit" variant="contained" onClick={formValidation}>confirm</Button>
                <p className="formError" style={formErr}></p>
            </Box>
        </>
    );
};

export default AddTask;
