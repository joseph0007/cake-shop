/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from 'atomic-layout'

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ApolloApp from 'containers/ApolloApp/Loadable';
import Card from 'components/Grid/grid';

import GlobalStyle from '../../global-styles';

export default function App() {
  useEffect(() => {
    Layout.configure({
      defaultUnit: 'rem',
      defaultBehavior: 'up'
    });
  }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/apollo" component={ApolloApp} />
        <Route exact path="/grid" component={() => <Card imageUrl={`https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg`} title={`Hello World!!`} />} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
