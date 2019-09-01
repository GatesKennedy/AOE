//  React
import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
//  REDUX
import { connect } from 'react-redux';
import { getOpenApps } from '../../Rdx_actions/axn_open';
import PropTypes from 'prop-types';

import Find from '../drop/Find';
import Sort from '../drop/Sort';
import Drop from '../drop/Drop';
import Spinner from '../show/spin';

const Open = ({ getOpenApps, auth, open: { apps, loading } }) => {
  useEffect(() => {
    getOpenApps();
  }, []);

  return loading && apps === null ? (
    <Fragment>
      <section className='open center'>
        <Spinner />
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <section className='open drop group'>
        <Find />
        <Sort />
        <Drop />
      </section>
    </Fragment>
  );
};

Open.propTypes = {
  auth: PropTypes.object.isRequired,
  apps: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  apps: state.apps
});

export default connect(
  mapStateToProps,
  { getOpenApps }
)(Open);
