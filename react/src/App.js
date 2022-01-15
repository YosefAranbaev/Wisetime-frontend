import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Header from './Components/Header';

const App = ({ children, props }) => {
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
            <div id='wrapper'>
                {React.Children.map(children, child => {
                    return React.cloneElement(child)
                })}
            </div>
        </div>
    );
}
 
export default App;