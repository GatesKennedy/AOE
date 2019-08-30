import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMin from '../nav/NavMin';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../Rdx_actions/axn_auth';
//  import axios from 'axios';

const Login = ({ login }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    login({ username, password });
    console.log('Login.jsx: onSubmit(): formData:');
    console.log(formData);
    // if (password) {
    //   console.log('MSG: password confirmation failed');
    // } else {
    //   console.log(formData);
    //   console.log('hello again..');
    // }
  };

  return (
    <Fragment>
      <NavMin />
      <section className='theme dark hello center'>
        <div className='greeting center'>
          <h2 className='msg center'>welcome back, Friend</h2>
        </div>
        <form className='center' onSubmit={e => onSubmit(e)}>
          <div className='column form-group'>
            <div className='form-field'>
              <input
                name='username'
                type='text'
                value={username}
                onChange={e => onChange(e)}
                placeholder='username'
                className='center input'
              />
            </div>
            <div className='form-field'>
              <input
                name='password'
                type='password'
                value={password}
                onChange={e => onChange(e)}
                placeholder='password'
                className='center input'
              />
            </div>
            <div className='center options'>
              <input type='submit' value='login' className='btn submit light' />
            </div>
          </div>
        </form>
      </section>
      <p className='center options'>
        <Link to='/join'>
          <button className='btn submit light'>join?</button>
        </Link>
      </p>
    </Fragment>
  );
};

Login.propTypes = {
  // prop:  snip= <ptfr> 'func prop type required'
  login: PropTypes.func.isRequired
};

//  Connect Actions (state, {axn,..}) to Component (Register) to REDUX
export default connect(
  null,
  { login }
)(Login);
