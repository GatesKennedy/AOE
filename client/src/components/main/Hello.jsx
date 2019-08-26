import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NavMin from '../nav/NavMin';

const Hello = () => {
  return (
    <Fragment>
      <NavMin />
      <section className='theme dark hello center'>
        <div className='greeting center'>
          <h2 className='msg center'>hello, it's great to see You</h2>
        </div>
        <div className='options center'>
          <ul>
            <Link to='/login'>
              <li className='btn light'>login</li>
            </Link>
            <Link to='/join'>
              <li className='btn light'>join</li>
            </Link>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Hello;
