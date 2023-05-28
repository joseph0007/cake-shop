/**
 *
 * CakeShop
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCakeShop from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './sass.scss';

export function CakeShop() {
  useInjectReducer({ key: 'cakeShop', reducer });
  useInjectSaga({ key: 'cakeShop', saga });

  return (
    <div>
      <Helmet>
        <title>CakeShop</title>
        <meta name="description" content="Description of CakeShop" />
      </Helmet>
      
      <div className='row'>
        <div className='col-1-of-2'>
          <FormattedMessage {...messages.header} />
        </div>
        <div className='col-1-of-2'>
          <FormattedMessage {...messages.header} />
        </div>
      </div>
    </div>
  );
}

CakeShop.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cakeShop: makeSelectCakeShop(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CakeShop);
