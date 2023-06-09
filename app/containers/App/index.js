/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CakeShopPage from 'containers/CakeShop/Loadable';
import 'sass/main.scss';

// import GlobalStyle from '../../global-styles';
{/* <GlobalStyle /> */}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/cake" component={CakeShopPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
