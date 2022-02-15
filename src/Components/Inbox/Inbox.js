import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import $ from 'jquery';

import AuthService from '../../services/auth.service';
import Heading from '../Partials/Heading';
import authHeader from "../../services/auth-header";
import InboxTask from "./InboxTask";

const Inbox = (props) => {
  const styles = {
    container: {
      marginTop: '30px',
      backgroundColor: '#fff',
      boxShadow: ' 2px 2px 2px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      borderRadius: '10px',
      minHeight: '71vh',
      overflow: 'hidden'
    },
    wrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '1200px',
      margin: '0 auto',
    }
  }

  let [TasksArray, setTasksArray] = useState([]) 
  const user = AuthService.getCurrentUser();
  const history = useHistory();

  useEffect(() => {
    AuthService.isAuthorized()
      .catch(() => {
        history.push("/");
      })
  }, [])

  const eachInboxTask = (item, i) => {
    $('#emptyInbox').show();
    if (item.id !== user.id) {
      return;
    }
    $('#emptyInbox').hide();
    return (<InboxTask id={item._id} friendName={item.name_of_side_user} color={item.color}
      name={item.name} duration={item.duration_time} category={item.task_type} key={i} categoryName={item.category}></InboxTask>);
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
      <div className='inboxTasks' style={styles.wrapper}>
        {addTaskToSchedule()}
        {TasksArray.map(eachInboxTask)}
        <p id="emptyInbox"><i>Empty Inbox</i></p>
      </div>
    </div>
  );
};

export default Inbox;
