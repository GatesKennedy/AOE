import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMin from '../nav/NavMin';
import axios from 'axios';

const Join = () => {
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
      console.log('MSG: password confirmation failed');
    } else {
      console.log(formData);
      console.log('welcome..');

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
    }
  };

  return (
    <Fragment>
      <NavMin />
      <section className='theme dark hello center'>
        <div className='greeting center'>
          <h2 className='msg center'>glad You could make it</h2>
        </div>
        <form className='form-auth center' onSubmit={e => onSubmit(e)}>
          <ul className='column'>
            <li>
              <input
                name='username'
                type='text'
                value={username}
                onChange={e => onChange(e)}
                placeholder='username'
                className='center input'
                required
              />
            </li>
            <li>
              <input
                name='email'
                type='email'
                value={email}
                onChange={e => onChange(e)}
                placeholder='email'
                className='center input'
              />
            </li>
            <li>
              <input
                name='password'
                type='password'
                value={password}
                onChange={e => onChange(e)}
                placeholder='password'
                className='center input'
                minLength='6'
              />
            </li>
            <li>
              <input
                name='pwConfirm'
                type='password'
                value={pwConfirm}
                onChange={e => onChange(e)}
                placeholder='...confirm'
                className='center input'
                minLength='6'
              />
            </li>
            <li className='center options'>
              <input type='submit' className='btn light' value='submit' />
            </li>
          </ul>
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

export default Join;
