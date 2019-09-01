import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentSelf } from '../../Rdx_actions/axn_self';

import Self from '../drop/Self';
import Drop from '../drop/Drop';
import Spinner from '../show/spin';

const Dash = ({ getCurrentSelf, auth, self: { profile, loading } }) => {
  return loading && profile === null ? (
    <Fragment>
      <section className='dash center'>
        <Spinner />
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <section className='dash drop group'>
        <Self />
        <Drop />
      </section>
    </Fragment>
  );
};

Dash.propTypes = {
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
)(Dash);
