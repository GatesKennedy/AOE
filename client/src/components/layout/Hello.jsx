import React from 'react';
import { Link } from 'react-router-dom';

const Hello = () => {
  return (
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
  );
};

export default Hello;
