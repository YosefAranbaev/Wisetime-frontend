import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import Heading from './Heading';

const Schedule = (props) => {
  const styles = {
    container: {
        margin: '30px 30px 0 30px',
        backgroundColor: '#fff',
        boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        borderRadius: '10px',
        minHeight: '71vh',
        overflow: 'hidden',
    }
  }
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if(props.currentUser) {
      UserService.getTasks(props.currentUser.id).then(
        (response) => {
          setTasks(response.data);
        },
        (error) => {
          const _content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
  
            setTasks(_content);
  
          if (error.response && error.response.status === 401) {
            EventBus.dispatch("logout");
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
    </div>
  );
};

export default Schedule;
