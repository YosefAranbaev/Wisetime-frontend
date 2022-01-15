import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from './Components/Header';

const App = ({ children, props }) => {
    const styles = {
        wrapper: {
            margin: '30px 30px 0 30px',
            backgroundColor: '#fff',
            boxShadow:' 2px 2px 2px rgba(0, 0, 0, 0.1)',
            padding: '20px',
            borderRadius: '10px',
            minHeight: '71vh',
            overflow: 'hidden',
        }
    }

    const location = useLocation();
    const [headerMode, setHeaderMode] = useState('publicHeader');

    useEffect(() => {
        if(location.pathname === '/') {
            setHeaderMode('publicHeader');
        } else {
            setHeaderMode('protectedHeader');
        }
    }, [location.pathname])

    return ( 
        <div className='App'>
            <Header mode={headerMode} />
            <div id='wrapper' style={styles.wrapper}>
                {React.Children.map(children, child => {
                    return React.cloneElement(child)
                })}
            </div>
        </div>
    );
}
 
export default App;