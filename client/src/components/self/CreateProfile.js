import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    bio,
    website: '',
    location: '',
    status: '',
    interests: ''
  });

  const { bio, website, location, status, interests } = formData;

  return (
    <Fragment>
      <div className='profile form input-text'>
        <textarea
          placeholder='bio... err, what do you care about?'
          name='bio'
        ></textarea>
      </div>
      <div className='profile form input-text'>
        <input type='text' placeholder='Website..' name='website' />
        <small className='form-text'>personal or associated website..</small>
      </div>
      <div className='profile form input-text'>
        <input type='text' placeholder='Location' name='location' />
        <small className='form-text'>
          where are you in Portland? (eg. inner se)
        </small>
      </div>
      <div className='profile form'>
        <input type='submit' value='save' className='btn dark' />
        <Link to='/dash' className='btn dark'>
          bail
        </Link>
      </div>
    </Fragment>
  );
};

CreateProfile.propTypes = {};

export default CreateProfile;
