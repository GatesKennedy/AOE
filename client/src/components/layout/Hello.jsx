import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
    <div className='hello center'>
      <h2 className='greeting center'>
        hello, it's great to see You.
      </h2>
      <ul>
        <li>
          <Link to='/login' className='btn btn-light'>
            Hello again.
          </Link>
        </li>
        <li>
          <Link to='/register' className='btn btn-light'>
            New Account...
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hello;
