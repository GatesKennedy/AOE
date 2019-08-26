import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <section className='theme dark hello center'>
      <div className='greeting center'>
        <h2 className='msg center'>welcome back, Friend</h2>
      </div>
      <div className='center'>
        <ul className='column'>
          <li>
            <input
              className='center input'
              type='text'
              placeholder='username'
            />
          </li>
          <li>
            <input
              className='center input'
              type='text'
              placeholder='password'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Login;
