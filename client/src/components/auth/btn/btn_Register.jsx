import React from 'react';
import { Link } from 'react-router-dom';

const btn_Register = () => {
  return (
    <div className='center options'>
      <Link to='/register'>
        <button className='btn submit light'>join?</button>
      </Link>
    </div>
  );
};

export default btn_Register;
