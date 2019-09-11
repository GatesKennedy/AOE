import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NavProf = () => {
  return (
    <Fragment>
      <div className=' main'>
        <div className='center'>
          <Link to='/createProfile'>
            <btn className='btn dark'>edit</btn>
          </Link>
          <Link to='/dash'>
            <btn className='btn dark'>view</btn>
          </Link>
        </div>
        <div className='center'>.:.</div>
      </div>
    </Fragment>
  );
};

export default NavProf;
