import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuAOE from './MenuAOE';
import MenuMore from './MenuMore';

const Navbar = () => {
  return (
    <nav className='navi bg-dark'>
      <div className='menu'>
        <Link to='/'>
          {' '}
          <i className='fas fa-infinity' />
        </Link>
      </div>
      <div className='center'>
        <ul>
          <li>
            <Link to='/dash'>dash</Link>
          </li>
          <li>
            <Link to='/ctrl'>ctrl</Link>
          </li>
          <li>
            <Link to='/open'>open</Link>
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
