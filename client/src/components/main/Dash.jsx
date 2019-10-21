import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';

import Self from '../self/Self';
import Tool from '../feat/Tool';
import Spinner from '../show/spin';
import NavProf from '../nav/NavProf';
import NavMinor from '../nav/NavMinor';
import DropGroup from '../feat/DropGroup';
//import Profile from '../drop/Profile';

const Dash = ({ getCurrentProfile, auth: { user } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const [displaySelf, toggleSelf] = useState(false);
  const [displayTool, toggleTool] = useState(true);

  const btn1 = 'self';
  const btn2 = 'edit';
  const btn3 = 'they';

  return (
    <Fragment>
      <section>
        <div
          onClick={() => toggleSelf(!displaySelf)}
          type='button'
          className='group-name dash drop group'
        >
          <div className='group-header'>
            <div className='header-title'>
              <div>
                <i className='fas fa-user white'></i>
                {user && user.username}
              </div>
            </div>
            <div className='header-nav'>{displaySelf ? <NavProf /> : ''}</div>
            <div className='header-end'>.:.</div>
          </div>
        </div>
        {displaySelf && <Self />}

        <DropGroup />
        <DropGroup />
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
