import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Self from '../drop/Self';
import Tool from '../drop/Tool';
import Spinner from '../show/spin';
//import Profile from '../drop/Profile';

const Dash = auth => {
  return (
    <Fragment>
      <section className='dash drop group'>
        <Self />
        <Tool />
      </section>
    </Fragment>
  );
};

Dash.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dash);
