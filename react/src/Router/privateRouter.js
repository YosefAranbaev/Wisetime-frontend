import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const PrivateRouter = ({ component: Component, user, path }) => {

    return (
        <>
            <Route exact path={path}>
                {
                    Object.keys(user).length ? <Component /> : <Redirect to='/' />
                }
            </Route>
        </>
    )
}

export default PrivateRouter;