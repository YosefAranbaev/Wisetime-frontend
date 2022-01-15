import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getTasks } from '../Utils/contentService';

const Home = () => {
    let history = useHistory();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(response => {
            const tasksData = JSON.stringify(response.data);
            setTasks(tasksData);
        })
    }, []);

    return ( 
        <div className='home'>
            <h1>Week Schedule</h1>
            { tasks }
        </div>
    );
}
 
export default Home;