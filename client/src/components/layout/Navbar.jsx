import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navi light-s1'>
      <ul>
        <li>
          <Link to='/dash'>Self</Link>
        </li>
        <li>
          <Link to='/ctrl'>ctrl</Link>
        </li>
        <li>
          <Link to='/open'>they</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to='/Login'>login</Link>
        </li>
        <li>
          <Link to='/Register'>register</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
