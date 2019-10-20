import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavProf = (_btn1, _btn2, _btn3) => {
  return (
    <Fragment>
      <div className=' main'>
        <div className='center'>
          <Link to='/edit-profile'>
            <btn className='btn dark'>{_btn1}</btn>
          </Link>
          <Link to='/self'>
            <btn className='btn dark'>{_btn2}</btn>
          </Link>
          <Link to='/profiles'>
            <btn className='btn dark'>{_btn3}</btn>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NavProf;
