import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';

const SideMenu = (props) => {

    const styles = {
        menu: {
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '60px',
            right: '-14px',
            backgroundColor: '#fff',
            boxShadow:' 0px 2px 6px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column'
        },
        link: {
            padding: '10px 10px 10px 10px',
            textAlign: 'center',
            fontSize: '13px',
            boxShadow:' 0px 1px 1px rgba(0, 0, 0, 0.1)'
        }
    }

    const history = useHistory();

    const handleLogout = () => {
        localStorage.removeItem('user');
    };

    return ( 
        <div className='sideMenu' style={styles.menu}>
            <Link to='/profile' style={styles.link}>Profile</Link>
            <Link to='/' style={styles.link} onClick={props.logOut}>Logout</Link>
        </div>
    );
}
 
export default SideMenu;