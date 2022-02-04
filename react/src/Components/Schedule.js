import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import UserService from "../services/user.service";
import Heading from './Partials/Heading';
import AuthService from '../services/auth.service';
import ScheduleObj from '../Components/ScheduleObj';

const Schedule = (props) => {
  const styles = {
    container: {
        marginTop: '30px',
        backgroundColor: '#fff',
        boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        minHeight: '71vh',
        overflow: 'hidden'
    }
  }

  const user = AuthService.getCurrentUser();
  const history = useHistory();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    AuthService.isAuthorized()
    .catch(() => {
      history.push("/");
    })
  }, [])

  useEffect(() => {
    if(user) {
      UserService.getTasks(user.id).then(
        (response) => {
          setTasks(response.data);
        },
        (error) => {
          const content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
            setTasks(content);
  
          if (error.response && error.response.status === 401) {
            AuthService.logout();
          }
        }
      );
    }
  }, []);

  return (
    <div className="container" style={styles.container}>
      <Heading heading='Week Schedule' />
      {tasks.map(task =>  <div key={task._id}>
                            <p>{JSON.stringify(task)}</p><br/>
                          </div>
      )}
      <ScheduleObj/>
    </div>
  );
};

export default Schedule;
