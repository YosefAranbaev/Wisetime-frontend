import React from 'react';
import { useHistory } from "react-router-dom";

const serviceUrl = 'http://localhost:8080';

const Logup = () => {
    let history = useHistory();

    const handleLogup = () => {
        fetch(`${serviceUrl}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': 'Demo',
                'email': 'demo@gmail.com',
                'password': '111'
            })
        })
        .then((response) => {
            if(response.ok) {
                response.json()
                .then(response => {
                    if(response.accessToken) {
                        localStorage.setItem('user', JSON.stringify(response));
                        history.push('/home');
                    }
                })
            } else if(response.status === 400) {
                alert('User with this email already exists.');
            } else if(response.status === 500) {
                alert('Something went wrong...');
            }    
        })
    };

    return ( 
        <div className='logup'>
            <button onClick={ handleLogup }>Logup</button>
        </div>
    );
}
 
export default Logup;