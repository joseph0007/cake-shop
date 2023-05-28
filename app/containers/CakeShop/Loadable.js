/**
 *
 * Asynchronously loads the component for CakeShop
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
