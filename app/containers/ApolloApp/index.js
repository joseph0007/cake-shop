/**
 *
 * ApolloApp
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Composition } from 'atomic-layout';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectApolloApp from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import { mobileArea, tabletArea, desktopArea } from 'utils/global.grid';
import Card from 'components/Grid/grid';

export function ApolloApp() {
  useInjectReducer({ key: 'apolloApp', reducer });
  useInjectSaga({ key: 'apolloApp', saga });

  // console.log("desktopArea ", desktopArea);

  return (
    <div>
      <Helmet>
        <title>ApolloApp</title>
        <meta name="description" content="Description of ApolloApp" />
      </Helmet>
      <FormattedMessage {...messages.header} />
      <FormattedMessage {...messages.mainHeader} />

      <Card imageUrl={`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg`} title={`Hello World!!`}/>
    </div>
  );
}

ApolloApp.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  apolloApp: makeSelectApolloApp(),
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

export default compose(withConnect)(ApolloApp);


