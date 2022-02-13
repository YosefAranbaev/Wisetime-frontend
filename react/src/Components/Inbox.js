import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import UserService from "../services/user.service";
import AuthService from '../services/auth.service';
import Heading from './Partials/Heading';
import $ from 'jquery';
import authHeader from "../services/auth-header";
import InboxTask from "../Components/InboxTask";

const Inbox = (props) => {
  let [TasksArray, setTasksArray] = useState([])
  const styles = {
    container: {
      marginTop: '30px',
      backgroundColor: '#fff',
      boxShadow: ' 2px 2px 2px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      minHeight: '71vh',
      overflow: 'hidden',
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '1200px',
      margin: '0 auto',
    }
  }

  const user = AuthService.getCurrentUser();
  const history = useHistory();
  useEffect(() => {
    AuthService.isAuthorized()
      .catch(() => {
        history.push("/");
      })
  }, [])
  const eachInboxTask = (item, i) => {
    if (item.id != user.id) {
      return;
    }
    return (<InboxTask id={item._id} friendName={item.name_of_side_user} color={item.color}
      name={item.name} duration={item.duration_time} category={item.task_type}key={i}></InboxTask>);


  }
  const getInboxTasks = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/inbox`, { method: 'GET', headers: authHeader() })
      if (response) {
        const jsonRes = response;
        return jsonRes;
      }
    }
    catch (e) {
      console.log("fetch failed", e);
      return false;
    }
  }
  const addTaskToSchedule = () => {
    getInboxTasks().then(res => {
      res.json().then(result => {
        setTasksArray(TasksArray = result);
      });
    });
  }
  return (
    <div className="container" style={styles.container}>
      <Heading heading='Inbox' />
      <div style={styles.wrapper}>
        {addTaskToSchedule()}
        {TasksArray.map(eachInboxTask)}
      </div>
    </div>
  );
};

export default Inbox;
