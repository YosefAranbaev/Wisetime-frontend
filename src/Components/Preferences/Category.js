import React, { useState, useEffect } from "react";
import AuthService from '../../services/auth.service';

const Category = (props) => {
  const styles = {
    category: {
        display: 'flex',
        width: '180px',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #D9D3D3',
        marginBottom: '10px'
    },
    select: {
        height: '30px',
        cursor: 'pointer',
        padding: '5px',
        fontSize: '13px'
    }
  }

  const user = AuthService.getCurrentUser();
  const [value, setValue] = useState(props.value);

  useEffect(() => {
    props.onUpdate(value);
  }, [value]);

  const onChangeValue = (e) => {
    const value = e.target.value;
    setValue(value);
  }

  return (
    <section style={styles.category}>
        <label>{props.name}</label>
        <select name={props.name} style={styles.select} value={value} onChange={onChangeValue} >
            <option value="1">Any</option>
            <option value="2">Morning</option>
            <option value="3">Day</option>
            <option value="4">Evening</option>
        </select>
    </section>
  );
};

export default Category;
