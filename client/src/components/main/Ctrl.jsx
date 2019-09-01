import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentSelf } from '../../Rdx_actions/axn_self';

import Self from '../drop/Self';
import Drop from '../drop/Drop';
import Spinner from '../show/spin';

const Ctrl = ({ getCurrentSelf, auth, self: { profile, loading } }) => {
  useEffect(() => {
    getCurrentSelf();
  }, []);

  return loading && profile == null ? (
    <Fragment>
      <section className='ctrl center'>
        <Spinner />
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <section className='ctrl drop group'>
        <Self />
        <Drop />
      </section>
    </Fragment>
  );
};

Ctrl.propTypes = {
  getCurrentSelf: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  self: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  self: state.self
});

export default connect(
  mapStateToProps,
  { getCurrentSelf }
)(Ctrl);
