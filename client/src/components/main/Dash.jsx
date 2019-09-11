import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';

import Self from '../feat/Self';
import Tool from '../feat/Tool';
import Spinner from '../show/spin';
//import Profile from '../drop/Profile';

const Dash = ({ getCurrentProfile, auth: { user } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const [displaySelf, toggleSelf] = useState(false);
  const [displayTool, toggleTool] = useState(true);

  return (
    <Fragment>
      <section>
        <div
          onClick={() => toggleSelf(!displaySelf)}
          type='button'
          className='group-name dash drop group'
        >
          <h4>
            <i className='fas fa-user white'></i>
            {user && user.username}
          </h4>
        </div>
        {displaySelf && <Self />}

        <div
          onClick={() => toggleTool(!displayTool)}
          type='button'
          className='group-name dash drop group'
        >
          <h4>tool group</h4>
        </div>
        {displayTool && <Tool />}
      </section>
    </Fragment>
  );
};

Dash.propTypes = {
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
)(Dash);
