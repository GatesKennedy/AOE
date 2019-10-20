import React, { Fragment, UseEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../show/spin';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';

const Profile = ({
  profile: { bio, location, website },
  user: { username, _id, email }
}) => {
  return (
    <Fragment>
      <div>
        <h5>self: {username}</h5>
        <p>bio: {bio}</p>
        <div>local: {location} </div>
      </div>
    </Fragment>
  );
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default Profile;
