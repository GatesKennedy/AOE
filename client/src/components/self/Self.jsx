import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';

import CreateProfile from './CreateProfile';
import EditProfile from './EditProfile';
import Profile from './Profile';
import Profiles from './Profiles';

import Spinner from '../show/spin';
import NavProf from '../nav/NavProf';
import Alert from '../warn/Alert';
import PrivateRoute from '../routing/PrivateRoute';

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
          <Profile profile={profile} user={user} />
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
