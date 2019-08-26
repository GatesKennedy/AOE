import React from 'react';

const Join = () => {
  return (
    <section className='theme dark hello center'>
      <div className='greeting center'>
        <h2 className='msg center'>glad You could make it</h2>
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
          <li>
            <input
              className='center input'
              type='text'
              placeholder='...confirm'
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Join;
