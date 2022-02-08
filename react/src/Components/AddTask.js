import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import $ from 'jquery';
import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Partials/Heading';
import Form from './Form';
const AddTask = (props) => {
  let [Tasks, setTasks] = useState("")
  const styles = {
    container: {
      marginTop: '30px',
      backgroundColor: '#fff',
      boxShadow: ' 2px 2px 2px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      minHeight: '71vh',
      overflow: 'hidden',
    }
  }

  const history = useHistory();

  const user = AuthService.getCurrentUser();
  useEffect(() => {
    AuthService.isAuthorized()
      .catch(() => {
        history.push("/");
      })
  }, [])
  return (
    <>
    <div className="container" style={styles.container}>
      <Heading heading='Add Task' />
      <Form/>
    </div>
    </>
  );
};

export default AddTask;
