import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (password) {
      console.log('MSG: password confirmation failed');
    } else {
      console.log(formData);
    }
  };

  return (
    <Fragment>
      <section className='theme dark hello center'>
        <div className='greeting center'>
          <h2 className='msg center'>welcome back, Friend</h2>
        </div>
        <form className='center' onSubmit={e => onSubmit(e)}>
          <ul className='column'>
            <li>
              <input
                name='username'
                type='text'
                value={username}
                onChange={e => onChange(e)}
                placeholder='username'
                className='center input'
              />
            </li>
            <li>
              <input
                name='username'
                type='password'
                value={password}
                onChange={e => onChange(e)}
                placeholder='password'
                className='center input'
              />
            </li>
            <li className='center options'>
              <input type='submit' value='login' className='btn submit light' />
            </li>
          </ul>
        </form>
      </section>
    </Fragment>
  );
};

export default Login;
