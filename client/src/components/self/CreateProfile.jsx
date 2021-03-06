import React, { useState, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createProfile } from '../../Rdx_actions/axn_profile';

const CreateProfile = ({ createProfile, history }) => {
  const [formData, setFormData] = useState({
    nameIRL: '',
    bio: '',
    website: '',
    location: ''
  });

  const { nameIRL, bio, website, location } = formData;

  const [displayBio, toggleBio] = useState(false);

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    createProfile(formData, history);
  };

  return (
    <Fragment>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <section>
          <div className='profile form-group input-text'>
            <input
              type='text'
              className='form-field'
              placeholder='real name..'
              name='nameIRL'
              value={nameIRL}
              onChange={e => onChange(e)}
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
                value={bio}
                onChange={e => onChange(e)}
              ></textarea>
            </Fragment>
          )}

          <div className='profile form-group input-text'>
            <input
              type='text'
              className='form-field'
              placeholder='website..'
              name='website'
              value={website}
              onChange={e => onChange(e)}
            />
            <small className='form-prompt'>
              personal or associated website..
            </small>
          </div>

          <div className='profile form-group input-text'>
            <select
              className='form-field'
              name='location'
              value={location}
              onChange={e => onChange(e)}
            >
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
  createProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

export default connect(
  null,
  { createProfile }
)(withRouter(CreateProfile));
