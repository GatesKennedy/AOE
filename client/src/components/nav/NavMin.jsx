import React from 'react';
import { Link } from 'react-router-dom';
import MenuAOE from './MenuAOE';
import MenuMore from './MenuMore';

const NavMin = () => {
  return (
    <nav className='navi dark'>
      <div className='menu'>
        <Link to='/'>
          {' '}
          <i className='light fas fa-infinity' />
        </Link>
      </div>
      <div className='menu center'>
        <h2 className='center msg dark'>.: a o e :.</h2>
      </div>
      <div className='menu'>
        <Link to='/'>
          {' '}
          <i className='light fas fa-wave-square' />
        </Link>
      </div>
    </nav>
  );
};

export default NavMin;
