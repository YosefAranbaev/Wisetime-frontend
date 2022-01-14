import React from 'react';
import Login from '../Components/Login';
import Logup from '../Components/Logup';
import Home from '../Components/Home';
import { Route, Redirect } from 'react-router-dom'
import { getCurrentUser } from '../Utils/Service';

const ReactRouter = () => {
    return (
        <>
            <Route exact path='/'>
                <Login />
                <Logup />
            </Route>
            <Route exact path='/home'>
                {
                    getCurrentUser() ? <Home /> : <Redirect to='/' />
                }
            </Route>
        </>
    )
}

export default ReactRouter;