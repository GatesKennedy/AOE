//  React
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../Rdx_actions/axn_auth';

import MenuAOE from './MenuAOE';
import MenuMore from './MenuMore';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <ul>
      <Link to='/dash'>
        <li className='btn dark'>dash</li>
      </Link>
      <Link to='/ctrl'>
        <li className='btn dark'>ctrl</li>
      </Link>
      <Link to='/open'>
        <li className='btn dark'>open</li>
      </Link>
    </ul>
  );

  const guestLinks = (
    <Link to='/aoe'>
      <h2 className='center msg dark'>.: a o e :.</h2>
    </Link>
  );

  const logoutLink = (
    <Link to='/'>
      <a onClick={logout} href='#!'>
        <i name='logout' className='fas fa-sign-out-alt' />
      </a>
    </Link>
  );

  const infoLink = (
    <Link to='/' className=''>
      {' '}
      <i className='fas fa-wave-square' />
    </Link>
  );

  return (
    <Fragment>
      <nav className='navi light'>
        <div className='center menu'>
          <Link to='/' id='menuAOE' className='center'>
            {' '}
            <i className='fas fa-infinity' />
          </Link>
        </div>
        <div className='center menu'>
          {!loading && (
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          )}
        </div>
        <div className='center menu'>
          {!loading && (
            <Fragment>{isAuthenticated ? logoutLink : infoLink}</Fragment>
          )}
        </div>
      </nav>
    </Fragment>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
