import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentSelf } from '../../Rdx_actions/axn_self';

import NavStd from '../nav/NavStd';
import Spinner from '../show/spin';

const Ctrl = ({ getCurrentSelf, auth, self: { profile, loading } }) => {
  useEffect(() => {
    getCurrentSelf();
  }, []);

  return loading && profile == null ? (
    <Fragment>
      <NavStd />
      <section className='center'>
        <Spinner />
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <NavStd />
      <section class='dash group'>
        <div>
          <h4 class='group-name'>aoe group1</h4>
        </div>
        <div class='app-grid'>oops.. there's nothing here yet.</div>
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
