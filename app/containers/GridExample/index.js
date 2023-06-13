/**
 *
 * GridExample
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import './sass.scss';

export function GridExample() {
  return (
    <div className='grid-container'>
      <div className='grid-item color1'>Header</div>
      <div className='grid-item color2'>Menu</div>
      <div className='grid-item color3'>Content</div>
      <div className='grid-item color4'>Footer</div>
    </div>
  );
}

GridExample.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(GridExample);
