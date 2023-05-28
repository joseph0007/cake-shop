import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the cakeShop state domain
 */

const selectCakeShopDomain = state => state.cakeShop || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CakeShop
 */

const makeSelectCakeShop = () =>
  createSelector(
    selectCakeShopDomain,
    substate => substate,
  );

export default makeSelectCakeShop;
export { selectCakeShopDomain };
