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

  const handleCategories = (e) => {
    e.preventDefault();

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

  return (
    <form>
        <label>Select preferred time of the day for the next categories:</label><br/>

        <section className="categoriesTime" style={styles.categoriesTime}>
          <Category name='Study' />
          <Category name='Work' />
          <Category name='Hobby' />
          <Category name='Chores' />
          <Category name='Other' />
        </section>

        <button style={styles.button} name="submit" onClick={handleCategories}>Save Categories</button>
    </form>
  );
};

export default Categories;
