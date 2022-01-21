import React, { useState, useEffect } from 'react';

const Heading = (props) => {
    const styles = {
        heading: {
            fontSize: '24px',
            marginBottom: '20px',
            paddingBottom: '10px',
            borderBottom: '1px solid #D9D3D3'
        }
    }

    return ( 
        <>
        <h1 className='heading' style={styles.heading}>
            { props.heading }
        </h1>
        </>
    );
}
 
export default Heading;