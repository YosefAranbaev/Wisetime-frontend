import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { getTasks } from '../Utils/contentService';
import { Card } from '@mui/material';
import Heading from './Heading';

const Home = () => {
    const styles = {
        content: {

        }
    }

    let history = useHistory();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        getTasks().then(response => {
            const tasksData = JSON.stringify(response.data);
            setTasks(tasksData);
        })
    }, []);

    return ( 
        <div className='home' style={styles.content}>
            <Heading heading='Week Schedule' />
            { tasks }
        </div>
    );
}
 
export default Home;