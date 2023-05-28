/*
 * ApolloApp Messages
 *
 * This contains all the text for the ApolloApp container.
 */

import { defineMessages } from 'react-intl';

export const scope = 'app.containers.ApolloApp';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'This is the ApolloApp container!',
  },
  mainHeader: {
    id: `${scope}.mainHeader`,
    defaultMessage: 'Hello!! there you are.',
    description: 'Im here to describe!!'
  }
});
