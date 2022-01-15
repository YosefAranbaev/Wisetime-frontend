import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getTasks } from '../Utils/contentService';
import axios from 'axios';

import { getCurrentUser, authHeader } from '../Utils/Service';

const serviceUrl = 'http://localhost:8080';

const Home = () => {
    let history = useHistory();
    const [tasks, setTasks] = useState([]);

    const handleLogout = () => {
        localStorage.removeItem('user');
        history.push('/');
    };

    useEffect(() => {
        getTasks().then(response => {
            const tasksData = JSON.stringify(response.data);
            setTasks(tasksData);
        })
    }, []);

    return ( 
        <div className='home'>
            <h1>Homepage</h1>
            <button onClick={ handleLogout }>Logout</button>
            <h3>Tasks</h3>
            { tasks }
        </div>
    );
}
 
export default Home;