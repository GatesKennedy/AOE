//  React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Rdx_actions/axn_auth';

import MenuAOE from './MenuAOE';
import MenuMore from './MenuMore';

const NavStd = ({ auth: { isAuthenticated, loading }, logout }) => {
  let btns = {
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

  const authLinks = (
    <nav className='navi light'>
      <div className='center menu'>
        <Link to='/' id='menuAOE' className='center'>
          {' '}
          <i className='dark fas fa-infinity' />
        </Link>
      </div>
      <div className='center main'>
        <Link to='/dash'>
          <btn className='btn dark'>dash</btn>
        </Link>
        <Link to='/ctrl'>
          <btn className='btn dark'>ctrl</btn>
        </Link>
        <Link to='/open'>
          <btn className='btn dark'>open</btn>
        </Link>
      </div>
      <div className='center menu'>
        <Link to='/'>
          <a onClick={logout} href='#!'>
            <i name='logout' className='dark fas fa-sign-out-alt' />
          </a>
        </Link>
      </div>
    </nav>
  );

  const guestLinks = (
    <nav className='navi dark'>
      <div className='center menu'>
        <Link to='/' id='menuAOE' className='center'>
          {' '}
          <i className='fas fa-infinity' />
        </Link>
      </div>
      <div className='center menu'>
        <Link to='/aoe'>
          <h2 className='center msg dark'>.: a o e :.</h2>
        </Link>
      </div>
      <div className='center menu'>
        <Link to='/' className=''>
          {' '}
          <i className='fas fa-wave-square' />
        </Link>
      </div>
    </nav>
  );

  return (
    <Fragment>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </Fragment>
  );
};

NavStd.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(NavStd);
