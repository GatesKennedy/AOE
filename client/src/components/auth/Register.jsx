//  React
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMin from '../nav/NavMin';
import PropTypes from 'prop-types';
//  REDUX
import { connect } from 'react-redux';
import { setAlert } from '../../Rdx_actions/axn_alert';
import { register } from '../../Rdx_actions/axn_auth';

//  import axios from 'axios';

//  destructure props.setAlert
//  const Join = props => {
const Register = ({ setAlert, register }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    pwConfirm: ''
  });

  const { username, email, password, pwConfirm } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== pwConfirm) {
      // destructured props.setAlert
      setAlert("oh no... passwords don't match", 'warn');
    } else {
      register({ username, email, password });
    }
  };

  //=== Handled by REDUX ===
  // const newUser = {
  //   username,
  //   email,
  //   password
  // };
  // try {
  //   const config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   const body = JSON.stringify(newUser);
  //   const res = await axios.post('/api/users', body, config);
  //   console.log(res.data);
  // } catch (err) {
  //   console.error(err.response.data);
  // }

  return (
    <Fragment>
      <NavMin />
      <section className='theme dark hello center'>
        <div className='greeting center'>
          <h2 className='msg center'>glad You could make it</h2>
        </div>
        <form className='form-auth center' onSubmit={e => onSubmit(e)}>
          <div className='column form-group'>
            <div className='form-field'>
              <input
                name='username'
                type='text'
                value={username}
                placeholder='username'
                className='center input'
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-field'>
              <input
                name='email'
                type='email'
                value={email}
                placeholder='email'
                className='center input'
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-field'>
              <input
                name='password'
                type='password'
                value={password}
                placeholder='password'
                className='center input'
                onChange={e => onChange(e)}
              />
            </div>
            <div className='form-field'>
              <input
                name='pwConfirm'
                type='password'
                value={pwConfirm}
                placeholder='...confirm'
                className='center input'
                onChange={e => onChange(e)}
              />
            </div>
            <div className='center options'>
              <input
                type='submit'
                value='submit'
                className='btn submit light'
              />
            </div>
          </div>
        </form>
      </section>
      <p className='center options'>
        <Link to='/login'>
          <button className='btn light'>login?</button>
        </Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  // prop     snip: <ptfr> 'func prop type required'
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

//  Connect Actions (state, {axn,..}) to Component (Register) to REDUX
export default connect(
  null,
  { setAlert, register }
)(Register);
