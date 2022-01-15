import React from 'react';
import { useHistory } from "react-router-dom";

const serviceUrl = 'http://localhost:8080';

const Login = (props) => {
    let history = useHistory();

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
                response.json()
                .then(response => {
                    if(response.accessToken) {
                        localStorage.setItem('user', JSON.stringify(response));
                        props.updateUser(JSON.stringify(response));
                        history.push('/home');
                    }
                })
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