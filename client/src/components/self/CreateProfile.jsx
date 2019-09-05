import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../Rdx_actions/axn_profile';

import Spinner from '../show/spin';

const CreateProfile = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile, loading }
}) => {
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    website: '',
    location: ''
  });

  const [displayBio, toggleBio] = useState(false);

  const { name, bio, website, location } = formData;

  return loading && profile === null ? (
    <Fragment>
      <section className='self group center'>
        <Spinner />
      </section>
    </Fragment>
  ) : (
    <Fragment>
      <form className='form'>
        <section>
          <div className='profile form-group input-text'>
            <input
              type='text'
              className='form-field'
              placeholder='real name..'
              name='name'
            />
            <small className='form-prompt'>who are You, really?</small>
          </div>

          <div className='profile form-group input-text'>
            <button
              onClick={() => toggleBio(!displayBio)}
              type='button'
              className='btn dark'
            >
              edit bio
            </button>
            <small class='form-prompt'>what excites You?</small>
          </div>

          {displayBio && (
            <Fragment>
              <textarea
                className='form-field'
                placeholder='bio... err, what do you care about?'
                name='bio'
              ></textarea>
            </Fragment>
          )}

          <div className='profile form-group input-text'>
            <input
              type='text'
              className='form-field'
              placeholder='website..'
              name='website'
            />
            <small className='form-prompt'>
              personal or associated website..
            </small>
          </div>

          <div className='profile form-group input-text'>
            <select className='form-field' name='location'>
              <option value='0'>where?</option>
              <option value='inner_southeast'>inner southeast</option>
              <option value='outer_southeast'>outer southeast</option>
              <option value='inner_northeast'>inner northeast</option>
              <option value='outer_northeast'>outer northeast</option>
              <option value='inner_southwest'>inner southwest</option>
              <option value='outer_southwest'>outer southwest</option>
              <option value='northwest'>northwest</option>
              <option value='saint_johns'>saint johns</option>
            </select>
            <small className='form-prompt'>
              where are You in Portland? (eg. inner se)
            </small>
          </div>
        </section>
        <div className='profile center'>
          <input type='submit' value='save' className='btn dark' />
          <Link to='/dash' className='btn dark'>
            bail
          </Link>
        </div>
      </form>
    </Fragment>
  );
};

CreateProfile.propTypes = {
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
)(CreateProfile);
