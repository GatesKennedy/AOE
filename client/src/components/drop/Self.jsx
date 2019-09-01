import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Self = props => {
  return (
    <Fragment>
      <section class='dash group'>
        <div>
          <h4 class='group-name'>Self</h4>
        </div>
        <div class='app-grid'>...profile</div>
      </section>
    </Fragment>
  );
};

Self.propTypes = {};

export default Self;
