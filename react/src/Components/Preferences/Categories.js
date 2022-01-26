import React, { useState, useEffect } from "react";
import swal from 'sweetalert2';

import UserService from "../../services/user.service";
import AuthService from '../../services/auth.service';
import Category from './Category.js';

window.Swal = swal;

const Categories = (props) => {
  const styles = {
    button: {
      marginTop: '20px',
      border: '1px solid green',
      backgroundColor: '#4CAF50',
      color: '#fff',
      padding: '10px 20px',
      borderRadius: '10px'
    }
  }

  const user = AuthService.getCurrentUser();
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    UserService.getCategories(user.id)
      .then(response => {
        setCategories(response.data);
      })
  },[]);

  const saveCategories = (e) => {
    e.preventDefault();

    UserService.updateCategories(user.id, categories);

    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Saved successfully',
      showConfirmButton: false,
      timer: 1500,
      width: '450px',
      height: '50px',
      fontSize: '13px'
    })
  }

  const onUpdate = (category, value) => {
    const newCategory = Object.assign({}, categories);
    newCategory[category] = value;
    setCategories(newCategory);
  };

  return (
    <form>
        <label>Select preferred time of the day for the next categories:</label><br/>

        {categories && 
          <section className="categoriesTime" style={styles.categoriesTime}>
            <Category name='Study'  value={categories.study}  onUpdate={value => onUpdate('study', value)} />
            <Category name='Work'   value={categories.work}   onUpdate={value => onUpdate('work', value)} />
            <Category name='Hobby'  value={categories.hobby}  onUpdate={value => onUpdate('hobby', value)} />
            <Category name='Chores' value={categories.chores} onUpdate={value => onUpdate('chores', value)} />
            <Category name='Other'  value={categories.other}  onUpdate={value => onUpdate('other', value)} />
          </section>
        }

        <button style={styles.button} name="submit" onClick={saveCategories}>Save Categories</button>
    </form>
  );
};

export default Categories;
