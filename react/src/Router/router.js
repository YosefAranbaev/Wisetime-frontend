import React, { useState } from 'react';
import Login from '../Components/Login';
import Logup from '../Components/Logup';
import Home from '../Components/Home';
import PrivateRouter from './privateRouter';
import { Route } from 'react-router-dom'

const ReactRouter = () => {
    const [user, setUser] = useState({});

    return (
        <>
            <Route exact path='/'>
                <Login updateUser={userInfo => setUser(userInfo)} />
                <Logup updateUser={userInfo => setUser(userInfo)} />
            </Route>

            <PrivateRouter path='/home' component={Home} user={user} />
        </>
    )
}

export default ReactRouter;