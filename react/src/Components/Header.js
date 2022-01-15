import React, { useState, useEffect } from 'react';
import { IoIosNotifications } from "react-icons/io";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';

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
            marginTop: '20px',
            marginRight: '20px',
            fontSize: '20px',
            position: 'relative'
        },
        notificationIconActive: {
            color: '#9966CC',
            marginTop: '20px',
            marginRight: '20px',
            fontSize: '20px',
            position: 'relative'
        },
        link: {
            margin: '20px'
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
            top: '3px',
            right: '1px',
            border: '1px solid #fff',
            display: 'block'
        },
        arrow: {
            marginTop: '20px',
            marginRight: '15px',
            color: '#707070',
            cursor: 'pointer'
        }
    }

    const location = useLocation();
    const [showDot, setShowDot] = useState(true);
    const [showSideMenu, setShowSideMenu] = useState(false);

    useEffect(() => {
        if(location.pathname === 'notifications') {
            setShowDot(false);
        }
    }, [location.pathname])

    const renderHeader = () => {
        return  <>
                    <nav id='mainMenu'>
                        <Link to='/home' style={location.pathname === '/home' ? styles.linkActive : styles.link}>Home</Link>
                        <Link to='/statistics' style={location.pathname === '/statistics' ? styles.linkActive : styles.link}>Statistics</Link>
                    </nav>
                    <div className='profile' style={styles.profile}>
                        <Link to='/notifications' style={location.pathname === '/notifications' ? styles.notificationIconActive : styles.notificationIcon}>
                            <IoIosNotifications />
                            <div style={showDot ? styles.dot : {}}></div>
                        </Link>
                        <p style={styles.profileName}>{JSON.parse(localStorage.getItem("user")).username}</p>
                        <div className='avatar' style={styles.avatar} onClick={() => setShowSideMenu(!showSideMenu)}>
                            {
                                showSideMenu ? <SideMenu /> : null
                            }
                        </div>
                        <MdKeyboardArrowDown style={styles.arrow} onClick={() => setShowSideMenu(!showSideMenu)} />
                    </div>
                </>
    }

    return ( 
        <div className='Header' style={styles.header}>
            <Link to='/home' id='logo' style={styles.logo}>WiseTime</Link>
            { props.mode === 'protectedHeader' ? renderHeader() : null }
        </div>
    );
}
 
export default Header;