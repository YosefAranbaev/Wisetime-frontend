import React from 'react';
import Login from '../Components/Login';
import Home from '../Components/Home';
import { Route } from 'react-router-dom'

const ReactRouter = () => {
    return (
        <>
            <Route exact path='/'>
                <Login />
            </Route>
            <Route exact path='/home'>
                <Home />
            </Route>
        </>
    )
}

export default ReactRouter;