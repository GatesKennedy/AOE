import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../Rdx_actions/axn_auth';

import Btn_Register from './btn/btn_Register';

const Login = ({ login, isAuthenticated }) => {
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
  };

  //  Redirect if User Authenticated
  if (isAuthenticated) {
    return <Redirect to='/dash' />;
  }

  return (
    <Fragment>
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
              <input type='submit' value='go' className='btn submit light' />
            </div>
          </div>
        </form>
      </section>
      <Btn_Register />
    </Fragment>
  );
};

Login.propTypes = {
  // prop:  snip= <ptfr> 'func prop type required'
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

//  Connect Actions (state, {axn,..}) to Component (Register) to REDUX
export default connect(
  mapStateToProps,
  { login }
)(Login);
