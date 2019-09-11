//  React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Rdx_actions/axn_auth';
import { isNullOrUndefined } from 'util';

var btns = {
  btn1: {
    title: 'dash',
    link: '/dash'
  },
  btn2: {
    title: 'ctrl',
    link: '/ctrl'
  },
  btn3: {
    title: 'open',
    link: '/open'
  }
};

const Nav3 = btns => {
  return (
    <div className='center main'>
      <Link to={btn1.link}>
        <btn className='btn dark'>{btn1.title}</btn>
      </Link>
      <Link to={btn2.link}>
        <btn className='btn dark'>{btn2.title}</btn>
      </Link>
      <Link to={btn3.link}>
        <btn className='btn dark'>{btn3.title}</btn>
      </Link>
    </div>
  );
};

export default Nav3;
