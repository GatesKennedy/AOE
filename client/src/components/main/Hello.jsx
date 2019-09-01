import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavStd from '../nav/NavStd';

const Hello = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to='/dash' />;
  }

  return (
    <Fragment>
      <section className='theme dark hello center'>
        <div className='greeting center'>
          <h2 className='msg center'>hello, it's great to see You</h2>
        </div>
        <div className='options center'>
          <ul>
            <Link to='/login'>
              <li className='btn light'>login</li>
            </Link>
            <Link to='/register'>
              <li className='btn light'>join</li>
            </Link>
          </ul>
        </div>
      </section>
    </Fragment>
  );
};

Hello.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Hello);
