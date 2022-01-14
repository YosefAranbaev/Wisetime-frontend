import React from 'react';

const serviceUrl = 'http://localhost:8080';

const Logup = () => {

    const handleLogup = () => {
        fetch(`${serviceUrl}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'name': 'Johny',
                'email': 'johny@gmail.com',
                'password': '111'
            })
        })
        .then((response) => {
            if(response.ok) {
                alert('ok');
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