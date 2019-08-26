import React, { Fragment } from 'react';
import NavStd from '../nav/NavStd';

const Open = () => {
  return (
    <Fragment>
      <NavStd />
      <section class='dash group'>
        <div>
          <h4 class='group-name'>
            <i class='fas fa-search' />
            <input
              class='search'
              type='text'
              placeholder=' ...are You curious?'
            />
          </h4>
        </div>
      </section>

      <section class='dash group'>
        <div>
          <h4 class='group-name'>
            <i class='fas fa-filter' />
          </h4>
        </div>
        <div class='app-grid'>oops.. there's nothing here yet.</div>
      </section>
    </Fragment>
  );
};

export default Open;
