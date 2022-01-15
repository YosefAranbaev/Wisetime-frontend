import React, { useState, useEffect } from 'react';

const Header = (props) => {

    return ( 
        <div className='Header'>
            {props.mode}
        </div>
    );
}
 
export default Header;