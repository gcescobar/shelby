/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, { useEffect } from 'react';
import {
  HashRouter as Router, Switch, Route, useLocation,
} from 'react-router-dom';

import MainNavbar from './components/custom/MainNavbar';
import MainFooter from './components/custom/MainFooter';

import Home from './pages/Home';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
