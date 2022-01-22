import React, { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import AuthService from '../services/auth.service';

const Header = (props) => {

    const styles = {
        header: {
            width: '100%',
            height: '55px',
            backgroundColor: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow:' 0px 1px 4px rgba(0, 0, 0, 0.1)'
        },
        logo: {
            height: '100%',
            width: 'auto',
            backgroundImage: 'url("logo.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '13px center',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '55px',
            fontWeight: '700',
        },
        profile: {
            height: '100%',
            width: 'auto',
            display: 'flex',
            alighItems: 'center'
        },
        avatar: {
            height: '100%',
            width: '40px',
            backgroundImage: 'url("no-profile-photo.png")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '3px center',
            position: 'relative',
            cursor: 'pointer'
        },
        profileName: {
            borderLeft: '1px solid #D9D3D3',
            paddingLeft: '20px',
            fontSize: '14px',
            marginTop: '20px'
        },
        notificationIcon: {
            color: '#707070',
            marginTop: '12px',
            marginRight: '20px',
            fontSize: '20px',
            position: 'relative'
        },
        notificationIconActive: {
            color: '#9966CC',
            marginTop: '12px',
            marginRight: '20px',
            fontSize: '20px',
            position: 'relative'
        },
        link: {
            margin: '20px',
            borderBottom: '2px solid #fff',
            paddingBottom: '3px'
        },
        linkActive: {
            margin: '20px',
            borderBottom: '2px solid #9966CC',
            paddingBottom: '3px'
        },
        dot: {
            width: '5px',
            height: '5px',
            borderRadius: '50px',
            backgroundColor: '#D80000',
            position: 'absolute',
            top: '11px',
            right: '3px',
            border: '1px solid #fff',
            display: 'block'
        },
        arrow: {
            marginTop: '20px',
            marginRight: '15px',
            color: '#707070',
            cursor: 'pointer'
        },
        list: {
            display: 'flex',
            justifyContent: 'center'
        },
        buttonActive: {
            backgroundColor: '#9966CC',
            marginLeft: '16px',
            padding: '6px',
            fontSize: '13px',
            color: '#fff',
            borderRadius: '10px',
            border: '2px solid #fff'
        },
        button: {
            backgroundColor: '#fff',
            marginLeft: '16px',
            padding: '6px',
            fontSize: '13px',
            color: '#000',
            borderRadius: '10px',
            border: '2px solid #9966CC'
        }
    }

    const location = useLocation();
    const user = AuthService.getCurrentUser();
    const [showDot, setShowDot] = useState(true);
    const [showSideMenu, setShowSideMenu] = useState(false);

    return(
        <nav className='Header' style={styles.header}>
            <Link to='#' id='logo' style={styles.logo}>WiseTime</Link>
            <div className='navLinks'>
                {user && (
                    <li className="nav-item" style={styles.list}>
                        <Link to='/schedule' style={location.pathname === '/schedule' ? styles.linkActive : styles.link}>Schedule</Link>
                        <Link to='/statistics' style={location.pathname === '/statistics' ? styles.linkActive : styles.link}>Statistics</Link>
                    </li>
                )}
            </div>
            <div className='navButtons'>
                {user && (
                    <li className="nav-item" style={styles.list}>
                        <Link to='/add' style={location.pathname === '/add' ? styles.buttonActive : styles.button}>Add Task</Link>
                        <Link to='/constraints' style={location.pathname === '/constraints' ? styles.buttonActive : styles.button}>Manage Constraints</Link>
                    </li>
                )}
            </div>
            <div className='profile' style={styles.profile}>
                {user && (
                    <li className="nav-item" style={styles.list}>
                        <Link to='/inbox' style={location.pathname === '/inbox' ? styles.notificationIconActive : styles.notificationIcon}>
                            <IoIosNotifications />
                            <div style={showDot ? styles.dot : {}}></div>
                        </Link>
                        <p style={styles.profileName}>{user.username}</p>
                        <div className='avatar' style={styles.avatar} onClick={() => setShowSideMenu(!showSideMenu)}>
                            {
                                showSideMenu ? <SideMenu /> : null
                            }
                        </div>
                        <MdKeyboardArrowDown style={styles.arrow} onClick={() => setShowSideMenu(!showSideMenu)} />
                    </li>
                )}
            </div>
            {!user && location.pathname === '/register' && (
                <Link to={"/"} className="nav-link">
                    Login
                </Link>
            )}
            {!user && location.pathname === '/' && (
                <Link to={"/register"} className="nav-link">
                    Sign Up
                </Link>
            )}
        </nav>
    )
}
 
export default Header;