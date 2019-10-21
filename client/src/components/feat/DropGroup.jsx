import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';
import { getGroupBody } from '../../Rdx_actions/axn_profile';

import DropBody from './DropBody';

const DropGroup = ({ getCurrentProfile, auth: { user } }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  const [displayBody, toggleBody] = useState(true);

  return (
    <Fragment>
      <section>
        <div
          onClick={() => toggleBody(!displayBody)}
          type='button'
          className='group-header DropGroup drop group'
        >
          <h4>
            <i className='fas fa-toolbox'></i>
            drop group
          </h4>
        </div>
        {displayBody && <DropBody />}
      </section>
    </Fragment>
  );
};

DropGroup.propTypes = {
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
)(DropGroup);
