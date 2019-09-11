//  React
import React, { Fragment } from 'react';
//  REDUX
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Self from '../feat/Self';
import Tool from '../feat/Tool';
import Spinner from '../show/spin';

const Ctrl = auth => {
  return (
    <Fragment>
      <section className='ctrl drop group'>
        <Self />
        <Tool />
      </section>
    </Fragment>
  );
};

Ctrl.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Ctrl);
