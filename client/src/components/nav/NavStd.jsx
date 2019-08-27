import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import MenuAOE from './MenuAOE';
import MenuMore from './MenuMore';

const Navbar = () => {
  return (
    <Fragment>
      <nav className='navi light'>
        <div className='center menu'>
          <Link to='/' id='menuAOE' className='center'>
            {' '}
            <i className='fas fa-infinity' />
          </Link>
        </div>
        <div className='center menu'>
          <ul>
            <Link to='/dash'>
              <li className='btn dark'>dash</li>
            </Link>
            <Link to='/ctrl'>
              <li className='btn dark'>ctrl</li>
            </Link>
            <Link to='/open'>
              <li className='btn dark'>open</li>
            </Link>
          </ul>
        </div>
        <div className='center menu'>
          <Link to='/' className=''>
            {' '}
            <i className='fas fa-wave-square' />
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
