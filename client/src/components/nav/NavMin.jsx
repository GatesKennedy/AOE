import React from 'react';
import MenuAOE from './MenuAOE';
import MenuMore from './MenuMore';

const NavMin = () => {
  return (
    <nav className='navi dark'>
      <div className='menu'>
        <a href='aoe.html'>
          {' '}
          <i className='light fas fa-infinity' />
        </a>
      </div>
      <div className='menu center'>
        <h2 className='center msg dark'>.: a o e :.</h2>
      </div>
      <div className='menu'>
        <a href='curious.html'>
          {' '}
          <i className='light fas fa-wave-square' />
        </a>
      </div>
    </nav>
  );
};

export default NavMin;
