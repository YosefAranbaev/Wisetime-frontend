import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import AuthService from '../../services/auth.service';
import Category from './Category.js';

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

  return (
    <form action="" method="POST" name="constraintsForm">
        <label>Select preferred time of the day for the next categories:</label><br/>

        <section className="categoriesTime" style={styles.categoriesTime}>
          <Category name='Study' />
          <Category name='Work' />
          <Category name='Hobby' />
          <Category name='Chores' />
          <Category name='Other' />
        </section>

        <button style={styles.button} name="submit" type="submit">Save Categories</button>
    </form>
  );
};

export default Categories;


{/* <section class="categories">
<p class="weekDay">Study</p>
<p class="weekDay">Work</p>
<p class="weekDay">Hobby</p>
<p class="weekDay">Chores</p>
</section>
<section class="timeOfDay" style={styles.timeOfDay}>
<select name="study">
<option value="1">Any</option>
<option value="2">Morning</option>
<option value="3">Day</option>
<option value="4">Evening</option>
</select> */}
