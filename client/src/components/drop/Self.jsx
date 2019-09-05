import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';

import Spinner from '../show/spin';

const Self = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Fragment>
      <section class='self group'>
        <Spinner />
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <section class='self group'>
        {profile !== null ? (
          <Fragment>
            <div class='app-grid'>...profile</div>
          </Fragment>
        ) : (
          <Fragment>
            <p>hmm... nothing's here yet...</p>
            <Link to='/create-profile' className='btn center dark'>
              Create Profile
            </Link>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

Self.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Self);
