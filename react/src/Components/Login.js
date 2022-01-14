import React from 'react';

const serviceUrl = 'http://localhost:8080';

const Login = () => {

    const handleLogin = () => {
        fetch(`${serviceUrl}/api/auth/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'email': 'karina@gmail.com',
                'password': '111'
            })
        })
        .then((response) => {
            if(response.ok) {
                alert('ok');
            } else if(response.status === 401) {
                alert('Invalid password');
            } else if(response.status === 500) {
                alert('Invalid email');
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