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
            <li>
              <button>login</button>
            </li>
            <li>
              <button>join</button>
            </li>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

export default Hello;
