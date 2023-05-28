import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the apolloApp state domain
 */

const selectApolloAppDomain = state => state.apolloApp || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ApolloApp
 */

const makeSelectApolloApp = () =>
  createSelector(
    selectApolloAppDomain,
    substate => substate,
  );

export default makeSelectApolloApp;
export { selectApolloAppDomain };
