import React from 'react';
import { Link } from 'react-router-dom';

const btn_Login = () => {
  return (
    <div className='center options'>
      <Link to='/login'>
        <button className='btn submit light'>login?</button>
      </Link>
    </div>
  );
};

export default btn_Login;
