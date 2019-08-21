import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navi bg-dark'>
      <div className='menu'>
        <a href='aoe.html'>
          {' '}
          <i className='fas fa-infinity' />
        </a>
      </div>
      <div className='center'>
        <ul>
          <li>
            <a href='dash.hmtl'>dash</a>
          </li>
          <li>
            <a href='ctrl.hmtl'>ctrl</a>
          </li>
          <li>
            <a href='open.hmtl'>open</a>
          </li>
        </ul>
      </div>
      <div className='menu'>
        <a href='curious.html'>
          {' '}
          <i className='fas fa-wave-square' />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
