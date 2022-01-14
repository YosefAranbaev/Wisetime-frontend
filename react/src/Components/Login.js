import React from 'react';

const serviceUrl = 'http://localhost:8080';

const Login = () => {

    const handleLogin = () => {
        fetch(`${serviceUrl}/api/auth/login`, {
            method: 'POST'
        })
        .then((response) => {
            if(response.ok) {
                alert('ok');
            } else {
                alert('not ok');
            }   
        })
    };

    return ( 
        <div className='login'>
            <button onClick={ handleLogin }>Login</button>
        </div>
    );
}
 
export default Login;