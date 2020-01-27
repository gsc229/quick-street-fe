import React from 'react';
import { Link } from 'react-router-dom';
//styling
import navBar from '../../styles/scss/navBar.module.scss';

const Nav = () => {
  return (
    <div className={navBar.container}>
      <nav class={navBar.nav}>
        <h1>Market Avenue</h1>
        <ul class={navBar.links}>
          <li class={navBar.item}>
            <Link to='/login'>Login</Link>
          </li>
          <li class={navBar.item}>
            <Link to='/register'>Join Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
